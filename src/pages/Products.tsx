import { useState, useEffect, useContext} from "react"
import { Product } from "../types/interfaces"
import Axios from 'axios'
import ProductCard from "../components/ProductCard"
import { ProductsContext } from '../context/productsContext'


const Products: React.FC = () => {
    // const [products, setProducts] = useState<Product[]>([])
    const {products} = useContext(ProductsContext)

    // const fetchProducts = async() => {
    //     try{
    //         const response = await Axios.get(`https://fakestoreapi.com/products`)
    //         setProducts(response.data)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }

   


    // useEffect(() => {
    //     fetchProducts()
    // },[])

    // console.log(products)

    return(
        <>
            <div className='grid-cols-4 flex justify-center flex-wrap space-between'>
            {products !==null && products.map(product => {
                return(
                    <ProductCard key={product.id} {...product}/> //key property is always in the parent element
                )
            })}
             </div>
        </>

    )
}

export default Products