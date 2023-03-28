import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'

import '../styles/App.module.css'
import { useContext } from 'react';

function Product()
{
 
    const[data,setData]=useState([]);
    useEffect(async ()=>{
         let result = await fetch('https://fakestoreapi.com/products')
         result = await result.json();
         setData(result)
    },[])
    console.warn("data",data);
    return(
        <div >
          
            <style jsx global>
        {
            `
            h1{color:brown}
            ul{
                background-color:blue;
                padding:10px;
                list-style-type:none
            }
            
            a{
                color:white
            }
            `
        }
        </style>
           <ul>
            
        <center>
        <input type="search" className="form-control"
   

         placeholder="🔍Search for product, brands and more" style={{width: "400px"}}/>
         
        </center>
        </ul>
            <h1>Product List</h1>
            <Table striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Image</th>
            <th><center>Title</center></th>
            <th>Price</th>
            <th>Category</th>
            <th><center>Description</center></th>
    
            </tr>
        </thead>
        <tbody>
           {
            data.map((item)=>
            <tr>
            <td>{item.id}</td>
            <td><img style={{ width: "100%", height: "300%" }} src={item.image}/></td>
            <td>{item.title}</td>
            <th>{item.price}</th>
            <th>{item.category}</th>
            <th>{item.description}<br/></th>
        
            </tr>)
           }
        </tbody>
        </Table>
   
        </div>
    )
}
export default Product;