import React from "react";
import styles from "@/styles/components/FeaturedListing/FeaturedListing.module.css";
import { useRouter } from "next/router";
import classNames from "classnames";
import { listing_feature } from "@/utils/mockData/MockData";


const FeatureListing = ({ item }) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.feature_listing}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2>Featured Listings</h2>
            </div>
            {listing_feature.map((item) => {
              return (
                <>
                  <div className={classNames("col-3 mb-1", styles.col_3)}>
                    {/* <FeatureListing item={item} /> */}
                    <div
                      className={styles.FeatureListing}
                      onClick={() => router.push(item.href)}
                    >
                      <div>
                        <div className="text-center">
                          <img src={item.img} alt="" />
                        </div>
                        <div>
                          <h5>{item.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureListing;