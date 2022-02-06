import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid } from "@mui/material";

const Product = ({ product, onchangeCount }) => {

  const increment = () => {
    onchangeCount(product.id, product?.count + 1)
  }
  const decrement = () => {
    (product.count !== 0) && onchangeCount(product.id, product?.count - 1)
  }

  return <Grid container
    direction="column"
    justifyContent="center"
    alignItems="stretch" style={{ marginBottom: "0.5rem" }}>
    <Grid xs={8} md={8} item className='itemContainer'>
      <div className='productInfo'>
        <img src='/jupiter.png' alt="product" className='productIcon'></img>
        <div className='info'><h3>{product.title}</h3> <small title={product.desc} className='productDesc'>{product.desc}</small></div>
      </div>
      <div></div>
      <div className='priceController'><RemoveIcon onClick={() => decrement()} /> <span className='priceDisplay'>
        {product.count}</span> <AddIcon onClick={() => increment()} />
        <span className='price'>{`${product.currency} ${product.price}`}</span>
         </div>
      
    </Grid>
  </Grid>

}

export default Product;
