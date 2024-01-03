import React from "react";
import styles from "@/styles/components/RechargeSec/RechargeSec.module.css";
import { useRouter } from "next/router";
import TravelBooking from "../FlightBookingContent/TravelBooking";
import HotelBooking from "../FlightBookingContent/HotelBooking";
import BusBooking from "../FlightBookingContent/BusBooking";
const FlightBookingTab = ({ pathname }) => {
  const router = useRouter();
  console.log("zexrchtgvjykjn", router);
  const path = router.pathname;
  console.log("SRK_PATHAAN", path);
  const getTabContent = () => {
    const selectedPath = path.split("/")[path.split("/").length - 1];
    switch (selectedPath) {
      case "flight-booking": {
        return <TravelBooking />;
      }
      case "hotel-booking": {
        return <HotelBooking />;
      }
      case "bus-booking": {
        return <BusBooking />;
      }
      default:
        return <TravelBooking />;
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
                        router.push("/travel-booking/flight-booking")
                      }
                      className={
                        path === "/" ? ` ${styles.activeTab} `: path?.includes("flight-booking") ? ` ${styles.activeTab} ` : ` ${styles.tab_name} ` 
                      }
                    >
                      Flight Booking
                    </div>
                    <div
                      onClick={() =>
                        router.push("/travel-booking/hotel-booking")
                      }
                      className={
                        path?.includes("hotel-booking")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      Hotel Booking
                    </div>
                    <div
                      onClick={() => router.push("/travel-booking/bus-booking")}
                      className={
                        path?.includes("bus-booking")
                          ? ` ${styles.activeTab} `
                          : ` ${styles.tab_name} `
                      }
                    >
                      Bus Booking
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

export default FlightBookingTab;
