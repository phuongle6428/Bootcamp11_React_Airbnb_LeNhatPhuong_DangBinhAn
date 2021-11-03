import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { register } from "../actions/auth";

const schema = yup.object().shape({
  address: yup.string().required("Địa chỉ không được để trống"),
  password: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(8, "Mật khẩu phải từ 8 kí tự"),
  email: yup
    .string()
    .required("Email không được để trống")
    .email("Email không hợp lệ"),
  name: yup.string().required("Họ tên không được để trống"),
  phone: yup.string().required("Số điện thoại không được để trống"),
});

export default function Register() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      password: "",
      email: "",
      address: "",
      phone: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    dispatch(register(values, handleRegisterSuccess));
  };

  const handleRegisterSuccess = () => {
    // Điều hướng qua trang login
    history.push("/login");
  };
  console.log("re-render")
  return (
    <>
      <div>ĐĂNG KÝ</div>
      {console.log(errors, "errors")}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Tài khoản */}
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Tài Khoản"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </div>

        {/* Mật khẩu */}
        <div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Mật khẩu"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => {
              { console.log(field, "name") }
              { console.log(fieldState, "fieldState") }
              return (
                <TextField
                  {...field}
                  label="Họ Tên"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )
            }}
          />
        </div>

        <div>
          <Controller
            name="hoTen"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Họ Tên"
                error={!!errors.hoTen}
                helperText={errors.hoTen?.message}
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Số điện thoại"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />
        </div>

        {error && <p>{error}</p>}

        <button disabled={isLoading}>Đăng ký</button>
        <button onClick={(e) => {
          e.preventDefault(); history.push("/login")
        }} disabled={isLoading}>Đăng nhập</button>
      </form>
    </>
  );
}
