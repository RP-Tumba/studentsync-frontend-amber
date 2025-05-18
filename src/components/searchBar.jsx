import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import SearchCss from '../components/searchBar.module.css';
import { useEffect, useState } from 'react';
import { studentService } from '../lib/api';
const SearchBar = ({ setStudents }) => {
  const [query, setquery] = useState('');

  useEffect(() => {
    const searchfunction = async query => {
      const result = await studentService.searchStudents(query);
      setStudents(result.data);
    };
    searchfunction(query);
  }, [query]);
  return (
    <>
      <div className={SearchCss.searchcontainer}>
        <h2 className={SearchCss.studentTableName}>All students</h2>
        <div className={SearchCss.searchLeft}>
          <div className={SearchCss.SearchSection}>
            <SearchIcon className={SearchCss.SearchIcon} />
            <input
              type="text"
              placeholder="Search"
              className={SearchCss.SearchBarInput}
              value={query}
              onChange={e => setquery(e.target.value)}
            />
          </div>

          <Link to="/add">
            {' '}
            <button className={SearchCss.addStudent}>
              {' '}
              <AddIcon /> Add student
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
