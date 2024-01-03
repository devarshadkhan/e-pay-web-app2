import { api_endpoints } from "@/utils/mockData/MockData";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BusBooking = () => {
  const [data, setData] = useState([]); // Combined data from different APIs
  const [selectedApi, setSelectedApi] = useState("posts"); // Default API to fetch data from
  console.log(selectedApi);
  const [loading, setLoading] = useState(false);
const router = useRouter()
  const getApiData = async (apiEndpoint) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${apiEndpoint}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Hide loader, regardless of success or error
    }
  };
  useEffect(() => {
    getApiData(selectedApi);
  }, [selectedApi]);

  useEffect(() => {
    const { api } = router.query;
    setSelectedApi(api || "posts");
  }, [router.query]);


  const handleApiChange = (e) => {
    const value = e.target.value;
    router.query["api"] = value;
    router.push( router, undefined,{ scroll: false })
    setSelectedApi(value);
  };

  // const apise = (item) => {
  //   if (selectedApi === "posts") {
  //     return <span>{item.title}</span>;
  //   } else if (selectedApi === "users") {
  //     <span>{item.name}</span>;
  //   } else if (selectedApi === "todos") {
  //     return <span>{item.title}</span>;
  //   } else if (selectedApi === "comments") {
  //     return <span>{item.email}</span>;
  //   } else {
  //     <span>{item.title}</span>;
  //   }
  // };

  const apise = (item) => {
    switch (selectedApi) {
      case "posts":
        return <span>{item.title}</span>;
      case "users":
        return <span>{item.name}</span>;
      case "todos":
        return <span>{item.title}</span>;
      case "comments":
        return <span>{item.email}</span>;
      case "albums":
        return <span>{item.title}</span>;
      case "photos":
        return <img src={item.thumbnailUrl || "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"} width={"30px"}></img>;
      default:
        return <span>"No Data Found"</span>;
    }
  };

 
  return (
    <div>
      <div>
        <label htmlFor="apiSelect">Select API:</label>
        <select id="apiSelect" value={selectedApi} onChange={handleApiChange}>
        {api_endpoints.map((e,i)=>{
          return(
            <>
            <option key={e.id} value={e.key}>{e.value}</option>
            </>
          )
        })}
          {/* <option value="posts">Posts</option>
          <option value="users">Users</option>
          <option value="todos">Todos</option>
          <option value="comments">Comments</option>
          <option value="albums">Albums</option>
          <option value="photos">Photos</option> */}
        </select>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          {data.map((item) => {
            return (
              <>
                <div className="d-inline-block" key={item.id}>
                  {/* {selectedApi === 'posts' ? (
                <span>{item.title}</span>
              ) : (
                <span>{item.name}</span>
              )
              } */}
                  {/* {selectedApi === 'posts' ?  <span>{item.title}</span> : selectedApi === "users" ?  <span>{item.name}</span>:  <span>{item.title}</span>
              } */}

              {/* api call function render jsx html uper  */}
                  {apise(item)}
                  {/* {
                if(selectedApi === 'posts'){
                    return <span>{item.title}</span>
                }
                else
              } */}
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BusBooking;





// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const BusBooking = () => {
//   const [post,setPost] = useState("posts")
//   const [user,setUser] = useState("users")
//   const get_api_post = async ()=>{
//     await axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//       setPost(res.data)
//     })
//     .catch(err => {
//       console.error(err);
//     })
//   }
//   const get_api_user = async ()=>{
//     await axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//       setUser(res.data)
//     })
//     .catch(err => {
//       console.error(err);
//     })
//   }
//   useEffect(() => {
//     if(post === "posts"){
//       get_api_post()
//     }
//     else{
//       get_api_user()
//     }
//   }, [post,user]);
//   return (
//     <div>
//      {post?.map((e)=>{
//       return(
//           <>
//           <span>{e.title}</span>
//           </>
//         )
//      })}
//     </div>
//   )
// }

// // export default BusBooking
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const BusBooking = () => {
//   const [data, setData] = useState([]); // Combined data from different APIs
//   const [selectedApi, setSelectedApi] = useState("posts"); // Default API to fetch data from
//   const [loading, setLoading] = useState(false);

//   const getApiData = async (apiEndpoint) => {
//     try {
//       setLoading(true); // Show loader
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${apiEndpoint}`
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false); // Hide loader, regardless of success or error
//     }
//   };

//   useEffect(() => {
//     getApiData(selectedApi);
//   }, [selectedApi]);

//   const handleApiChange = (e) => {
//     setSelectedApi(e.target.value);
//   };

//   // const apise = (item) => {
//   //   if (selectedApi === "posts") {
//   //     return <span>{item.title}</span>;
//   //   } else if (selectedApi === "users") {
//   //     <span>{item.name}</span>;
//   //   } else if (selectedApi === "todos") {
//   //     return <span>{item.title}</span>;
//   //   } else if (selectedApi === "comments") {
//   //     return <span>{item.email}</span>;
//   //   } else {
//   //     <span>{item.title}</span>;
//   //   }
//   // };

//   const apise = (item) => {
//     switch (selectedApi) {
//       case "posts":
//         return <span>{item.title}</span>;
//       case "users":
//         return <span>{item.name}</span>;
//       case "todos":
//         return <span>{item.title}</span>;
//       case "comments":
//         return <span>{item.email}</span>;
//       default:
//         return <span>{item.title}</span>;
//     }
//   };
//   return (
//     <div>
//       <div>
//         <label htmlFor="apiSelect">Select API:</label>
//         <select id="apiSelect" value={selectedApi} onChange={handleApiChange}>
//           <option value="posts">Posts</option>
//           <option value="users">Users</option>
//           <option value="todos">Todos</option>
//           <option value="comments">Comments</option>
//         </select>
//       </div>

//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div>
//           {data.map((item) => {
//             return (
//               <>
//                 <div className="d-d-inline-block" key={item.id}>
//                   {/* {selectedApi === 'posts' ? (
//                 <span>{item.title}</span>
//               ) : (
//                 <span>{item.name}</span>
//               )
//               } */}
//                   {/* {selectedApi === 'posts' ?  <span>{item.title}</span> : selectedApi === "users" ?  <span>{item.name}</span>:  <span>{item.title}</span>
//               } */}

//               {/* api call function render jsx html uper  */}
//                   {apise(item)}
//                   {/* {
//                 if(selectedApi === 'posts'){
//                     return <span>{item.title}</span>
//                 }
//                 else
//               } */}
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusBooking;
