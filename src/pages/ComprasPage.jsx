import Card from '../components/Card'
import React, { useContext } from 'react'
import ProductosContext  from '../context/ProductosContext'
import CarritoContext from '../context/CarritoContext'

const ComprasPage = () => {
    
    const {productos} = useContext(ProductosContext)

    const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar  = (compra) =>{
        agregarCompra(compra)

    }
    const handleQuitar= (id) =>{
        eliminarCompra(id)
    }
    const handleAumentar= (id) =>{

    }
    const handleDisminuir= (id) =>{

    }

    return (
        <>
            <h1>Compras: </h1>
            <hr />
            {productos.map(producto => (
                <Card key={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    handleAgregar={() => handleAgregar(producto)}
                    handleQuitar={() => handleQuitar(producto.id)}
                    handleAumentar={handleAumentar}
                    handleDisminuir={handleDisminuir}
                >

                </Card>
            ))}
        </>
    )
}

export default ComprasPage








// import React, { useEffect,useState } from 'react';
// import Card from '../components/Card'

// const ComprasPage = () => {

//     const [productos, setProductos] = useState([])

//     const fetchProductos = async () => {
//         const response = await fetch("https://fakestoreapi.com/products")
//         const data = await response.json()
//         console.log(data)
//         setProductos(data)
//     }

//     useEffect(() => {
//         fetchProductos
//     }, [])




//     return (
//         <>
//             <h1>Compras:</h1>
//             <hr />

//             {productos.map(producto => (
//                 <Card key={producto.id}
//                 imagen={producto.image}
//                 titulo={producto-title}
//                 descripcion={producto.description}
//                 precio={producto.price}>

//                 </Card>
//             ))}
//         </>

//     );
// }

// export default ComprasPage;
