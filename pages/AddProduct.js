import {useState} from 'react'
import styled from 'styled-components';
function AddProduct(){
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const Button = styled.button`
color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
      async function addProduct()
    {
        console.warn(name,file,price,description)
        const formData=new FormData();
        formData.append("file",file)
        formData.append("name",name)
        formData.append("price",price)
        formData.append("description",description)
        let result=await fetch('https://fakestoreapi.com/products')
     
    }
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
            <br/>
  <center> <h1>Add Product</h1><br/>
    <input type="text" className="form-control"
    onChange={(e)=>setName(e.target.value)}
    placeholder="name"style={{width: "300px"}} /> <br /><br/>

    <input type="file" className="form-control" 
    onChange={(e)=>setFile(e.target.value)}      
    placeholder="file"style={{width: "300px"}} /><br /><br/>


    <input type="text" className="form-control" 
    onChange={(e)=>setPrice(e.target.value)} 
    placeholder="price"style={{width: "300px"}}/><br /><br/>

    <input type="text" className="form-control"
    onChange={(e)=>setDescription(e.target.value)} 
    placeholder="description" style={{width: "300px"}} /><br /><br/>
 <div>
    <Button onClick={addProduct}>Add Product</Button>
  </div>
     </center>
        </div>
        </div>
    )
}
export default AddProduct