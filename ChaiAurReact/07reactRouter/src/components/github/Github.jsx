import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //         fetch('https://api.github.com/users/atharvarakshak')
    //         .then(response=>response.json())
    //         .then(data => {
    //             // console.log(data);
    //             setData(data);
    //         })
    //     },[])
  return (
    <div className=' flex justify-center items-center text-center m-4 bg-gray-500 text-white text-3xl'>
      <div>Github followers : {data.followers}</div>
      <img src={data.avatar_url} alt="" className='w-[300px] ' />
    </div>
  )
}

export default Github
export const githubInfoLoader = async ()=>{
    
    const response = await fetch('https://api.github.com/users/atharvarakshak')

    return response.json()

}
