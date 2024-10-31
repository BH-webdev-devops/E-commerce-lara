import {useLocation} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'

const ProductDetails: React.FC = () => {
    let {productID} = useParams()
    const {products} = useContext(ProductsContext)
 
    console.log(typeof productID, products)

    const productByID = products?.find(product => product.id.toString() === productID)

    console.log(productByID)

    
    return(
        <>
           {productByID && (
            <div className="rounded border-solid rounded 2-xl border-2 max-w-96 m-4 " >
                <h2 className="p-4 text-center ">{productByID.title}</h2>

                <img className="max-w-36 mx-auto" src={productByID.image} alt={productByID.title} />
                <p className="text-base mt-6 mx-auto px-auto">{productByID.description.substring(0, 100)}</p>
                <p className="text-right p-4">Price : € {productByID.price}</p>
                <button className="bg-green-500 text-white py-2 px-4 mb-4 ounded">Buy</button>
            </div>
        )}
       
       </>
    )
}

export default ProductDetails