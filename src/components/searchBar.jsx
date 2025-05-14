import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SearchCss from '../components/searchBar.module.css';
const SearchBar=()=>{
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
    className={SearchCss.SearchBarInput}/>
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