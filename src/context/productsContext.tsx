import {useState, useEffect, createContext, ReactNode } from 'react'
import { Product } from '../types/interfaces'
import Axios from 'axios'


interface ProductControllerProps {
    children : ReactNode;
}

interface ProductContextType {
    products : Product[] | null;
    error : string | null;
    loading : boolean
}

export const ProductsContext = createContext<ProductContextType>({
    products : null,
    loading : true,
    error : null,
})

export const ProductsController = ({children} : ProductControllerProps) => {

    const [products, setProducts] = useState<Product[] | null >(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    const fetchProducts = async () => {
        try{
            const response = await Axios.get(`https://fakestoreapi.com/products`)
            setProducts(response.data)
        }
        catch(err : any){
            console.log(err)
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return(
        <ProductsContext.Provider value={{products, error, loading}}>
            {children}
        </ProductsContext.Provider>
    )

}