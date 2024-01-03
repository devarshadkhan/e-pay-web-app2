import BillPaymentTab from '@/components/BillPaymentTab/BillPaymentTab'
import FeatureListing from '@/components/FeatureListing/FeatureListing'
import FlightBookingTab from '@/components/FlightBookingTab/FlightBookingTab'
import Header from '@/components/Header/Header'
import MainBanner from '@/components/MainBanner/MainBanner'
import RechargeTab from '@/components/RechargeTab/RechargeTab'

import { useRouter } from 'next/router'
import React from 'react'
// import BGImg from ""
const index = () => {
  
  return (
    <>
        <MainBanner bgImg={"https://www.pinelabs.com/img/blog/online-payments_mode-banner.jpg"} />
        <FeatureListing />
       <FlightBookingTab />
        <img src="/images/img2.jpg" alt="" />

        
    </>
  )
}

export default index