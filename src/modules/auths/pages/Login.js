import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from '../actions/auth';
import { useHistory } from 'react-router';
import { Inbox, AccountBox, VpnKey } from '@material-ui/icons';
import { InputGroup, Modal } from 'react-bootstrap';
import ModalLR from './ModalLR';
const schema = yup.object({
  email: yup.string().required("Tài khoản không được để trống"),
  password: yup.string().required("Mật khẩu không được để trống"),
}).required();

export default function Login() {
  const dispatch = useDispatch()
  const { userBackData, isLoading, error } = useSelector(state => state.auth)
  console.log(userBackData)
  const history = useHistory()
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "", }
  });
  if (userBackData) {

  }
  const onSubmit = data => {
    console.log(data);
    dispatch(login(data))
  }

  return (
    <ModalLR>
      <Modal.Header closeButton>
        <Modal.Title>ĐĂNG NHẬP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} id="loginform" className="d-flex flex-column align-items-center">
          <div>
            <div className="d-flex align-items-baseline">
              <div><AccountBox /></div>
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
            </div>
          </div>
          <div>
            <div className="d-flex align-items-baseline">
              <div><VpnKey /></div>
              <Controller
                name="password"
                control={control}
                render={({ field }) =>
                (<TextField
                  {...field}
                  type="password"
                  label="Mật khẩu"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />)}
              />
            </div>
          </div>
          {error && <div>{error}</div>}
        </form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center flex-column" >
        <Button variant="contained" color="primary" endIcon={<Inbox />} type="submit" disabled={isLoading} form="loginform">
          Đăng Nhập
        </Button>
        <div className="text-center">
          Bạn chưa có Tài Khoản ?
          <button onClick={(e) => {
            e.preventDefault(); history.push("/register")
          }} disabled={isLoading}>Đăng Ký</button>
        </div>
      </Modal.Footer>
    </ModalLR>
  );
}
