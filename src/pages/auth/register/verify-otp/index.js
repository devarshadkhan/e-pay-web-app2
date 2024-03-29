import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "@/styles/auth/VerifyOTP.module.css";
import classNames from "classnames";
import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";
import OTPInput from "react-otp-input";
const Index = () => {
  const router = useRouter();
  const params = router.query;
  const _data = new URLSearchParams(params).toString();
  const [emailOTP, setEmailOTP] = useState("");
  const [phoneOTP, setPhoneOTP] = useState("");
  const [isEmailOTPVerified, setIsEmailOTPVerified] = useState(false);

  const [emailLoader, setEmailLoader] = useState(false);
  const [phoneLoader, setPhoneLoader] = useState(false);

  const handleEmailGetOTPClick = async () => {
    setEmailLoader(true);

    await Axiosintance.put(API.send_email_otp, {
      email: params.email,
    })
      .then((res) => {
        setEmailLoader(false);
        toast("Successfully sent the OTP to your registered Email Id", {
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
        setEmailLoader(false);
        toast("Failed to send the OTP to your registered Email Id", {
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

  const handleEmailOTPSubmit = async () => {
    try {
      const response = await Axiosintance.post(API.verify_email_otp, {
        email: params.email,
        emailOtp: Number(emailOTP),
      });
      toast(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Mark email OTP as verified
      setIsEmailOTPVerified(true);
    } catch (error) {
      toast(error?.message ? error.response?.data?.message : error?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handlePhoneGetOTPClick = async () => {
    setPhoneLoader(true);
    await Axiosintance.post(API.send_phone_otp, {
      phone: Number(params.phone),
    })
      .then((res) => {
        setPhoneLoader(false);
        toast("Attend the call OTP", {
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
        console.log(err);
        setPhoneLoader(false);
        toast(err?.message, {
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

  const handlePhoneOTPSubmit = async () => {
    try {
      const response = await Axiosintance.post(API.verify_phone_otp, {
        phone: params.phone,
        phoneOtp: Number(phoneOTP),
      });
      toast(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast(err?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const [otp, setOtp] = useState('');
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
                            Email address OTP
                          </label>
                          <div className="d-flex justify-content-between ">
                            {/* <input
                              type="email"
                              // class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              disabled
                              value={params.email || "jjh@gmail.com"}
                            /> */}

                            <OTPInput
        value={emailOTP}
      onChange={setEmailOTP}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />

                            {/* {emailLoader ? (
                              <>
                                <div
                                  class="spinner-grow text-secondary"
                                  role="status"
                                >
                                  <span class="visually-hidden"></span>
                                </div>
                              </>
                            ) : (
                              <>
                                {" "}
                                <button onClick={handleEmailGetOTPClick}>
                                  send OTP
                                </button>
                              </>
                            )} */}
                          </div>
                        </div>

                        {/* <input
                  type="text"
                  name="email"
                  id="emailInput"
                  disabled
                  value={params.email || "jjh@gmail.com"}
                /> */}
                      </div>
                      <div className={styles.customInpOpt}>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                         Enter    phone  OTP
                          </label>
                          <div className="d-flex justify-content-between ">
                            {/* <input
                              type="text"
                              name="phone"
                              id="phoneInput"
                              disabled
                              value={params.phone || "90909****"}
                            /> */}
                            <OTPInput
 value={phoneOTP}
      onChange={setPhoneOTP}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
                            {/* {phoneLoader ? (
                              <>
                                <div
                                  class="spinner-grow text-secondary"
                                  role="status"
                                >
                                  <span class="visually-hidden"></span>
                                </div>
                              </>
                            ) : (
                              <>
                                <button onClick={handlePhoneGetOTPClick}>
                                  send OTP
                                </button>
                              </>
                            )} */}
                          </div>
                        </div>

                        {/* <input
                    type="text"
                    name="phoneOTP"
                    placeholder="Enter Phone OTP"
                    value={phoneOTP}
                    onChange={(e) => setPhoneOTP(e.target.value)}
                  />
                  <button onClick={handlePhoneOTPSubmit}>
                    Submit Phone OTP
                  </button> */}
                      </div>
                      <div className="text-center">
                        <button
                          onClick={() =>
                            router.push(`/auth/register/password/?${_data}`)
                          }
                          className={styles.next_btn}
                        >
                          Next
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
//                   <div className={styles.customInpOpt}>
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
