
 import Json_data from "./Json_data.json"
import {useState} from "react"

import "./App.css"
import ReactPaginate from "react-paginate";
function App() {
const [users,setUsers] =useState(Json_data.slice(0,50))
const [pageNumber,setPageNumber]=useState(0);
const userPerPage=10;
const pageVisted=pageNumber*userPerPage;
 const displayUsers=users.slice(pageVisted,pageVisted+userPerPage).map((value)=>{
  return(
  <div className="api">
  
  <div>{value.firstName}</div>
<p>{value.lastName}</p> 
<p>{value.email}</p> 
</div>
  )
})
const pageCount=Math.ceil(users.length/userPerPage);
const changePage = ({ selected }) => {
  setPageNumber(selected);
};

return (
  <div className="main">
    
    {displayUsers}
  
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"pagination"}
      previousLinkClassName={"previous"}
      nextLinkClassName={"next"}
      disabledClassName={"disabled"}
      activeClassName={"active"}
    />
    </div>

);
}

export default App;