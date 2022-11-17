import styles from '../styles/styles.module.css'
import { createContext, ReactElement, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext


export const ProductCard = ({product, children}:ProductCardProps) => {

    const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{product, counter, increaseBy}}>
        <div className={styles.productCard}>
            {children}
            {/* <ProductImage img={product.img}/>
            <ProductTitle title={product.title}/>
            <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
        </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductButtons
