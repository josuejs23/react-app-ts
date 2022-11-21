import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart = () =>{
    const [shoppingCart, setShoppingCart] = useState<{[Key:string]:ProductInCart}>({})

  const onProductCountChange = ({count,product}:{count:number,product:Product})=>{
    setShoppingCart(oldShoppingCart =>{

    //Forma sencilla
      if(count ===0){
        const { [product.id]:toDelete, ...rest } = oldShoppingCart
        return rest
      }
      
      return {
          ...oldShoppingCart,
          [product.id]:{...product,count}
      }
    }
    )
  }

  return {
    onProductCountChange,
    shoppingCart
  }
}