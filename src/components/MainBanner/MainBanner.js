import React from 'react'
import styles from "@/styles/components/MainBanner/MainBanner.module.css"
const MainBanner = ({bgImg}) => {
  return (
    <>
         <div className={styles.main_wrapper}>
        <div className="container">
          <div className="row">
            {/* <div className="col-3"></div> */}
            <div className="col-12">
              <div className={styles.BG_img}>
                <img
                  src={bgImg}
                  alt=""
                />
              </div>

              <div className={styles.semPayment}>
                <h1>
                  Seamless payment <span>Effotless Transactions</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner