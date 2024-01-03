import React from 'react'
import styles from "@/styles/Pages/gift-cards-and-gift-vouchers/gift-cards-and-gift-vouchers.module.css";
import { category_name_by_filter, gift_card_voucher } from '@/utils/mockData/MockData';
import { useDispatch, useSelector } from 'react-redux';
import { filterSlice, filter_Product, setProducts } from '@/features/slices/FilterSlice';
import {  setSearchProduct } from '@/features/slices/SearchProductbyfilter';

const FilterComponent = ({toggleCategory}) => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.searchItems.filterProduct);
  console.log("FFFFFFFFFFFFFFFFLL",filter);


  
  return (
    <>
          <>
      <div className={styles.filter_comp}>
        <div className={styles.category}>
          <h3>category</h3>
          <input type="text" name="" id="" value={filter} onChange={(e) => dispatch(setSearchProduct(e.target.value))} />
        </div>
        <div className={styles.filter_catgory_name}>
          {category_name_by_filter?.map((item) => {
            {/* console.log(item) */}
            return (
              <>
              {/* {item?.name} */}
                <div class="form-check" >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={item}
                    id={item}
                    // checked={selectedCategories?.includes(item)}
                    onChange={()=> toggleCategory(item)}
                   
                  />
                  <label class="form-check-label" for={item}>
                  {item}
                  </label>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
    </>
  )
}

export default FilterComponent












// // import React from "react";
// // import styles from "@/styles/Pages/gift-cards-and-gift-vouchers/gift-cards-and-gift-vouchers.module.css";
// // import { voucher_category } from "@/utils/mockData/MockData";
// // import { useRouter } from "next/router";

// // const expFilter = [
// //     "smartphones",
// //     "laptops",
// //     "fragrances",
// //     "skincare",
// //     "groceries",
// //     "home-decoration",
// //     "furniture",
// //     "tops",
// //     "womens-dresses",
// //     "womens-shoes",
// //     "mens-shirts",
// //     "mens-shoes",
// //     "mens-watches",
// //     "womens-watches",
// //     "womens-bags",
// //     "womens-jewellery",
// //     "sunglasses",
// //     "automotive",
// //     "motorcycle",
// //     "lighting"
// //     ]
// // const FilterComponent = ({handleCategoryChange,selectedCategories}) => {
// //     const router = useRouter()
// //     const updateQueryParams = (categories) => {
// //         router.push({
// //           pathname: router.pathname, // Keep the current path
// //           query: { categories }, // Update the 'categories' query parameter
// //         });
// //       };
    
// //       const handleCategoryChange1 = (category) => {
// //         const updatedCategories = selectedCategories.includes(category)
// //           ? selectedCategories.filter((item) => item !== category)
// //           : [...selectedCategories, category];
    
// //         updateQueryParams(updatedCategories);
// //       };
// //   return (
    // <>
    //   <div className={styles.filter_comp}>
    //     <div className={styles.category}>
    //       <h3>category</h3>
    //     </div>
    //     <div className={styles.filter_catgory_name}>
    //       {expFilter?.map((item) => {
    //         console.log(item.name)
    //         return (
    //           <>
    //           {/* {item?.name} */}
    //             <div class="form-check" >
    //               <input
    //                 class="form-check-input"
    //                 type="checkbox"
    //                 value=""
    //                 id={item}
    //                 checked={selectedCategories.includes(item)}
    //                 onChange={()=> handleCategoryChange(item)}
    //                 // onChange={()=> handleCategoryChange(item)}
    //               />
    //               <label class="form-check-label" for={item}>
    //               {item}
    //               </label>
    //             </div>
    //           </>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </>
// //   );
// // };

// // export default FilterComponent;

// import React from "react";
// import styles from "@/styles/Pages/gift-cards-and-gift-vouchers/gift-cards-and-gift-vouchers.module.css";
// import { useRouter } from "next/router";
// import { category_name_by_filter } from "@/utils/mockData/MockData";



// const FilterComponent = ({  selectedCategories, setSelectedCategories }) => {
//   const router = useRouter();
//   const handleCategoryChange = (category) => {
//     let updatedCategories;

//     if (selectedCategories.includes(category)) {
//       updatedCategories = selectedCategories.filter((item) => item !== category);
//     } else {
//       updatedCategories = [...selectedCategories, category];
//     }

//     setSelectedCategories(updatedCategories);

//     router.push(
//       {
//         pathname: router.pathname,
//         query: { categories: updatedCategories, },
//       },
//       undefined,
//       { scroll: false }
//     );
//   };
//   return (
//     <>
    
//       <div className={styles.filter_comp}>
//         <div className={styles.category}>
//           <h3>Category</h3>
//         </div>
//         <div className={styles.filter_catgory_name}>
//           {category_name_by_filter?.map((item)=>{
//             return (
//                 <>
//                 <div className="form-check" key={item} >
//                 {/* <div className="form-check" key={item} onClick={()=>updateQueryParams(item)}> */}
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 value=""
//                 id={item}
//                 checked={selectedCategories.includes(item)}
//                 onChange={() => handleCategoryChange(item)}
//                 // onChange={() => {handleCategoryChange(item); updateQueryParams(item);}}
//               />
//               <label className="form-check-label" htmlFor={item}>
//                 {item}
//               </label>
//             </div>
//                 </>
//             )
//           })}
//           {/* {expFilter.map(())} */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FilterComponent;
