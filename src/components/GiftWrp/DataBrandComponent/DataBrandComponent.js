import { filter_Product, setProducts } from "@/features/slices/FilterSlice";
import { gift_card_voucher } from "@/utils/mockData/MockData";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DataBrandComponent = ({filteredProducts}) => {
    
  const filterBy = useSelector((state) => state.searchItems.filterProduct);
  console.log("dddddddddddddppppppppp",filterBy
  );
  return (
    <>
      <div className="card_com">
        <div className="row">
          {filteredProducts.filter((product) =>
          filterBy ? product.title.toLowerCase().includes(filterBy) : true
        ).map((item) => {
            return (
              <>
                <div className="col-4">
                  <div class="card text-center mb-5">
                    <img
                      src={
                        item?.images[1] ||
                        "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
                      }
                      width={"150px"}
                      height={"200px"}
                      style={{ objectFit: "cover" }}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title" style={{ fontSize: "14px" }}>
                        {item.title}
                      </h5>
                      <p class="card-text fw-bold">${item.price}</p>
                      <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DataBrandComponent;

// // // import { gift_card_voucher } from "@/utils/mockData/MockData";
// // // import { useRouter } from "next/router";
// // // import React, { useState } from "react";
// // // import ReactPaginate from "react-paginate";
// // // const DataBrandComponent = ({ filteredProducts }) => {
// // //   const router = useRouter();
// // //   const [currentPage, setCurrentPage] = useState(1); // Initialize the current page to 1
// // //   const itemsPerPage = 6; // Number of items to display per page

// // //   // Calculate the index range for the current page
// // //   const indexOfLastItem = currentPage * itemsPerPage;
// // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // //   const currentItems = filteredProducts.slice(
// // //     indexOfFirstItem,
// // //     indexOfLastItem
// // //   );

// // //   const handlePageChange = (pageNumber) => {
// // //     setCurrentPage(pageNumber);
// // //   };

// // //   return (
// // //     <>
//   <div className="card_com">
//     <div className="row">
//       {currentItems.map((item) => {
//         return (
//           <>
//             <div className="col-4">
//               <div class="card text-center mb-5">
//                 <img
//                   src={
//                     item?.images[1] ||
//                     "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
//                   }
//                   width={"150px"}
//                   height={"200px"}
//                   style={{ objectFit: "cover" }}
//                   class="card-img-top"
//                   alt="..."
//                 />
//                 <div class="card-body">
//                   <h5 class="card-title" style={{ fontSize: "14px" }}>
//                     {item.title}
//                   </h5>
//                   <p class="card-text fw-bold">${item.price}</p>
//                   {/* <p class="card-text">
//                 Some quick example text to build on the card title and make
//                 up the bulk of the card's content.
//               </p>
//               <a href="#" class="btn btn-primary">
//                 Go somewhere
//               </a> */}
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//       })}
//       <ReactPaginate
//         previousLabel={"<"}
//         nextLabel={">"}
//         pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={2}
//         onPageChange={(data) => handlePageChange(data.selected + 1)}
//         containerClassName=" paginationBttns "
//         subContainerClassName={"pages pagination"}
//         activeClassName={"active"}
//       />
//     </div>
//   </div>
// // //     </>
// // //   );
// // // };

// // // export default DataBrandComponent;

// // // // import React, { useState } from "react";

// // // // const DataBrandComponent = ({ filteredProducts }) => {
// // // //   const [currentPage, setCurrentPage] = useState(0);
// // // //   const itemsPerPage = 6;

// // // //   const handlePageChange = (newPage) => {
// // // //     setCurrentPage(newPage);
// // // //   };

// // // //   const indexOfLastItem = (currentPage + 1) * itemsPerPage;
// // // //   const indexOfFirstItem = currentPage * itemsPerPage;
// // // //   const currentItems = filteredProducts.slice(
// // // //     indexOfFirstItem,
// // // //     indexOfLastItem
// // // //   );

// // // //   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

// // // //   return (
// // // //     <>
// // // //       <div className="card_com">
// // // //         <div className="row">
// // // //           {currentItems.map((item) => {
// // // //             return (
// // // //               <>
// // // //                 <div className="col-4" key={item.id}>
// // // //                   <div className="card text-center mb-5">
// // // //                     <img
// // // //                       src={
// // // //                         item?.images[1] ||
// // // //                         "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
// // // //                       }
// // // //                       width={"150px"}
// // // //                       height={"200px"}
// // // //                       style={{ objectFit: "cover" }}
// // // //                       className="card-img-top"
// // // //                       alt="..."
// // // //                     />
// // // //                     <div className="card-body">
// // // //                       <h5 className="card-title" style={{ fontSize: "14px" }}>
// // // //                         {item.title}
// // // //                       </h5>
// // // //                       <p className="card-text fw-bold">${item.price}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </div>

// // // //       <nav aria-label="Page navigation example">
// // // //         <ul className="pagination">
// // // //           <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
// // // //             <a
// // // //               className="page-link"
// // // //               href="#"
// // // //               aria-label="Previous"
// // // //               onClick={() => handlePageChange(currentPage - 1)}
// // // //             >
// // // //               <span aria-hidden="true">&laquo;</span>
// // // //             </a>
// // // //           </li>
// // // //           {Array.from({ length: totalPages }, (_, index) => {
// // // //             return (
// // // //               <li
// // // //                 key={index}
// // // //                 className={`page-item ${currentPage === index ? "active" : ""}`}
// // // //               >
// // // //                 <a
// // // //                   className="page-link"
// // // //                   href="#"
// // // //                   onClick={() => handlePageChange(index)}
// // // //                 >
// // // //                   {index + 1}
// // // //                 </a>
// // // //               </li>
// // // //             );
// // // //           })}
// // // //           <li
// // // //             className={`page-item ${
// // // //               currentPage === totalPages - 1 ? "disabled" : ""
// // // //             }`}
// // // //           >
// // // //             <a
// // // //               className="page-link"
// // // //               href="#"
// // // //               aria-label="Next"
// // // //               onClick={() => handlePageChange(currentPage + 1)}
// // // //             >
// // // //               <span aria-hidden="true">&raquo;</span>
// // // //             </a>
// // // //           </li>
// // // //         </ul>
// // // //       </nav>
// // // //     </>
// // // //   );
// // // // };

// // // // export default DataBrandComponent;

// // // // import React, { useState } from "react";

// // // // const DataBrandComponent = ({ filteredProducts }) => {
// // // //   const [currentPage, setCurrentPage] = useState(0);
// // // //   const itemsPerPage = 6;

// // // //   const handlePageChange = (newPage) => {
// // // //     setCurrentPage(newPage);
// // // //   };

// // // //   const indexOfLastItem = (currentPage + 1) * itemsPerPage;
// // // //   const indexOfFirstItem = currentPage * itemsPerPage;
// // // //   const currentItems = filteredProducts.slice(
// // // //     indexOfFirstItem,
// // // //     indexOfLastItem
// // // //   );

// // // //   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

// // // //   const pageNumbers = Array.from(
// // // //     { length: totalPages },
// // // //     (_, index) => index + 1
// // // //   );

// // // //   return (
// // // //     <>
// // // //       <div className="card_com">
// // // //         <div className="row">
// // // //           {currentItems.map((item) => (
// // // //             <div className="col-4" key={item.id}>
// // // //               <div className="card text-center mb-5">
// // // //                 <img
// // // //                   src={
// // // //                     item?.images[1] ||
// // // //                     "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
// // // //                   }
// // // //                   width={"150px"}
// // // //                   height={"200px"}
// // // //                   style={{ objectFit: "cover" }}
// // // //                   className="card-img-top"
// // // //                   alt="..."
// // // //                 />
// // // //                 <div className="card-body">
// // // //                   <h5 className="card-title" style={{ fontSize: "14px" }}>
// // // //                     {item.title}
// // // //                   </h5>
// // // //                   <p className="card-text fw-bold">${item.price}</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <nav aria-label="Page navigation example">
// // // //   <ul className="pagination">
// // // //     <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
// // // //       <a className="page-link" href="#" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
// // // //         <span aria-hidden="true">&laquo;</span>
// // // //       </a>
// // // //     </li>
// // // //     {pageNumbers.map((number) => (
// // // //       <li key={number} className={`page-item ${currentPage === number - 1 ? 'active' : ''}`}>
// // // //         <a className="page-link" href="#" onClick={() => handlePageChange(number - 1)}>
// // // //           {number}
// // // //         </a>
// // // //       </li>
// // // //     ))}
// // // //     <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
// // // //       <a className="page-link" href="#" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}>
// // // //         <span aria-hidden="true">&raquo;</span>
// // // //       </a>
// // // //     </li>
// // // //   </ul>
// // // // </nav>

// // // //     </>
// // // //   );
// // // // };

// // // // export default DataBrandComponent;

// // import React, { useState, useEffect } from "react";
// // import ReactPaginate from "react-paginate";
// // import { useRouter } from "next/router";

// // const DataBrandComponent = ({ filteredProducts }) => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 6;
// //   const router = useRouter();

// //   // Extract the "page" query parameter from the URL
// //   const { query } = router;
// //   const pageParam = query.page;

// //   // Initialize the current page based on the query parameter or 1 if not present
// //   useEffect(() => {
// //     if (pageParam) {
// //       const page = parseInt(pageParam, 10);
// //       if (!isNaN(page)) {
// //         setCurrentPage(page);
// //       }
// //     }
// //   }, [pageParam]);

// //   // Calculate the index range for the current page
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = filteredProducts.slice(
// //     indexOfFirstItem,
// //     indexOfLastItem
// //   );

// //   // Function to update the page query parameter in the URL
// //   const updatePageQueryParam = (page) => {
// //     router.push({
// //       pathname: router.pathname,
// //       query: { ...router.query, page: page.toString() },
// //     });
// //   };

// //   const handlePageChange = ({ selected }) => {
// //     const newPage = selected + 1;
// //     setCurrentPage(newPage);

// //     // Update the URL with the new page query parameter
// //     updatePageQueryParam(newPage);
// //   };

// //   return (
// //     <>
// //       <div className="card_com">
// //         <div className="row">
// //           {currentItems.map((item) => {
// //             return (
// //               <div className="col-4">
// //                 <div class="card text-center mb-5">
// //                   <img
// //                     src={
// //                       item?.images[1] ||
// //                       "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
// //                     }
// //                     width={"150px"}
// //                     height={"200px"}
// //                     style={{ objectFit: "cover" }}
// //                     class="card-img-top"
// //                     alt="..."
// //                   />
// //                   <div class="card-body">
// //                     <h5 class="card-title" style={{ fontSize: "14px" }}>
// //                       {item.title}
// //                     </h5>
// //                     <p class="card-text fw-bold">${item.price}</p>
// //                     {/* <p class="card-text">
// //                     Some quick example text to build on the card title and make
// //                     up the bulk of the card's content.
// //                   </p>
// //                   <a href="#" class="btn btn-primary">
// //                     Go somewhere
// //                   </a> */}
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //       <ReactPaginate
// //         previousLabel={"<"}
// //         nextLabel={">"}
// //         pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
// //         marginPagesDisplayed={2}
// //         pageRangeDisplayed={2}
// //         onPageChange={handlePageChange}
// //         containerClassName="paginationBttns"
// //         subContainerClassName={"pages pagination"}
// //         activeClassName={"active"}
// //       />
// //     </>
// //   );
// // };

// // export default DataBrandComponent;

// // components/DataBrandComponent.js

// import React from "react";
// const DataBrandComponent = ({ filteredProducts }) => {
//   return (
//     <>
//       <div className="card_com">
//         <div className="row">
//           {filteredProducts.map((item)=>{
//             return(
//               <>
//               <div className="col-4" key={item.id}>
//               <div className="card text-center mb-5">
//                 <img
//                   src={
//                     item?.images[1] ||
//                     "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
//                   }
//                   width={"150px"}
//                   height={"200px"}
//                   style={{ objectFit: "cover" }}
//                   className="card-img-top"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ fontSize: "14px" }}>
//                     {item.title}
//                   </h5>
//                   <p className="card-text fw-bold">${item.price}</p>
//                 </div>
//               </div>
//             </div>
//               </>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DataBrandComponent;
