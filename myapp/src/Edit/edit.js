import React,{useState,useEffect} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import axios from "axios"


export default function Edit() {
  let {id}=useParams()
  axios.defaults.withCredentials=true
  console.log(id)
  let [dat,setDat]=useState({name:"",email:""})
  let navigate=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3008/read/"+id)
    .then(res=>{
        setDat(res.data.Results[0])
    })
    .catch(err=>console.log(err))
  },[]) 
  let save=(e)=>{
    e.preventDefault()
    console.log(dat)
    axios.put("http://localhost:3008/update/"+id,dat) 
    .then(res=>{
        if(res.data.Status==="Success"){
            navigate("/")
        }
        else{
            alert("Error")
        }
    }) 
    .catch(err=>console.log(err))  
  } 
  return (
    <div className='form-main-cont '>
        <div className='form-sub-cont px-3  border p-4'> 
            <h3 className='text-center'>Edit Student</h3>
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInputname" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInputname" value={dat.name} onChange={e=>setDat({...dat,name:e.target.value})} placeholder="Name"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={dat.email} onChange={e=>setDat({...dat,email:e.target.value})} placeholder="abcd@example.com"/>
                </div>
                <div>
                    <button className='btn btn-success' onClick={save}>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}
