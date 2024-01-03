import DTHRecharge from '@/components/DTHRecharge/DTHRecharge'
import FeatureListing from '@/components/FeatureListing/FeatureListing'
import Header from '@/components/Header/Header'
import MainBanner from '@/components/MainBanner/MainBanner'
import RechargeTab from '@/components/RechargeTab/RechargeTab'
import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
  const router = useRouter()
  const pathname = router.pathname.asp
  return (
    <>
        <MainBanner bgImg={"/images/paymnet-banner-recharge.jpg"} />
        <FeatureListing />
        {
            pathname === "/recharge/dth-d2h-recharge-online" ? <><DTHRecharge /></>:<><RechargeTab pathname={pathname} RechnageName="DTH Recharge" /></>
        }
        
    </>
  )
}

export default index