import BillPaymentTab from '@/components/BillPaymentTab/BillPaymentTab'
import FeatureListing from '@/components/FeatureListing/FeatureListing'
import Header from '@/components/Header/Header'
import MainBanner from '@/components/MainBanner/MainBanner'
import RechargeTab from '@/components/RechargeTab/RechargeTab'

import { useRouter } from 'next/router'
import React from 'react'
// import BGImg from ""
const index = () => {
  
  return (
    <>
        <MainBanner bgImg={"https://www.mobikwik.com/blog/wp-content/uploads/2019/04/1200x628_3.png"} />
        <FeatureListing />
        <BillPaymentTab/>

        <div className="r">
          <div className="container">
            <div className="row">
            <div className="col-12">
              Data is for backend like API
            </div>
              <div className="col-md-1">
                <img src="https://cdn.payrup.com/images/operators/water-bill-online-payment/bwssb_logo.png" style={{border:"1px solid #ccc",padding:"10px", borderRadius:"10px", width:"100px" }} alt="" />
              </div>
              <div className="col-md-1">
                <img src="https://cdn.payrup.com/images/operators/water-bill-online-payment/bwssb_logo.png" style={{border:"1px solid #ccc",padding:"10px", borderRadius:"10px", width:"100px" }} alt="" />
              </div>
              <div className="col-md-1">
                <img src="https://cdn.payrup.com/images/operators/water-bill-online-payment/bwssb_logo.png" style={{border:"1px solid #ccc",padding:"10px", borderRadius:"10px", width:"100px" }} alt="" />
              </div>
              <div className="col-md-1">
                <img src="https://cdn.payrup.com/images/operators/water-bill-online-payment/bwssb_logo.png" style={{border:"1px solid #ccc",padding:"10px", borderRadius:"10px", width:"100px" }} alt="" />
              </div>
              <div className="col-md-1">
                <img src="https://cdn.payrup.com/images/operators/water-bill-online-payment/bwssb_logo.png" style={{border:"1px solid #ccc",padding:"10px", borderRadius:"10px", width:"100px" }} alt="" />
              </div>
              <div className="col-md-1">
                <img src="https://cdn.payrup.com/images/operators/water-bill-online-payment/bwssb_logo.png" style={{border:"1px solid #ccc",padding:"10px", borderRadius:"10px", width:"100px" }} alt="" />
              </div>
              <div className="col-md-1">
                <img src="https://cdn.payrup.com/images/operators/water-bill-online-payment/bwssb_logo.png" style={{border:"1px solid #ccc",padding:"10px", borderRadius:"10px", width:"100px" }} alt="" />
              </div>
            </div>
          </div>
        </div>
        <img src="/images/img2.jpg" alt="" />

        
    </>
  )
}

export default index