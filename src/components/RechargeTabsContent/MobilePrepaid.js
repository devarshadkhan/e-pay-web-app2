import React, { use, useEffect, useState } from "react";
import styles from "@/styles/components/RechargeTabContent/RechargeTabContent.module.css";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Slider from "react-slick";

const MobileRechargeForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [showSelects, setShowSelects] = useState(false); // To control visibility of select elements
  const [simName, setSimName] = useState("");
  const [country, setCountry] = useState("");
  const [rechargeType, setRechargeType] = useState("");
  const [content, setContent] = useState("");
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
  };

  const slider = React.useRef(null);

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    // const newAddUrl = `${window.location.pathname}?mobile=${value}`
    // window.history.pushState({}, "", newAddUrl);
    // router.replace(
    //   {
    //     pathname: router.pathname,
    //     query: { ...router.query, mobile: value },
    //   },
    //   undefined,
    //   { scroll: false }
    // );

    router.query["mobile"] = value;

    router.replace(router, undefined, { scroll: false });

    setMobileNumber(value);
  };
  const handleSimCard = (e) => {
    const value = e.target.value;
    router.query["operator"] = value;

    router.replace(router, undefined, { scroll: false });
    // router.replace(
    //   {
    //     pathname: router.asPath,
    //     query: { ...router.query, operator: value },
    //   },
    //   undefined,
    //   { scroll: false }
    // );
    setSimName(value);
  };
  const handleSelectCountry = (e) => {
    const value = e.target.value;
    router.query["country"] = value;

    router.replace(router, undefined, { scroll: false });
    // router.replace(
    //   {
    //     pathname: router.asPath,
    //     query: {...router.query,  country: value },
    //   },
    //   undefined,
    //   { scroll: false }
    // );
    setCountry(value);
  };

  useEffect(() => {
    if (/^\d{10}$/.test(mobileNumber)) {
      setError("");
      setButtonDisabled(false);
      setShowSelects(true); // Show the select elements when a valid number is entered
    } else {
      setError("Please enter a 10-digit mobile number.");
      setButtonDisabled(true);
      setShowSelects(false); // Hide the select elements when the number is not valid
    }
  }, [mobileNumber]);
  useEffect(() => {
    const { mobile, operator, country } = router.query;
    if (mobile) {
      setMobileNumber(mobile);
    }
    if (operator) {
      setSimName(operator);
    }
    if (country) {
      setCountry(country);
    }
  }, [router.query]);
  useEffect(() => {
    if (router.asPath === "/") {
      setRechargeType("Quick Recharge");
    } else {
      setRechargeType("Prepaid Recharge");
    }
    setContent(
      router.pathname === "/"
        ? "No more waiting for mobile recharges"
        : "Instant mobile bill payments"
    );
  }, [router.pathname])
  return (
    <div className={styles.Mobile_sec}>
    <h6>{rechargeType}</h6>
      {/* <h6>{router.asPath === "/" ? "Quick Recharge" : "Prepaid Recharge"}</h6> */}
      <form className={styles.sec_plx}>
        <div style={{ width: "40%" }}>
        <p>{content}</p>
          {/* <p>
            {router.asPath === "/"
              ? "No more waiting for mobile recharges"
              : "Instant mobile bill payments"}
          </p> */}
          <input
            type="text"
            maxLength={10}
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          <span style={{ color: "red", fontSize: "12px", display: "block" }}>
            {error}
          </span>
        </div>
        <div></div>
        <div>
          <button
            disabled={isButtonDisabled}
            type="button"
            className={isButtonDisabled ? styles.disabled : styles.button}
          >
            Proceed to Pay
          </button>
        </div>
      </form>

      {showSelects && ( // Conditional rendering of select elements
        <div className={styles.pay_sec}>
          <div className="sim_name">
            <select
              className="form-select"
              aria-label="Default select example"
              id="select1"
              value={simName}
              onChange={handleSimCard}
              // onChange={(e) => {
              //   const newURL = `${window.location.pathname}?bsnl=${e.target.value}`;
              //   window.history.pushState({}, "", newURL);
              //   setSimName(e.target.value);
              // }}
            >
              <option selected defaultValue hidden>
                -- Open this select menu --
              </option>
              <option value="bsnl">BSNL</option>
              <option value="jio">JIO</option>
              <option value="airtel">Airtel</option>
              <option value="mtnl">MTNL</option>
              <option value="vi">Vi</option>
            </select>
          </div>
          <div className="sim_name">
            <select
              className="form-select"
              aria-label="Default select example"
              id="select2"
              onChange={handleSelectCountry}
              value={country}
            >
              <option selected defaultValue hidden>
                -- Open this select menu --
              </option>
              <option value="delhi">Delhi</option>
              <option value="india">India</option>
              <option value="dubai">Dubai</option>
            </select>
          </div>
          <div className="sim_name">
            <input
              type="text"
              placeholder="Enter your amount"
              id="amountInput"
            />
          </div>
        </div>
      )}

      {router.asPath === "/" ? (
        ""
      ) : (
        <>
          <div className={styles.mobile_recharge_operator}>
            {/* <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className={styles.operator_content}> */}
            <Slider {...settings} ref={slider}>
              <div>
                <img
                  src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
                  alt=""
                />
                <p>Airtel Recharge</p>
              </div>
              <div>
                <img
                  src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
                  alt=""
                />
                <p>Airtel Recharge</p>
              </div>
              <div>
                <img
                  src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
                  alt=""
                />
                <p>Airtel Recharge</p>
              </div>
              <div>
                <img
                  src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
                  alt=""
                />
                <p>Airtel Recharge</p>
              </div>
              <div>
                <img
                  src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
                  alt=""
                />
                <p>Airtel Recharge</p>
              </div>
              <div>
                <img
                  src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
                  alt=""
                />
                <p>Airtel Recharge</p>
              </div>
              <div>
                <img
                  src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
                  alt=""
                />
                <p>Airtel Recharge</p>
              </div>
            </Slider>
            {/* <div>
       <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
<button onClick={() => slider?.current?.slickNext()}>Next</button>
       </div> */}
          </div>
          {/* </div>
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default MobileRechargeForm;

// import React, { useState, useEffect } from "react";
// import styles from "@/styles/components/RechargeTabContent/RechargeTabContent.module.css";
// import { useRouter } from "next/router";
// import { useSearchParams } from 'next/navigation';

// const MobileRechargeForm = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const initialMobile = searchParams.get("mobile") || '';
//   const [mobileNumber, setMobileNumber] = useState(initialMobile);
//   const [error, setError] = useState("");
//   const [isButtonDisabled, setButtonDisabled] = useState(true);
//   const [showSelects, setShowSelects] = useState(false);
//   const [simName, setSimName] = useState("");

//   const handleMobileNumberChange = (event) => {
//     const value = event.target.value;
//     const newSearchParams = new URLSearchParams();
//     newSearchParams.set("mobile", value);
//     // router.push({ search: newSearchParams.toString() });
//   };

//   useEffect(() => {
//     if (/^\d{10}$/.test(mobileNumber)) {
//       setError("");
//       setButtonDisabled(false);
//       setShowSelects(true);
//     } else {
//       setError("Please enter a 10-digit mobile number.");
//       setButtonDisabled(true);
//       setShowSelects(false);
//     }
//   }, [mobileNumber]);

//   useEffect(() => {
//     const mobile = searchParams.get("mobile");
//     if (mobile !== null) {
//       setMobileNumber(mobile);
//     }
//   }, [searchParams]);

//   return (
//     <div className={styles.Mobile_sec}>
//       <h6>{router.asPath === "/" ? "Quick Recharge" : "Prepaid Recharge"}</h6>
//       <form className={styles.sec_plx}>
//         <div style={{ width: "40%" }}>
//           <p>
//             {router.asPath === "/"
//               ? "No more waiting for mobile recharges"
//               : "Instant mobile bill payments"}
//           </p>
//           <input
//             type="text"
//             maxLength={10}
//             placeholder="Enter your mobile number"
//             value={mobileNumber}
//             onChange={handleMobileNumberChange}
//           />
//           <span style={{ color: "red", fontSize: "12px", display: "block" }}>
//             {error}
//           </span>
//         </div>
//         <div></div>
//         <div>
//           <button
//             disabled={isButtonDisabled}
//             type="button"
//             className={isButtonDisabled ? styles.disabled : ""}
//           >
//             Proceed to Pay
//           </button>
//         </div>
//       </form>

//       {showSelects && (
//         <div className={styles.pay_sec}>
//           <div className="sim_name">
//             <select
//               className="form-select"
//               aria-label="Default select example"
//               id="select1"
//               value={simName}
//             >
//               <option selected>-- Open this select menu --</option>
//               <option value="BSNL">BSNL</option>
//               <option value="JIO">JIO</option>
//               <option value="Airtel">Airtel</option>
//               <option value="MTNL">MTNL</option>
//               <option value="Vi">Vi</option>
//             </select>
//           </div>
//           <div className="sim_name">
//             <select
//               className="form-select"
//               aria-label="Default select example"
//               id="select2"
//             >
//               <option selected>-- Open this select menu --</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//           </div>
//           <div className="sim_name">
//             <input
//               type="text"
//               placeholder="Enter your amount"
//               id="amountInput"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileRechargeForm;

// start neew

// import React from "react";
// import styles from "@/styles/components/RechargeTabContent/RechargeTabContent.module.css";
// import { useRouter } from "next/router";
// const MobilePrepaid = () => {
//   const router = useRouter();
//   console.log(router.asPath);
//   return (
//     <>
//       <div className={styles.Mobile_sec}>
//         <h6>{router.asPath === "/" ? "Quick Recharge":"Prepaid Recharge"}</h6>
//         <div className={styles.sec_plx}>
//           <div>
//             <p>No more waiting for the mobile recharges</p>
//             <input type="text" placeholder="Enter your mobile number" />
//           </div>
//           <div></div>
//           <div>
//             <button>Proceed to Pay</button>
//           </div>
//         </div>

//         <div className={styles.pay_sec}>
//           <div className="sim_name">
//             <select class="form-select" aria-label="Default select example">
//               <option selected>Open this select menu</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//           </div>
//           <div className="sim_name">
//             <select class="form-select" aria-label="Default select example">
//               <option selected>Open this select menu</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//           </div>
//           <div className="sim_name">
//             <input type="text" placeholder="Enter your amount" />
//           </div>
//         </div>
//       </div>
// {router.asPath === "/" ? (
//   ""
// ) : (
//   <>
//     <div className={styles.mobile_recharge_operator}>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className={styles.operator_content}>
//               <div>
//                 <img
//                   src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
//                   alt=""
//                 />
//                 <p>Airtel Recharge</p>
//               </div>
//               <div>
//                 <img
//                   src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
//                   alt=""
//                 />
//                 <p>Airtel Recharge</p>
//               </div>
//               <div>
//                 <img
//                   src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
//                   alt=""
//                 />
//                 <p>Airtel Recharge</p>
//               </div>
//               <div>
//                 <img
//                   src="https://cdn.payrup.com/images/operators/prepaid-recharge/airtel_logo.png"
//                   alt=""
//                 />
//                 <p>Airtel Recharge</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// )}
//     </>
//   );
// };

// export default MobilePrepaid;
