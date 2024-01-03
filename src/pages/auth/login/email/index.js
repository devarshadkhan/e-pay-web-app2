import React, { useState } from "react";
import styles from "@/styles/auth/Phone.module.css";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { toast } from "react-toastify";
import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";
import Link from "next/link";

const Index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await Axiosintance.post(API.login_with_email, data)
      .then((res) => {
        console.log(res);
          if (res) {
            setLoading(false);
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
              const params = new URLSearchParams(data).toString();
            router.push(`/auth/login/verify-otp-login-with-email/?${params}`)
          }
      })
      .catch((err) => {
        setLoading(false);
        toast(err.message ? err?.response?.data?.message: err.message, {
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
                    name="email"
                    control={control}
                    rules={{
                      required: true,
                    }} // Add validation rules
                    render={({ field }) => (
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                         Email Address
                        </label>
                        <input
                          type="email"
                          {...field}
                          placeholder="jhondeo@gmail.com"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        {errors.email && (
                          <span className={styles.err}>
                          Email Address is required
                          </span>
                        )}
                      </div>
                    )}
                  />

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
                      "Get OTP"
                    )}
                  </button>

                  <p>
                    Your journey to hassle-free utility payments begins here
                    <Link href={"/auth/login/login"}> login</Link>
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
