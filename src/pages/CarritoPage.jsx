import React, { useContext } from 'react';
import CarritoContext from '../context/CarritoContext';

const CarritoPage = () => {

    const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const handleImpresion = () => {
        print()
    }

    return (
        <>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>    {item.title}</th>
                                <th>{item.price * item.cantidad}</th>
                                <td>
                                    <button
                                        className='btn btn-ouline-primary '
                                        onClick={() => aumentarCantidad(item.id)}
                                    >+</button>
                                    <button
                                        className='btn btn-primary'
                                    >{item.cantidad}
                                    </button>
                                    <button
                                        className='btn btn-ouline-primary   '
                                        onClick={() => disminuirCantidad(item.id)}
                                    >-
                                    </button>
                                </td>
                                <td><button
                                    type='button'
                                    className='btn btn-danger btn-sm'
                                    onClick={() => eliminarCompra(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th><b>TOTAL:</b></th>
                        <td></td>
                        <td></td>
                        <td style={{color:"red", fontWeight:"bold", fontSize:20}}>${calcularTotal()}</td>
                    </tr>
                </tbody>
            </table>

            <div className='d-grid gap-2'>
                <button 
                className='btn btn-primary'
                onClick={() => handleImpresion()}
                disabled={listaCompras < 1}
                > Comprar </button>
            </div>

        </>
    );
}

export default CarritoPage;
