import {Nav, NavDropdown} from 'react-bootstrap'
import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

function App()
{
    return<div>
        <ul>
          <li><Link href="/Login">Login</Link></li>
            <li><Link href="/Register">Register</Link></li> 
            <li><Link href="/AddProduct">Add Product</Link></li>
            <li><Link href="/UpdateProduct"> Update Product</Link></li>
            <li><Link href="/DeleteProduct">Delete Product</Link></li>
            <li><Link href="/ProductList">Product List</Link></li>
            <li><Link href="/Username">Username</Link></li>
            <li><Link href="/Product">Product</Link></li>
            <li><Link href="/SearchProduct">Search Product</Link></li>
            
        </ul>
       
    </div>
}
export default App;