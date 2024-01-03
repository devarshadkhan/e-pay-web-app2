import DataBrandComponent from '@/components/GiftWrp/DataBrandComponent/DataBrandComponent'
import FilterComponent from '@/components/GiftWrp/FilterComponent/FilterComponent'
import { toggleFilter } from '@/features/slices/FilterSlice';
import { gift_card_voucher } from '@/utils/mockData/MockData';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.productFilter.filP);
  console.log("qqqqqqqqqqqqppppppppppppp",selectedCategories);
  
  const toggleCategory = (category) => {
    if (selectedCategories[category]) {
      // If the category is selected, unselect it
      const { [category]: omit, ...newCategories } = selectedCategories;
      dispatch(toggleFilter(newCategories));
    } else {
      // If the category is not selected, select it
      dispatch(toggleFilter({ ...selectedCategories, [category]: true }));
    }
    
  };
  // const toggleCategory = (category) => {
  //   dispatch(toggleFilter({category}))
  // };

  const filteredProducts = gift_card_voucher.filter((product) => {
    return selectedCategories.length === 0 || selectedCategories[product.category];
  });


 
  return (
    <>
    <div className="gift_card">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>payRups eGift Card Store</h2>
          </div>
          <div className="col-md-4">
            <FilterComponent toggleCategory={toggleCategory} selectedCategories={selectedCategories} />
          </div>
          <div className="col-md-8">
            <DataBrandComponent  filteredProducts={filteredProducts}   />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default index








// // import React, { useState } from "react";
// // import DataBrandComponent from "@/components/GiftWrp/DataBrandComponent/DataBrandComponent";
// // import FilterComponent from "@/components/GiftWrp/FilterComponent/FilterComponent";
// // import styles from "@/styles/Pages/gift-cards-and-gift-vouchers/gift-cards-and-gift-vouchers.module.css";
// // import { gift_card_voucher } from "@/utils/mockData/MockData";
// // import { useRouter } from "next/router";

// // const index = () => {
// //     const router = useRouter();
// //     const [selectedCategories, setSelectedCategories] = useState([]);

// //     const handleCategoryChange = (category) => {
// //         if (selectedCategories.includes(category)) {
// //           setSelectedCategories(selectedCategories.filter((item) => item !== category));
// //         } else {
// //           setSelectedCategories([...selectedCategories, category]);
// //         }
// //         router.push({ pathname: router.pathname, query: { categories: category } }, undefined, { scroll: false });

// //         // const value = category?.target?.value;
// //         // console.log("jn",value)
// //         // router.query["categories"] = value;
// //         // router.push(router, undefined, { scroll: false });
// //       };
// //       const filteredProducts = selectedCategories.length? gift_card_voucher.filter((product) =>selectedCategories.includes(product.category)): gift_card_voucher;
  
// //   return (
      // <>
      //   <div className="gift_card">
      //     <div className="container">
      //       <div className="row">
      //         <div className="col-12">
      //           <h2>payRups eGift Card Store</h2>
      //         </div>
      //         <div className="col-md-4">
      //           <FilterComponent  handleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories}/>
      //         </div>
      //         <div className="col-md-8">
      //           <DataBrandComponent filteredProducts={filteredProducts}/>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </>
// //   );
// // };

// // export default index;














// // import React, { useState, useEffect } from "react";
// // import DataBrandComponent from "@/components/GiftWrp/DataBrandComponent/DataBrandComponent";
// // import FilterComponent from "@/components/GiftWrp/FilterComponent/FilterComponent";
// // import styles from "@/styles/Pages/gift-cards-and-gift-vouchers/gift-cards-and-gift-vouchers.module.css";
// // import { gift_card_voucher } from "@/utils/mockData/MockData";
// // import { useRouter } from "next/router";

// // const index = () => {
// //   const router = useRouter();
// //   const [selectedCategories, setSelectedCategories] = useState([]);

// //   useEffect(() => {
// //     // Read the 'categories' query parameter from the router
// //     const { categories } = router.query;

// //     if (categories) {
// //       // If the 'categories' parameter exists, split it into an array
// //       const categoriesArray = Array.isArray(categories) ? categories : [categories];
// //       setSelectedCategories(categoriesArray);
// //     }
// //     else{
// //         setSelectedCategories([])
// //     }
// //   }, [router.query]);

// //   const handleCategoryChange = (category) => {
// //     let updatedCategories;

// //     if (selectedCategories.includes(category)) {
// //       updatedCategories = selectedCategories.filter((item) => item !== category);
// //     } else {
// //       updatedCategories = [...selectedCategories, category];
// //     }

// //     setSelectedCategories(updatedCategories);

// //     // Update the router query parameter with the updated list of categories
// //     router.push(
// //       { pathname: router.pathname, query: { categories: updatedCategories } },
// //       undefined,
// //       { scroll: false }
// //     );
// //   };

// //   const filteredProducts = selectedCategories.length
// //     ? gift_card_voucher.filter((product) => selectedCategories.includes(product.category))
// //     : gift_card_voucher;

// //   return (
// //     <>
// //       <div className="gift_card">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-12">
// //               <h2>e-pay eGift Card Store</h2>
// //             </div>
// //             <div className="col-md-4">
// //               <FilterComponent handleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories} />
// //             </div>
// //             <div className="col-md-8">
// //               <DataBrandComponent filteredProducts={filteredProducts} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default index;


// // pages/index.js
// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import { useRouter } from "next/router";
// // import DataBrandComponent from "../components/DataBrandComponent";
// // import FilterComponent from "../components/FilterComponent";
// import { gift_card_voucher } from "@/utils/mockData/MockData";
// import DataBrandComponent from "@/components/GiftWrp/DataBrandComponent/DataBrandComponent";
// import FilterComponent from "@/components/GiftWrp/FilterComponent/FilterComponent";


// const Home = () => {
//   const router = useRouter();
//   const [filteredProducts,setFilteredProducts] = useState(gift_card_voucher)
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

  


//   // Function Name - yeh function category ko filter ka raha hai
// // @param {type} paramName - Description of parameter
// // @returns {type} - Description of return value (if any)

  
//   // ham filter hone ke baad filter wale products dhikha rahe hai
//   // const filteredProducts = selectedCategories.length
//   //   ? gift_card_voucher.filter((product) => selectedCategories.includes(product.category))
//   //   : gift_card_voucher;

// // Calculate the index range for pagination
// // isse pagination ho raha hai
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//   const handlePageChange = ({ selected }) => {
//     const newPage = selected + 1;
//     setCurrentPage(newPage);
//     // category add kar rahe hai router me
//     router.push(
//       {
//         pathname: router.pathname,
//         query: { categories: selectedCategories, page: newPage },
//       },
//       undefined,
//       { scroll: false }
//     );
//   };


//   useEffect(() => {
//     // ... (baki ka code)

//     // Updated filteredProducts based on selectedCategories
//     const updatedFilteredProducts = selectedCategories.length
//       ? gift_card_voucher.filter((product) => selectedCategories.includes(product.category))
//       : gift_card_voucher;

//     setFilteredProducts(updatedFilteredProducts);
//   }, [selectedCategories]);


// // router se category nikal kar or set kar rahe hai.
//   useEffect(() => {
//     const { categories, page } = router.query;

//     if (categories) {
//       const categoriesArray = Array.isArray(categories) ? categories : [categories];
//       setSelectedCategories(categoriesArray);
//     } else {
//       setSelectedCategories([]);
//     }

//     if (page) {
//       setCurrentPage(parseInt(page, 10));
//     } else {
//       setCurrentPage(1);
//     }
//   }, [router.query]);
//   return (
//     <>
//       <div className="gift_card">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h2>e-pay eGift Card Store</h2>
//             </div>
//             <div className="col-md-4">
//             {/*  FilterComponent - A component for selecting product categories */}
//               <FilterComponent
//                 // handleCategoryChange={handleCategoryChange}
//                 selectedCategories={selectedCategories}
//                 setSelectedCategories={setSelectedCategories}
//               />
//             </div>
//             <div className="col-md-8">
//             {/* <input type="text" name="" id="" /> */}
//               <DataBrandComponent filteredProducts={currentItems} />
//               <ReactPaginate
//                 previousLabel={"<"}
//                 nextLabel={">"}
//                 pageCount={totalPages}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={2}
//                 onPageChange={handlePageChange}
//                 containerClassName="paginationBttns"
//                 subContainerClassName={"pages pagination"}
//                 activeClassName={"active"}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
