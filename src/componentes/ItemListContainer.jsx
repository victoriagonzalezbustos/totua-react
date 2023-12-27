import React from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({saludo}) => {

  const {categoriaId} = useParams()
  console.log(categoriaId)

  const productos = [
    {id:"1",titulo: "Producto A", descripcion: "Descripcion Producto A", categoria: "carpinteria",precio: 100},
    {id:"2",titulo: "Producto B", descripcion: "Descripcion Producto B", categoria: "carpinteria",precio: 200},
    {id:"3",titulo: "Producto C", descripcion: "Descripcion Producto C", categoria: "electricidad",precio: 300},
    {id:"4",titulo: "Producto D", descripcion: "Descripcion Producto D", categoria: "electricidad",precio: 400},
    {id:"5",titulo: "Producto E", descripcion: "Descripcion Producto E", categoria: "plomeria",precio: 500},
    {id:"6",titulo: "Producto F", descripcion: "Descripcion Producto F", categoria: "plomeria",precio: 600}
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0 ){
      setTimeout(()=>{
        resolve(productos)
      },3000)
    } else{
      reject("no se obtuvieron productos")
    }
  })


  mostrarProductos
    .then((resultado) => {
      
    })
    .catch((error) =>{
      
    })


    const ProductosFiltrados = productos.filter((producto)=> producto.categoria == categoriaId)
    console.log(ProductosFiltrados)

  return (
    <div>
      {
      categoriaId ? <ItemList productos = {ProductosFiltrados}/> : <ItemList productos = {productos}/>
      }
    </div>
  )
}

export default ItemListContainer
