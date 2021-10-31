import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from '../actions/auth';

const schema = yup.object({
    email: yup.string().required("Tài khoản không được để trống"),
    password: yup.string().required("Mật khẩu không được để trống"),
}).required();

export default function Login() {
    const dispatch = useDispatch()
    const {isLoading, error} = useSelector(state => state.auth)
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { email: "", password: "", }
    });
    const onSubmit = data => {
        console.log(data);
        dispatch(login(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="email"
                control={control}
                render={({ field }) => 
                    (<TextField 
                    {...field}
                    label="Tài khoản"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />)}
            />
            <Controller
                name="password"
                control={control}
                render={({ field }) => 
                    (<TextField 
                    {...field}
                    label="Mật khẩu"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />)}
            />
            <input type="submit" />
        </form>
    );
}
