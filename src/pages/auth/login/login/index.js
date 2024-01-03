import React, { useState } from "react";
import styles from "@/styles/auth/Login/Login.module.css";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { toast } from "react-toastify";
import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";
import Link from "next/link";
import Layout from "@/layout/Layout";

const Index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await Axiosintance.post(API.user_login, data)
      .then((res) => {
        const params = new URLSearchParams(data).toString();
        // router.push(`/auth/register/verify-number-send-otp/?${params}`);
        localStorage.setItem("userToken", res?.data?.token);
        setLoading(false);
        console.log(res);
        toast(res?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast(err.message ? err?.response?.data?.message : err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  const isEmailOrPhoneOrUserID = (value) => {
    // Regular expressions for email, phone, and user_id patterns
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phonePattern = /^\d{10}$/; // Adjust to your phone number pattern
    const userIDPattern = /^\d{6}$/; // Adjust to your user_id pattern

    if (!value) {
      return "This field is required";
    }

    if (emailPattern.test(value)) {
      return true;
    }

    if (phonePattern.test(value)) {
      return true;
    }

    if (userIDPattern.test(value)) {
      return true;
    }

    return "Invalid format. Enter a valid email, phone, or user_id";
  };

  return (
    <>
      <div className={styles.phonelogin}>
        <div className={classNames(styles.container_fluid, "container-fluid")}>
          <div className="row">
            <div className="col-4">
              <AuthImgSidebar />
            </div>
            <div className={classNames("col-8", styles.colsecNum)}>
              <div className={styles.phoneNumber}>
                <h3>
                  Join & Connect this Fast Growing{" "}
                  <span className="break">Community</span>
                </h3>
                <form action="POST" onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="username"
                    control={control}
                    rules={{
                      validate: isEmailOrPhoneOrUserID,
                    }} // Add validation rules
                    render={({ field }) => (
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          username
                        </label>
                        <input
                          type="text"
                          {...field}
                          placeholder="  login with email or phone & user id"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />

                        {errors.username && (
                          <span className={styles.err}>
                            Username is required
                          </span>
                        )}
                      </div>
                    )}
                  />

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      password
                    </label>
                    <div className={styles.input_Div}>
                      <input
                        type={!showPassword ? "password" : "text"}
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="*********"
                        {...register("password", {
                          required: true,
                          message: "Password is required",
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-\+=:;"'?\/>.<,{}\[\]])[a-zA-Z\d~`!@#$%^&*()_\-\+=:;"'?\/>.<,{}\[\]]{8,}$/,
                            message:
                              "Password must be 8 characters and must contain atleast 1 small alphabet, 1 capital alphabet, 1 numeric value and 1 special character",
                          },
                          minLength: {
                            value: 8,
                            message:
                              "password should contain minimum 8 charaters long",
                          },
                          maxLength: {
                            value: 20,
                            message:
                              "password should contain maximum 20 charaters long",
                          },
                          // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />

                      <i
                        class={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                        onClick={handleTogglePassword}
                      ></i>
                    </div>
                    {errors.password && (
                      <span className={styles.err}>
                        {" "}
                        {errors?.password?.message || "Password is required"}
                      </span>
                    )}
                  </div>

                  <button type="submit" className={classNames(styles.otpBtn)}>
                    {loading ? (
                      <>
                        <div
                          class="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden"></span>
                        </div>
                      </>
                    ) : (
                      "Next"
                    )}
                  </button>
                  <div className="d-flex justify-content-between">
                    <p>
                      Another login via{" "}
                      <Link href={"/auth/login/phone"}>phone</Link>
                    </p>
                    <p>
                      Another login via{" "}
                      <Link href={"/auth/login/email"}>Email</Link>
                    </p>
                  </div>
                  <p>
                    Your journey to hassle-free utility payments begins here
                    <Link href={"/auth/register/phone"}> register</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;


Index.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};