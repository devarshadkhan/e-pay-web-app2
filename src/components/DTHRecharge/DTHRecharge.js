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
const DTHRecharge = ({pathname,RechnageName}) => {
  console.log("++++++++++++++++++______________---",RechnageName);
  const router = useRouter();
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
                      className={pathname ? ` ${styles.tab_name} `:` ${styles.activeTab} `}
                      
                    >
                      Mobile Prepaid
                    </div>
                    <div
                      onClick={() => router.push("/recharge/postpaid-recharge")}
                      className={`${styles.tab_name}`}
                      
                    >
                      Postpaid Bill
                    </div>
                    <div
                      className={`${styles.tab_name}`}
                      onClick={() => router.push("/recharge/dth-d2h-recharge-online")}
                    >
                      DTH recharge
                    </div>
                  </div>
                  <div>
                    <div className={styles.Mobile_sec}>
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
                    </div>
                  </div>
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

export default DTHRecharge;
