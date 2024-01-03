import React, { use, useEffect, useState } from "react";
import styles from "@/styles/components/RechargeTabContent/RechargeTabContent.module.css";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const DTHRecharge = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { mobile: initialMobile } = router.query;
  const [mobileNumber, setMobileNumber] = useState(initialMobile || "");
  // const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [showSelects, setShowSelects] = useState(false); // To control visibility of select elements
  const [simName, setSimName] = useState("");

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    // const newAddUrl = `${window.location.pathname}?mobile=${value}`
    // window.history.pushState({}, "", newAddUrl);
    router.push(
      {
        pathname: router.pathname,
        query: { mobile: value },
      },
      undefined,
      { scroll: false }
    );

    setMobileNumber(value);
  };
  const handleSimCard = (e) => {
    const value = e.target.value;
    router.push(
      {
        pathname: router.pathname,
        query: { mobile: mobileNumber, operator: value },
      },
      undefined,
      { scroll: false }
    );
    setSimName(value);
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
    const { mobile, operator } = router.query;
    if (mobile) {
      setMobileNumber(mobile);
    }
    if (operator) {
      setSimName(operator);
    }
  }, [router.query]);
  return (
    <div className={styles.Mobile_sec}>
      <h6>{router.asPath === "/" ? "Quick Recharge" : "DTH Recharge"}</h6>
      <form className={styles.sec_plx}>
        <div style={{ width: "40%" }}>
          <p>
            {router.asPath === "/"
              ? "No more waiting for mobile recharges"
              : "Instant mobile bill payments"}
          </p>
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
              <option selected>-- Open this select menu --</option>
              <option value="BSNL">BSNL</option>
              <option value="JIO">JIO</option>
              <option value="Airtel">Airtel</option>
              <option value="MTNL">MTNL</option>
              <option value="Vi">Vi</option>
            </select>
          </div>
          <div className="sim_name">
            <select
              className="form-select"
              aria-label="Default select example"
              id="select2"
            >
              <option selected>-- Open this select menu --</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className={styles.operator_content}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DTHRecharge;

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
