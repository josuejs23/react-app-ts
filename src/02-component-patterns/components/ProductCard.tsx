import styles from '../styles/styles.module.css'
import { createContext, CSSProperties, ReactElement, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext

export interface ProductCardProps {
  product:Product,
  children?:ReactElement | ReactElement[],
  className?:string, 
  style?:CSSProperties
}


export const ProductCard = ({product, children, className, style}:ProductCardProps) => {

    const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{product, counter, increaseBy}}>
        <div 
          className={ `${styles.productCard} ${className} `}
          style={style}
        >
            {children}
        </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductButtons
