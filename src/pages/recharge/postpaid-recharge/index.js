import FeatureListing from '@/components/FeatureListing/FeatureListing'
import Header from '@/components/Header/Header'
import MainBanner from '@/components/MainBanner/MainBanner'
import RechargeTab from '@/components/RechargeTab/RechargeTab'

import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
  
  return (
    <>
        <MainBanner bgImg={"/images/paymnet-banner-recharge.jpg"} />
        <FeatureListing />
        <RechargeTab />
    </>
  )
}

export default index