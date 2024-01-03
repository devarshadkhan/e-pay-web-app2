import React, { useEffect, useState } from "react";
import styles from "@/styles/components/RechargeTabContent/RechargeTabContent.module.css";
import { useRouter } from "next/router";

const GasBill = () => {
  const router = useRouter();
  console.log(
    "-------------------------------++++++++++++++++++++++=====",
    router.query
  );
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [waterBoard, setWaterBoard] = useState("");
  const [accountNumber, setAccountNumber] = useState("")
  const [amount,setAmount] = useState()
  const handleWaterBoard = (event) => {
    const value = event.target.value;
    router.query["water_board"] = value;
    router.push(router, undefined, { scroll: false });
    setWaterBoard(value);
    // setButtonDisabled(value === "");
  };

  const handleAmountInput = (e)=>{
   setAmount( e.target.value)
  }

  const handleAccountInput = (e)=>{
    setAccountNumber(e.target.value)
  }

  useEffect(() => {
    const { water_board } = router.query;
    if (water_board) {
      setWaterBoard(water_board);
      setButtonDisabled(false)
    }
  }, [router.query]);

  


  return (
    <div className={styles.Mobile_sec}>
      <h6>Pay Your Water Bill</h6>
      <form className={styles.sec_plx}>
        <div style={{ width: "40%" }}>
          <p>Clear water bill payments instantly</p>
          <select
            className="form-select"
            aria-label="Default select example"
            value={waterBoard}
            onChange={handleWaterBoard}
          >
            <option value="">-- select water board --</option>
            <option value="delhi-water">Delhi water</option>
            <option value="mumbai-water">Mumbai water</option>
            <option value="bangalore-water">Bangalore water</option>
          </select>
        </div>

        <div>
          <button
            disabled={isButtonDisabled}
            type="button"
            className={isButtonDisabled   ? styles.disabled : styles.button}
          >
            Proceed to Pay
          </button>
        </div>
      </form>
      {waterBoard && (
        <>
          <div className={styles.pay_sec}>
            <div className="sim_name w-25">
              <input
                type="text"
                placeholder="Enter your account number"
                id="accountNumberInput"
                value={accountNumber}
                onChange={handleAccountInput}
              />
            </div>
            <div className="sim_name w-25">
              <input
                type="text"
                placeholder="Enter your amount"
                id="amountInput"
                value={amount}
                onChange={handleAmountInput}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GasBill;
