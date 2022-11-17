import React from 'react'
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';
import '../styles/custom-styles.css'

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

          <ProductCard product={product} className="bg-dark text-white">
            <ProductCard.Image className='custom-image'/>
            <ProductCard.Title title="Title Product"/>
            <ProductCard.Buttons className='custom-buttons'/>
          </ProductCard>

          <ProductCard product={product} className="bg-dark text-white">
            <ProductImage className='custom-image'/>
            <ProductTitle className='text-white'/>
            <ProductButtons className='custom-buttons'/>
          </ProductCard>

          <ProductCard 
            product={product}
            style={{
              backgroundColor:'#70D1F8'
            }}
          >
            <ProductImage />
            <ProductTitle
              style={{
                fontWeight:'bold'
              }}
            />
            <ProductButtons 
              style={{
                display:'flex',
                justifyContent:'end'
              }}
            />
          </ProductCard>
          
      </div>
    </div>
  )
}
