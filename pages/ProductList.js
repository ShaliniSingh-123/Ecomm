import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
function ProductList()
{
    return(
        <div><h1>Product List</h1><br/>
            <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Samsung</td>
                <td>10000</td>
                <td>ASamsung Product</td>
            </tr>
            <tr><td>2</td>
                <td>Mi</td>
                <td>20000</td>
                <td>Mi Product</td>
            </tr>
        </tbody>
            </Table>   
        </div>
    )}
export default ProductList