import React, { useEffect, useState } from 'react'
import toast,{Toaster} from 'react-hot-toast'
import axios, { all } from 'axios'
import { Link } from 'react-router-dom'

const Request = () => {
    const [newValue,setNew] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try {
        const response = await axios.get('http://localhost:8001/getAll');
        const arr = Object.entries(response.data);
        const newArr = Object.entries(arr[0][1]);
        let setValue=[]
        for(let i=0;i<newArr.length;i++){
            const a = Object.entries(newArr[i][1]);
            setValue.push(a);

        }
        let allRequests=[];
        for(let i=0;i<setValue.length;i++){
            const a =Object.values(setValue[i][1]);
            allRequests.push(a);
        }
        let allRequestsDone=[];
        for(let i=0;i<allRequests.length;i++){
            const a=allRequests[i][1];
            allRequestsDone.unshift(a);

        }
    setNew(allRequestsDone)



                
            } catch (error) {
                toast.error(error.message)

                
            }



        }
        fetchData()


    },[])
    if(!newValue){
        <div className='text-white'>No Requests made yet</div>
    }
  return (
    <>
    <div>
    <Toaster/>
    <div className='text-white'>
    <h1 className='font-mono text-3xl text-center'>All Previous Requests</h1>
    <div className='mt-20'>

    {
        newValue.map((item,index)=>(
            <div className='text-center '>
                {item}
            </div>
        ))
    }
    </div>
    </div>
  
  

      
    </div>
    <div className='flex justify-center items-center'>
    <Link to='/' className='bg-white text-black font-mono p-2 mt-20 rounded-md '>
        Go Back to Dashboard
    </Link>

    </div>
    </>
  )
}

export default Request
