import { useState } from 'react';

export const useProduct = () =>{

    const [counter, setCounter] = useState(0);

    const increaseBy = (value = 1) =>{
        if(counter === 0 && value === -1) return;
        setCounter( c => c + value );
    }
    return {
        counter, 
        increaseBy
    }
}