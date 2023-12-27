import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const {id} = useParams()
    console.log(id)

    
  const productos = [
    {id:"1",titulo: "Producto A", descripcion: "Descripcion Producto A", categoria: "carpinteria",precio: 100},
    {id:"2",titulo: "Producto B", descripcion: "Descripcion Producto B", categoria: "carpinteria",precio: 200},
    {id:"3",titulo: "Producto C", descripcion: "Descripcion Producto C", categoria: "electricidad",precio: 300},
    {id:"4",titulo: "Producto D", descripcion: "Descripcion Producto D", categoria: "electricidad",precio: 400},
    {id:"5",titulo: "Producto E", descripcion: "Descripcion Producto E", categoria: "plomeria",precio: 500},
    {id:"6",titulo: "Producto F", descripcion: "Descripcion Producto F", categoria: "plomeria",precio: 600}
  ]

  const ProductoFiltrado = productos.find((producto)=> producto.id == id)

  return (
    <div>
        {
            <ItemDetail
            titulo ={ProductoFiltrado.titulo}
            precio ={ProductoFiltrado.precio}
            descripcion ={ProductoFiltrado.descripcion}
            
            />
        }
      
    </div>
  )
}

export default ItemDetailContainer
