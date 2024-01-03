// import React from "react";
// import styles from "@/styles/components/RechargeSec/RechargeSec.module.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { useRouter } from "next/router";
// const RechargeSec = () => {
//   const router = useRouter()
//   return (
//     <>
//     <div className={styles.recharge_Wrapper}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//             <div className={styles.rhrge_wrp}>
//         <Tabs>
//           <TabList className={styles.listing_Tabs}>
//             <Tab
//             onClick={()=> router.push("/recharge/mobile-prepaid-recharge")}
//               className={`${styles.tab_name} `}
//               selectedClassName={styles.activeTab}
//             >
//               Mobile Prepaid
//             </Tab>
//             <Tab
//               onClick={()=> router.push("/recharge/postpaid-recharge")}
//               className={`${styles.tab_name}`}
//               selectedClassName={styles.activeTab}
//             >
//               Postpaid Bill
//             </Tab>
//             <Tab
//               className={`${styles.tab_name}`}
//               selectedClassName={styles.activeTab}
//             >
//               DTH recharge
//             </Tab>
//           </TabList>
//           <TabPanel>
//             <div className={styles.Mobile_sec}>
//               <h6>Mobile Recharge</h6>
//               <div className={styles.sec_plx}>
//                 <div>
//                   <p>Quick Recharge No more waiting for the mobile recharges</p>
//                   <input type="text" placeholder="Enter your mobile number" />
//                 </div>
//                 <div>
//                   <button>Proceed to Pay</button>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>
//           <TabPanel>
//             <div className={styles.Mobile_sec}>
//               <h6>Prepaid Recharge</h6>
//               <div className={styles.sec_plx}>
//                 <div>
//                   <p>Quick Recharge No more waiting for the mobile recharges</p>
//                   <input type="text" placeholder="Enter your mobile number" />
//                 </div>
//                 <div>
//                   <button>Proceed to Pay</button>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>
//           <TabPanel>
//             <div className={styles.Mobile_sec}>
//               <h6>DTH Recharge</h6>
//               <div className={styles.sec_plx}>
//                 <div>
//                   <p>Quick Recharge No more waiting for the mobile recharges</p>
//                   <input type="text" placeholder="Enter your mobile number" />
//                 </div>
//                 <div>
//                   <button>Proceed to Pay</button>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>
//         </Tabs>
//       </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default RechargeSec;

import React from "react";
import styles from "@/styles/components/RechargeSec/RechargeSec.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRouter } from "next/router";
import MobilePrepaid from "../RechargeTabsContent/MobilePrepaid";
import PostpaidRecharge from "../RechargeTabsContent/PostpaidRecharge";
import DTHRecharge from "../RechargeTabsContent/DTHRecharge";
const RechargeTab = ({ pathname, RechnageName }) => {
  console.log("++++++++++++++++++______________---", pathname);
  const router = useRouter();
  console.log("zexrchtgvjykjn", router);
  const path = router.pathname;
  const getTabContent = () => {
    console.log("Path: ", path);
    // if(path?.includes("mobile-prepaid-recharge")){
    //   return <MobilePrepaid />
    // } else if(path?.includes("postpaid-recharge")){
    //   return <PostpaidRecharge />
    // } else if(path?.includes("dth-d2h-recharge-online")) {
    //   return <DTHRecharge />
    // }

    const selectedPath = path.split("/")[path.split("/").length - 1];
    switch (selectedPath) {
      case "mobile-prepaid-recharge": {
        return <MobilePrepaid />;
      }
      case "postpaid-recharge": {
        return <PostpaidRecharge />;
      }
      case "dth-d2h-recharge-online": {
        return <DTHRecharge />;
      }
      default:
        return <MobilePrepaid />;
    }
  };

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
                        router.push("/recharge/mobile-prepaid-recharge")
                      }
                      // className={
                      //   path?.includes("mobile-prepaid-recharge")
                      //     ? ` ${styles.activeTab} `
                      //     : ` ${styles.tab_name} `
                      // }
                      className={
                        path === "/" // Check if the path is the homepage
                          ? ` ${styles.activeTab} ` // Apply the class for the homepage
                          : path?.includes("mobile-prepaid-recharge") // Check if the path includes "mobile-prepaid-recharge"
                          ? ` ${styles.activeTab} ` // Apply the class for "mobile-prepaid-recharge"
                          : ` ${styles.tab_name} ` // Default class if none of the conditions match
                      }
                    >
                      Mobile Prepaid
                    </div>
                    <div
                      onClick={() => router.push("/recharge/postpaid-recharge")}
                      className={
                        path?.includes("postpaid-recharge")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      Postpaid Bill
                    </div>
                    <div
                      // className={`${styles.tab_name}`}
                      onClick={() =>
                        router.push("/recharge/dth-d2h-recharge-online")
                      }
                      className={
                        path?.includes("dth-d2h-recharge-online")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      DTH recharge
                    </div>
                  </div>
                 
                    {getTabContent()}
                    {/* <div className={styles.Mobile_sec}>
                      <h6>{RechnageName} Recharge</h6>
                      <div className={styles.sec_plx}>
                        <div>
                          <p>
                            Quick Recharge No more waiting for the mobile
                            recharges
                          </p>
                          <input
                            type="text"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                        <div>
                          <button>Proceed to Pay</button>
                        </div>
                      </div>
                    </div> */}
              
                  {/* <TabPanel>
            <div className={styles.Mobile_sec}>
              <h6>Prepaid Recharge</h6>
              <div className={styles.sec_plx}>
                <div>
                  <p>Quick Recharge No more waiting for the mobile recharges</p>
                  <input type="text" placeholder="Enter your mobile number" />
                </div>
                <div>
                  <button>Proceed to Pay</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.Mobile_sec}>
              <h6>DTH Recharge</h6>
              <div className={styles.sec_plx}>
                <div>
                  <p>Quick Recharge No more waiting for the mobile recharges</p>
                  <input type="text" placeholder="Enter your mobile number" />
                </div>
                <div>
                  <button>Proceed to Pay</button>
                </div>
              </div>
            </div>
          </TabPanel> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RechargeTab;
