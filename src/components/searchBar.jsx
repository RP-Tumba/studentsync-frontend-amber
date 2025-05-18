
import SearchIcon from '@mui/icons-material/Search';
import StudentTable from './studentTable';
import AddIcon from '@mui/icons-material/Add';
import SearchCss from './css/searchBar.module.css';
import { useEffect, useState } from 'react';
import {studentService} from '../lib/api';
const SearchBar=({setStudents,setShowAddForm})=>{
const[query,setquery] = useState("");

useEffect(()=>{
const searchfunction = async(query)=>{
  const result =  await studentService.searchStudents(query);
  console.log(result);
  setStudents(result.data)
}
searchfunction(query)
},[query])
  return(
    <>
    <div className={SearchCss.searchcontainer}>
      <h2 className={SearchCss.studentTableName}>All students</h2>
      <div className={SearchCss.searchLeft}>
               <div className={SearchCss.SearchSection}>
                <SearchIcon className={SearchCss.SearchIcon}/>
                <input type="text"  placeholder="Search" 
                   className={SearchCss.SearchBarInput} value={query} onChange={e => setquery(e.target.value)}/>
               </div>
   
               <button className={SearchCss.addStudent} onClick={() => setShowAddForm(true)}>
                
               <AddIcon/> Add student</button>
    
    </div>
    </div>
   
    </>
    
  )
}

export default SearchBar;