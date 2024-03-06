"use client"

import React ,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const page = () => {

  const [Images, setImages] = useState([]);

    useEffect(() => {
      getImages()
    }, [])


  const getImages = async ()=>{
    try{
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(Images)
    }
    catch(error){
      console.error("error fatching images");
    }
  }
  return (
    <div className='  '>
      <div className='justify-center flex h-20' >
        <div>
            <button onClick={getImages} className='px-5 py-3 bg-gray-600 text-white '>submit</button>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
      {Images.map((elem,i)=>{
        return <img key={i} src={elem.download_url} width={300} height={400} className='m-10 rounded'/>
        
      })}
     </div>
   </div>
  )
}

export default page