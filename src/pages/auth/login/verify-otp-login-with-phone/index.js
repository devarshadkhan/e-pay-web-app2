import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "@/styles/auth/Login/VerifyMobile.module.css";
import classNames from "classnames";
import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";
import OTPInput from "react-otp-input";
const Index = () => {
  const router = useRouter();
  const params = router.query;
const [loading,setLoading]= useState(false)
  const [phoneOTP, setPhoneOTP] = useState("");
  const [phoneNumber,setPhoneNumber] = useState(params.phone)

  const handleLogin = async () => {
    setLoading(true);
    await Axiosintance.post(API.verify_login_phone_OTP, {
        phone: phoneNumber,
        phoneOtp: phoneOTP
    })
      .then((res) => {
        console.log(res.data.token);
        console.log(res.data.message);
       

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
              localStorage.setItem("userToken", res.data.token)
            //   const params = new URLSearchParams(data).toString();
            // router.push(`/auth/login/verify-otp-login-with-phone/?${params}`)
          }
      })
      .catch((err) => {
        console.log(err.message ? err.message: err.message);
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
      <div className={styles.verify_otp}>
        <div className={classNames(styles.container_fluid, "container-fluid")}>
          <div className="row">
            <div className="col-4">
              <AuthImgSidebar />
            </div>
            <div className={classNames("col-8", styles.col)}>
              <div className={classNames(styles.container, "container")}>
                <div className="row h-100">
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <h1>Verify OTP</h1>
                  </div>
                  <div className={styles.centr}>
                    <div className={styles.columset}>
                      <div className={classNames(styles.customInpOpt, "mb-5")}>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Phone Number
                          </label>
                          <div className="">
                            <input
                              value={params.phone}
                              disabled
                              onChange={(e)=> setPhoneNumber(e.target.value)}
                              //   onChange={setEmailOTP}
                              //   numInputs={6}
                              //   renderSeparator={<span>-</span>}
                              style={{ width: "100%" }}
                              className={classNames(
                                styles.phoneI,
                                "form-control"
                              )}
                              //   renderInput={(props) => <input {...props} />}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.customInpOpt}>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Enter phone OTP
                          </label>
                          <div className="d-flex justify-content-between ">
                            <OTPInput
                              value={phoneOTP}
                              onChange={setPhoneOTP}
                              numInputs={6}
                              renderSeparator={<span>-</span>}
                              renderInput={(props) => (
                                <input {...props} style={{ width: "47px" }} />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                        //   className={classNames(styles.next_btn, isOTPVerified ? styles.next_btn : styles.disabled)}
                        //   className={classNames(styles.next_btn, {
                        //     [styles.disabled]: !isOTPVerified, // Add a CSS class for disabled style
                        //   })}
                          onClick={handleLogin}
                        //   disabled={!isOTPVerified}
                          //   onClick={() =>
                          //     router.push(`/auth/register/password/?${_data}`)
                          //   }
                            className={styles.next_btn}
                        >
                          {loading ? <> <div
                          class="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden"></span>
                        </div></>:"Login"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

//  {/* {!isEmailOTPVerified && (
//                 <>
//                   <div cassName={styles.customInpOpt}>
//                   <label for="exampleInputEmail1" class="form-label">
//                     Email OTP
//                   </label>
//                   <div className="d-flex justify-content-between ">
//                   <input
//                       type="text"
//                       name="emailOTP"
//                       placeholder="Enter Email OTP"
//                       value={emailOTP}
//                       onChange={(e) => setEmailOTP(e.target.value)}
//                     />
//                     <button onClick={handleEmailOTPSubmit}>
//                       Submit Email OTP
//                     </button>
//                   </div>

//                   </div>
//                 </>
//               )} */}

//               {/* {isEmailOTPVerified && (
//                 <>
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phoneInput"
//                     disabled
//                     value={params.phone || "90909****"}
//                   />
//                   <button onClick={handlePhoneGetOTPClick}>
//                     Get Phone OTP
//                   </button>
//                   <input
//                     type="text"
//                     name="phoneOTP"
//                     placeholder="Enter Phone OTP"
//                     value={phoneOTP}
//                     onChange={(e) => setPhoneOTP(e.target.value)}
//                   />
//                   <button onClick={handlePhoneOTPSubmit}>
//                     Submit Phone OTP
//                   </button>
//                 </>
//               )} */}

//               {/* {isEmailOTPVerified && phoneOTP && (
//                 <div>
//                   <button
//                     onClick={() =>
//                       router.push(`/auth/register/password/?${_data}`)
//                     }
//                   >
//                     Next
//                   </button>
//                 </div>
//               )} */}
