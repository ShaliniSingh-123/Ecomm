import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import{withRouter} from 'react-router-dom'
import {useEffect,useState} from 'react'
function UpdateProduct(props){
   
    const[data, setData]=useState([])
    return(
        <div><center>
            <h1>Update Product</h1><br/><br/>
           <input type="text" defaultValue={data.name}/><br/><br/>
           <input type="text" defaultValue={data.price}/><br/><br/>
           <input type="text" defaultValue={data.description}/><br/><br/>
           <input type="text" defaultValue={data.file_path}/><br/><br/>
           <button>
            Update
           </button>
           </center>
     <style jsx global>
  {`
      body {
          background: #d59e76;
       }
   `}
</style>
        </div>
    )
}
export default UpdateProduct