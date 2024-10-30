import { Product } from "../types/interfaces"
import {Link} from 'react-router-dom'

const ProductCard: React.FC<Product> = ({title, description, image, price, id}) => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
                <Link to= {`/product/${id}`}><h2 className='p-4 text-center underline'>{title}</h2></Link>
                <img className="w-full h-48 object-cover" src={image} alt={title} />
                <div className="px-4 py-2">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
                    <p className="text-gray-600 text-sm mt-2">{description.substring(0, 100)}</p>
                    <p className="text-gray-800 text-xl mt-2 font-bold">€{price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard