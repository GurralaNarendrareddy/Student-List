import React, { useState,useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import axios from "axios"

export default function Read() {
  let [dat,setDat]=useState({});
  let {id}=useParams();
  let navigate=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3008/read/"+id)
    .then(res=>{
      if(res.data.Status==="Success"){
        setDat(res.data.Results[0])
      }
      else{
        alert("Error")
      }
    })
    .catch(err=>console.log(err))
  },[])
  
  return (
        <div className='d-flex profile flex-column justify-content-center align-items-center'>
            <h4>Name:{dat.name}</h4>
            <h4>Email:{dat.email}</h4>
            <button className='btn btn-primary' onClick={e=>navigate("/edit/"+id)}>Edit</button>
        </div>
  )
}
