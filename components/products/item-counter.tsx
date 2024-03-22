'use client'

import { Button } from "@nextui-org/react"
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react"
import { useState } from "react"

export function ItemCounter({stock}:{stock:number}){
    
    const [value,setValue] = useState<number>(0)
    
    const plus = ()=>{
        if ( value < stock && value !== null){
        setValue( value + 1)
        }else {
      alert(`El contador no puede ser mayor que ${stock}`);
    }
    } 

    const minus = ()=>{
        if (value > 0 && value !== null){
            setValue( value - 1 )
        } else {
            alert('El contador no puede ser menor que 0');
          }
    }
    
    return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="sm" onClick={()=>minus()} isIconOnly color="primary">
        <MinusCircleIcon/>
      </Button>
      <span>
        {value}
      </span>
      <Button size="sm" onClick={()=>plus()} isIconOnly color="primary">
        <PlusCircleIcon/>
      </Button>
      </div>  
    )
}