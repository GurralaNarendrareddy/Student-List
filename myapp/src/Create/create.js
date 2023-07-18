import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Create() {
  let [nam,setNam]=useState();
  let [email,setEmail]=useState();
  let navigate=useNavigate();
  let add=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3008/add",{name:nam,email:email})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    setNam("")
    setEmail("")
    navigate("/")
  }
  return (
    <div className='form-main-cont '>
        <div className='form-sub-cont px-3  border p-4'>
            <h3 className='text-center'>Add Student</h3>
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInputname" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInputname" onChange={e=>setNam(e.target.value)} placeholder="Name"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={e=>setEmail(e.target.value)} placeholder="abcd@example.com"/>
                </div>
                <div>
                    <button className='btn btn-success' onClick={add}>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}
