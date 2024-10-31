import {Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import Contact from './pages/Contacts'
import NavBar from './components/NavBar'
import Home from './Home'
import ProductDetails from './pages/ProductDetails'

const MyRouter: React.FC = () => {
    return(
        <>
        <NavBar/>
        <Routes>
            <Route path='/product/:productID' element={<ProductDetails/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>
        </>
    )
}

export default MyRouter
