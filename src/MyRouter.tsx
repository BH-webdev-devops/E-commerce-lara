import {Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import Contact from './pages/Contacts'
import NavBar from './components/NavBar'

const MyRouter: React.FC = () => {
    return(
        <>
        <NavBar/>
        <Routes>
            <Route path='/products' element={<Products/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </>
    )
}

export default MyRouter
