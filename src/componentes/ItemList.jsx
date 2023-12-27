import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    
  return (
    <div>
        {
            productos.map((p)=>{
                return(
                   <Item
                   
                   titulo={p.titulo}
                   precio={p.precio}
                   descripcion={p.descripcion}
                   id = {p.id}
                   
                   />

                )
            })
        }
      
    </div>
  )
}

export default ItemList

