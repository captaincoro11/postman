import React from 'react'
import {useState} from "react"
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios'
import {Link} from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'

const NewApp = () => {

    const [value,setSelected] = useState("GET");
    const [select,setSelect] = useState(false);
    const [url,setUrl] = useState('');
    const [data,setData] = useState();
    const [Loading , setLoading] = useState(false);
    const [body,setBody] = useState('');;
    const [header,setHeader] = useState('');
    const [show,setShow] = useState(false)
    const arr = ["GET","POST","PUT","DELETE"]
    const handleClick =()=>{
    setSelect(!select);
  
    }
    const showRequest =()=>{
      setShow(!show)
  
  
    }
    const sendAll=()=>{
     async function fetchData(){
      try {
        setLoading(true);
  
  
        console.log(body)
        const response = await axios.post('http://localhost:8001/sendRequest',{
          url,value,body,header
          
        },{
          headers:{
            "Content-Type":"application/json"
          }
        });
  
        setData(JSON.stringify(response.data.response));
  
    
        
      } catch (error) {
        setLoading(false)
        toast.error(error.response.data.message);
        setData(JSON.stringify(error.response.data.error))
  
        console.log(error)
        
      }
      finally{
        setLoading(false)
      }
  
  
      }
  
      fetchData();
  
  
  
    }
  
    return (
      <>
      <div className="flex justify-center ">
      <Toaster/>
        <div className=" z-50  flex space-x-4 mt-12 ">
        <div>
        <div className={"border flex justify-between border-blue-800 sm:w-20  text-white font-mono text-sm sm:text-md p-2 bg-blue-800 rounded-md cursor-pointer"} onClick={handleClick}><div>{value}</div><div className="sm:mt-2 mt-0.5">{<IoIosArrowDown />}</div></div>
       {select? <div className="text-white border p-2 border-orange-400 rounded-md cursor-pointer font-mono"  >
        {
          arr.map((item,index)=>(
            <div  onClick={()=>{setSelected(item);setSelect(!select)}} key={index}>
              {item===value?'':item}
            </div>
          ))
        }
  
        </div>:""
       }
  
  
        </div>
        <div >
          <input value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Enter Your Url Here" className="sm:w-80 w-52  p-2 rounded-md " type="text" />
        </div>
        <div>
          <button onClick={sendAll} className="flex border border-blue-800 bg-blue-800 p-2 font-mono text-white rounded-md">Send</button>
        </div>
        {
          value==="POST"?<div>
            <input value={header} onChange={(e)=>setHeader(e.target.value)} placeholder="Enter Bearer Authorization token here" className="p-2 rounded-md" type="text" />
          </div>:""
        }
        <Link className='mt-2 text-white underline' to='/allrequests'>
        Previous Requests
  
        </Link>
        
  
     
  
        </div>
       
       
        <div>
      
  
        </div>
        
      </div>
      <div className="flex justify-center mt-8 text-white">
        Enter data in raw JSON Format only
      </div>
  
      <div className="flex justify-center mt-8  ">
        
        <textarea value={body} onChange={(e)=>setBody(e.target.value)} style={{resize:'none',backgroundColor:"#161212de",color:"white",border:"1px solid orange"}}  rows={6} className="w-3/4 " type="text" />
  
      </div>
  
  
  
      {data?Loading?<div className="flex justify-center mt-20 text-white">
  
  <div>
    Loading...
  </div>
  
  
  </div>
      :<div className="flex justify-center mt-20">
      
      <textarea value={data} onChange={()=>{}} style={{willChange:"no",resize:'none',backgroundColor:"white",color:"black",border:"1px solid orange"}}  rows={6} className="w-3/4 " type="text" >
      
      
      
  
      </textarea>
  
      </div>
     :""
  
     
      }
        </>
    );
  }


export default NewApp
