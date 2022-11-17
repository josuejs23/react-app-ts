import React from 'react'
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';

const product = {
  id:'1',
  title:'Laptop Mac',
  img:"./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Storex</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
      }}>

          {/* <ProductCard product={product}/> */}
          <ProductCard product={product}>
            <ProductCard.Image/>
            <ProductCard.Title title="Title Product"/>
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
          
      </div>
    </div>
  )
}
