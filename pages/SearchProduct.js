import {useState} from 'react'
import styled from 'styled-components';
function SearchProduct(){
   
    return(
        <div>
             <style jsx global>
  {`
      body {
          background: pink;
       }
   `}
</style>    
        <div className =" col-sm-6-offset-sm-3">
       <center><h1>Search Product</h1>
        <br/>
        <input type="text" className="form-control" placeholder="Search Product" style={{width: "400px",height:"25px"}}/>
        </center>
        </div>
        </div>
    )
}
export default SearchProduct