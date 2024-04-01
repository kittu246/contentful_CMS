// // import React, { useEffect, useState } from 'react'
// import { createClient } from "contentful";

// const client = createClient({
//   space: 'bcgamivenu50',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: 'p5iMEFjMCUBKblENnN-ZEpWAvQcyiNpDik5ZWREWEs0'
// })



// // const useContentFul = () => {

// //     const [loading,setLoading] = useState(true)
// //     const [project,setProject] = useState([]);

// //     const fetchContentful = async() =>{

// //         try{

// //             const res = await client.getEntry({content_type:"projects"});
            
            

// //             console.log(res)

// //             setLoading(false);



// //         }
// //         catch(error){
// //             console.log(error.response)
// //             setLoading(false);

// //         }

// //     }

// //     useEffect(() =>{

// //         fetchContentful();

// //     },[])
  
// // }


// client.getEntry('projects')
//   .then((entry) => console.log(entry))
//   .catch(console.error)

// // export default useContentFul

import { useState, useEffect } from 'react';
import { createClient } from 'contentful';


const apikey = import.meta.env.VITE_API_KEY;
console.log(apikey)

const client = createClient({
  space: 'bcgamivenu50',
  environment: 'master',
  accessToken: apikey,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      console.log(response);
      const fetchedProjects = response.items.map((project) =>{

        const{image,title,url}  =project.fields;
        const id = image.sys.id;
        const img = image?.fields?.file?.url;
        return{id,img,title,url};
      })
   
    setProjects(fetchedProjects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
 