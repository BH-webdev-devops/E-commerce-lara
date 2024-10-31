import { Product } from "../types/interfaces"
import {Link} from 'react-router-dom'


const ProductCard: React.FC<Product> = ({title, description, image, price, id}) => {

    return (
        <div className="rounded border-solid rounded 2-xl border-2 max-w-96 m-4 " >
            <Link to={`/product/${id}`} ><h2 className="p-4 text-center underline">{title}</h2></Link>
            <img className="max-w-36 mx-auto" src={image} alt={title} />
            <p className="text-base mt-6 mx-auto px-auto">{description.substring(0, 100)}</p>
            <p className="text-right p-4">Price : {price}</p>

        </div>
    )
}

export default ProductCard