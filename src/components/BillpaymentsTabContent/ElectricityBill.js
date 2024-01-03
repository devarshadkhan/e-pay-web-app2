
import React, { useEffect, useState } from "react";
import styles from "@/styles/components/BillPaymentTabContent/BillPaymentTabContent.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ElectricityBill = () => {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectState, setSelectState] = useState("");
  const [selectBoard, setSelectBoard] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleState = (event) => {
    const value = event.target.value;
    router.query["state"] = value;
    delete router.query["board"];
    delete router.query["amount"];
    delete router.query["account_number"];
    router.push(router, undefined, { scroll: false });
    setSelectState(value);
    setSelectBoard("");
  };

  const handleStateBoard = (event) => {
    const value = event.target.value;
    router.query["board"] = value;
    delete router.query["amount"];
    delete router.query["account_number"];
    router.push(router, undefined, { scroll: false });
    setSelectBoard(value);
    setAccountNumber("");
    setAmount("");
  };

  const handleAmount = (event) => {
    const value = event.target.value;
    router.query["amount"] = value;
    router.push(router, undefined, { scroll: false });
    setAmount(value);
  };
  const handleAccount = (event) => {
    const value = event.target.value;
    router.query["account_number"] = value;
    router.push(router, undefined, { scroll: false });
    setAccountNumber(value);
  };

  useEffect(() => {
    const { state, board, account_number, amount } = router.query;
    if (state) {
      setSelectState(state);
    }
    if (board) {
      setSelectBoard(board);
    }
    if (account_number) {
      setAccountNumber(account_number);
    }
    if (amount) {
      setAmount(amount);
    }
  }, [router.query]);

  const handleSubmit_form = () => {
    if (!selectState || !selectBoard) {
      toast.error("Please select all fields");
    } else {
      // alert("submitted")
      toast.success("Submitted");
      console.log(
        "hasdefvewyhvfwevfdebshabhjasbfdvywevfweyhfvwe",
        selectBoard,
        selectState,
        amount,
        accountNumber
      );
    }
  };

  return (
    <div className={styles.Mobile_sec}>
      <h6>Pay Your Electricity Bill</h6>
      <form className={styles.sec_plx}>
        <p>Clear electricity bill instantly</p>
        <div className={styles.bag1}>
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectState}
            onChange={handleState}
          >
            <option value="">-- Select Circle --</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
          <button
            disabled={!selectBoard || !selectState || !amount || !accountNumber}
            type="button"
            // className={ styles.button}
            onClick={handleSubmit_form}
            className={
              !selectBoard || !selectState || !amount || !accountNumber
                ? styles.disabled
                : styles.button
            }
          >
            Proceed to Pay
          </button>
        </div>

        {selectState && (
          <div className={styles.pay_sec}>
            <div className="sim_name w-25">
              <select
                className="form-select"
                aria-label="Default select example"
                id="select1"
                value={selectBoard}
                onChange={handleStateBoard}
              >
                <option value="">-- Select Board --</option>
                <option value="electricity-department-chandigarh-one">
                  Electricity Board One
                </option>
                <option value="electricity-department-chandigarh-two">
                  Electricity Board Two
                </option>
                <option value="electricity-department-chandigarh-three">
                  Electricity Board Three
                </option>
              </select>
            </div>

            {selectBoard && (
              <>
                <div className="sim_name w-25">
                  <input
                    type="text"
                    placeholder="Enter your account number"
                    id="accountNumberInput"
                    value={accountNumber}
                    onChange={handleAccount}
                    // {...register("exampleRequired", { required: true })}
                  />
                  {/* {errors.exampleRequired && <span className="err">This field is required</span>} */}
                </div>
                <div className="sim_name w-25">
                  <input
                    type="text"
                    placeholder="Enter your amount"
                    id="amountInput"
                    value={amount}
                    onChange={handleAmount}
                    // {...register("exampleRequired1", { required: true })}
                  />
                  {/* {errors.exampleRequired1 && <span className="err">This field is required</span>} */}
                </div>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ElectricityBill;


// import React, { useEffect, useState } from "react";
// import styles from "@/styles/components/RechargeTabContent/RechargeTabContent.module.css";
// import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";
// const ElectricityBill = () => {
//   const router = useRouter();
//   const [isButtonDisabled, setButtonDisabled] = useState(true);
//   const [selectState, setSelectState] = useState();
// const [selectBoard, setSelectBoard] = useState()

//   const handleState = (event) => {
//     const value = event.target.value;
//     router.query["state"]=value
//     router.push(
//       router,
//       undefined,
//       { scroll: false }
//     );
//     setSelectState(true);

//   };
//   const handleStateBoard = (event) => {
//     const value = event.target.value;
//     router.query["board"]=value
//     router.push(
//      router,
//       undefined,
//       { scroll: false }
//     );
//     setSelectBoard(true);
//   };

//   const handleSubmit_form = ()=>{
//     if(!selectState || !selectBoard){
//       alert("Please select all fields")
//       }else{
//         alert("submitted")
//         }
//   }

//   useEffect(() => {
//     const { state,board } = router.query;
//     if (state) {
//       setSelectState(state);

//     }
//     if (board) {
//       setSelectBoard(board);
//     }
//   }, [router.query]);

//   return (
//     <div className={styles.Mobile_sec}>
//       <h6>Pay Your Electricity Bill</h6>
//       <form className={styles.sec_plx} onSubmit={handleSubmit_form}>
//         <div style={{ width: "40%" }}>
//           <p>Clear electricity bill instantly</p>
//           <select
//             class="form-select"
//             aria-label="Default select example"
//             value={selectState}
//             onChange={handleState}
//           >
//             <option selected defaultValue hidden >
//               -- Select Circle --
//             </option>
//             <option value="delhi">delhi</option>
//             <option value="mumbai">mumbai</option>
//             <option value="banglore">banglore</option>
//           </select>
//         </div>

//         <div>
//           <button
//             disabled={!selectBoard || !selectBoard}
//             type="button"
//             className={!selectBoard || !selectBoard ? styles.disabled : styles.button}
//           >
//             Proceed to Pay
//           </button>
//         </div>
//       </form>

//       {selectState && ( // Conditional rendering of select elements
//         <div className={styles.pay_sec}>
//           <div className="sim_name w-25">
//             <select
//               className="form-select"
//               aria-label="Default select example"
//               id="select1"
//               value={selectBoard}
//               onChange={handleStateBoard}

//             >
//               <option selected>-- Select Board --</option>
//               <option value="electricity-department-chandigarh-one">Electricity Board One</option>
//               <option value="electricity-department-chandigarh-two">Electricity Board Two</option>
//               <option value="electricity-department-chandigarh-three">Electricity Board Three</option>
//             </select>
//           </div>

//          {selectBoard && (
//           <>
//           <div className="sim_name w-25">
//             <input
//               type="text"
//               placeholder="Enter your account number"
//               id="amountInput"
//             />
//           </div>
//           <div className="sim_name w-25">
//             <input
//               type="text"
//               placeholder="Enter your amount"
//               id="amountInput"
//             />
//           </div>
//           </>
//          )}
//         </div>
//       )}

//       {/* {selectState && ( // Conditional rendering of select elements
//         <div className={styles.pay_sec}>
//           <div className="sim_name">
//             <select
//               className="form-select"
//               aria-label="Default select example"
//               id="select1"
//               //   value={simName}
//               //   onChange={handleSimCard}
//               // onChange={(e) => {
//               //   const newURL = `${window.location.pathname}?bsnl=${e.target.value}`;
//               //   window.history.pushState({}, "", newURL);
//               //   setSimName(e.target.value);
//               // }}
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
//       )} */}
//     </div>
//   );
// };

// export default ElectricityBill;
