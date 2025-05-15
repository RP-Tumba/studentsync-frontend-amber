
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SearchCss from '../components/searchBar.module.css';
import { useEffect, useState } from 'react';
import {studentService} from '../lib/api';
const SearchBar=({setStudents})=>{
const[query,setquery] = useState("");



useEffect(()=>{
const searchfunction = async(query)=>{
  const result =  await studentService.searchStudents(query);
  setStudents(result.data)

}
searchfunction(query)
},[query])
  return(
    <>
    <div className={SearchCss.headerPart}>
      <h1 className={SearchCss.studentTableName}>All students</h1>
    <div className={SearchCss.searchLeft}>
       <div className={SearchCss.SearchSection}>
      <button className={SearchCss.SearchIcon}>
    <SearchIcon/>
    </button>
    <input type="text"  placeholder="Search" 
    className={SearchCss.SearchBarInput} value={query} onChange={e => setquery(e.target.value)}/>
    </div>
    <div className={SearchCss.addSection}>
      <button className={SearchCss.addIcon}><AddIcon/></button>
     <button className={SearchCss.addStudent}>Add student</button>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default SearchBar;