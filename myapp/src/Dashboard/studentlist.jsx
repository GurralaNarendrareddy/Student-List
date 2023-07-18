import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import './style.css'
const Studentlist = () => {
  let [dat,setDat]=useState([]);
  let navigate=useNavigate();
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:3008/list')
    .then(res=>setDat(res.data.Results))
    .catch(err=>console.log(err))
  },[]) 
  let handleDel=(id)=>{
    axios.delete("http://localhost:3008/delete/"+id)
    .then(res=>{
      if(res.data.Status==="Success"){
        window.location.reload(true)
      }
      else{
        alert("Error")
      }
    }
      
      )
    .catch(err=>console.log(err))
  }
  let handleRead=(id)=>{
    axios.get("http://localhost:3008/read/"+id)
    .then(res=>{
      if(res.data.Status==="Success"){
        navigate("/read/"+id)
      }
      else{
        alert("Error")
      }
    })
    .catch(err=>console.log(err))
  }
  let handleEdit=(id)=>{
    
    axios.get("http://localhost:3008/read/"+id)
    .then(res=>{
      if(res.data.Status==="Success"){
        navigate("/edit/"+id)
      }
      else{
        alert("Error")
      }
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='student-list-cont'>
      <div className='list-cont'>
        <h3 className=''>Student List</h3>
        <div className='btn-cont'>
          <button className='btn btn-success'onClick={e=>navigate("/add")}>Create +</button>
        </div>
        <table className='table'>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className='text-center'>Action</th>
          </thead>
          <tbody className='body-cont'>
              {dat.map((each,ind)=>{
                return <tr key={ind}>
                    <td>{each.id}</td>
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td className='text-center'>
                  <button className='btn bg-primary text-white m-2' onClick={e=>handleRead(each.id)}>Read</button>
                  <button className='btn bg-success text-white m-2' onClick={e=>handleEdit(each.id)}>Edit</button>
                  <button className='btn bg-danger text-white m-2' onClick={e=>handleDel(each.id)}>Delete</button>
                </td>
                </tr>
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Studentlist