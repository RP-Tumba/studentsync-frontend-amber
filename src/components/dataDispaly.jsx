import React, {useEffect, useState } from "react";
import {studentService} from '../lib/api';

function DataDisplay(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    const getData= async()=>{
      try{
        const result=await studentService.getAllStudents();
      
        console.log(result);
        setData(result.data);
      }catch(err){
        console.error('Failed to load data',err.message);
      }
    };
    getData();
  },[]);

  return(
    <div>
      <h2>Supabase Data</h2>
      <ul>
        {data.map((item,index)=>(
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataDisplay;