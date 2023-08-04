import React from "react";
import ProductForm from './ProductForm'
import './ProductTile.css';

const ProductTile=(props)=>{

    const productFormDataHandler = (data) =>{
        const productFormData = {...data, Id: Math.random().toString()};
        props.onSaveProductTileData(productFormData);
    }
    console.log(props);
    return( 
        <div><ProductForm onSaveProductFormData ={productFormDataHandler}/></div>
    )
}
export default ProductTile;