import React, { useEffect } from "react";
import styles from "@/styles/components/BillPaymentTab/BillPaymentTab.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRouter } from "next/router";
import MobilePrepaid from "../RechargeTabsContent/MobilePrepaid";
import PostpaidRecharge from "../RechargeTabsContent/PostpaidRecharge";
import DTHRecharge from "../RechargeTabsContent/DTHRecharge";
import ElectricityBill from "../BillpaymentsTabContent/ElectricityBill";
import WaterBill from "../BillpaymentsTabContent/WaterBill";
import GasBill from "../BillpaymentsTabContent/GasBill";
import axios from "axios";
import LandlineBill from "../BillpaymentsTabContent/LandlineBill";
import BoardbandBill from "../BillpaymentsTabContent/BoardbandBill";
const BillPaymentTab = ({ pathname, RechnageName }) => {
  console.log("++++++++++++++++++______________---", pathname);
  const router = useRouter();
  console.log("zexrchtgvjykjn", router);
  const path = router.pathname;
  const getTabContent = () => {
    console.log("Path: ", router);
    // if(path?.includes("mobile-prepaid-recharge")){
    //   return <MobilePrepaid />
    // } else if(path?.includes("postpaid-recharge")){
    //   return <PostpaidRecharge />
    // } else if(path?.includes("dth-d2h-recharge-online")) {
    //   return <DTHRecharge />
    // }

    const selectedPath = path.split("/")[path.split("/").length - 1];
    console.log("Selected psth: ", selectedPath);
    switch (selectedPath) {
      case "electricity-bill-payment": {
        return <ElectricityBill />;
      }
      case "water-bill-online-payment": {
        return <WaterBill />;
      }
      case "gas-bill-payment-online": {
        return <GasBill />;
      }
      case "landline-bill-payment": {
        return <LandlineBill />;
      }
      case "broadband-bill-payment": {
        return <BoardbandBill />;
      }
      default:
        return <ElectricityBill />;
    }
  };


//   const api = async ()=>{
//    await axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{console.log(res.data)})
//   }


// useEffect(() => {
//   api()
// }, []);
  return (
    <>
      <div className={styles.recharge_Wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.rhrge_wrp}>
                <div>
                  <div className={styles.listing_Tabs}>
                    <div
                      onClick={() =>
                        router.push("/bill-payments/electricity-bill-payment")
                      }
                      className={
                        path === "/" // Check if the path is the homepage
                          ? ` ${styles.activeTab} ` // Apply the class for the homepage
                          : path?.includes("electricity-bill-payment") // Check if the path includes "mobile-prepaid-recharge"
                          ? ` ${styles.activeTab} ` // Apply the class for "mobile-prepaid-recharge"
                          : ` ${styles.tab_name} ` // Default class if none of the conditions match
                      }
                    >
                      Electricity
                    </div>
                    <div
                      onClick={() => router.push("/bill-payments/water-bill-online-payment")}
                      className={
                        path?.includes("water-bill-online-payment")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      Water
                    </div>
                    <div
                      onClick={() =>
                        router.push("/bill-payments/gas-bill-payment-online")
                      }
                      className={
                        path?.includes("gas-bill-payment-online")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      Piped Gas
                    </div>
                    <div
                      onClick={() =>
                        router.push("/bill-payments/landline-bill-payment")
                      }
                      className={
                        path?.includes("landline-bill-payment")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      Landline Bill
                    </div>
                    <div
                      onClick={() =>
                        router.push("/bill-payments/broadband-bill-payment")
                      }
                      className={
                        path?.includes("broadband-bill-payment")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      Boardband
                    </div>
                  </div>
                  {getTabContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillPaymentTab;
