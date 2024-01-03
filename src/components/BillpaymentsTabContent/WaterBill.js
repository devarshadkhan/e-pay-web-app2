import React, { useEffect, useState } from "react";
import styles from "@/styles/components/BillPaymentTabContent/BillPaymentTabContent.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const WaterBill = () => {
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
      toast.success("Submitted");
      console.log("hasdefvewyhvfwevfdebshabhjasbfdvywevfweyhfvwe");
    }
  };

  return (
    <div className={styles.Mobile_sec}>
      <h6>Pay Your Water Bill</h6>
      <form className={styles.sec_plx}>
        <p>Clear watetr bill instantly</p>
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

export default WaterBill;


// import React, { useEffect, useState } from "react";
// import styles from "@/styles/components/RechargeTabContent/RechargeTabContent.module.css";
// import { useRouter } from "next/router";

// const WaterBill = () => {
//   const router = useRouter();
//   console.log(
//     "-------------------------------++++++++++++++++++++++=====",
//     router.query
//   );
//   const [isButtonDisabled, setButtonDisabled] = useState(true);
//   const [waterBoard, setWaterBoard] = useState("");
//   const [accountNumber, setAccountNumber] = useState("")
//   const [amount,setAmount] = useState()
//   const handleWaterBoard = (event) => {
//     const value = event.target.value;
//     router.query["water_board"] = value;
//     router.push(router, undefined, { scroll: false });
//     setWaterBoard(value);
//     // setButtonDisabled(value === "");
//   };

//   const handleAmountInput = (e)=>{
//    setAmount( e.target.value)
//   }

//   const handleAccountInput = (e)=>{
//     setAccountNumber(e.target.value)
//   }

//   useEffect(() => {
//     const { water_board } = router.query;
//     if (water_board) {
//       setWaterBoard(water_board);
//       setButtonDisabled(false)
//     }
//   }, [router.query]);

  


//   return (
//     <div className={styles.Mobile_sec}>
//       <h6>Pay Your Water Bill</h6>
//       <form className={styles.sec_plx}>
//         <div style={{ width: "40%" }}>
//           <p>Clear water bill payments instantly</p>
//           <select
//             className="form-select"
//             aria-label="Default select example"
//             value={waterBoard}
//             onChange={handleWaterBoard}
//           >
//             <option value="">-- select water board --</option>
//             <option value="delhi-water">Delhi water</option>
//             <option value="mumbai-water">Mumbai water</option>
//             <option value="bangalore-water">Bangalore water</option>
//           </select>
//         </div>

//         <div>
//           <button
//             disabled={isButtonDisabled}
//             type="button"
//             className={isButtonDisabled   ? styles.disabled : styles.button}
//           >
//             Proceed to Pay
//           </button>
//         </div>
//       </form>
//       {waterBoard && (
//         <>
//           <div className={styles.pay_sec}>
//             <div className="sim_name w-25">
//               <input
//                 type="text"
//                 placeholder="Enter your account number"
//                 id="accountNumberInput"
//                 value={accountNumber}
//                 onChange={handleAccountInput}
//               />
//             </div>
//             <div className="sim_name w-25">
//               <input
//                 type="text"
//                 placeholder="Enter your amount"
//                 id="amountInput"
//                 value={amount}
//                 onChange={handleAmountInput}
//               />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default WaterBill;

