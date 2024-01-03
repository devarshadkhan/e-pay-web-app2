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
        <img src="/images/img2.jpg" alt="" />

        
    </>
  )
}

export default index