import {Link} from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <nav className="bg-red-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">BAUHAUS mini</h1>
          <ul className="flex space-x-4">
            <Link to='/'> <li className='text-gray-700 hover:text-gray-200' >Home</li></Link>
            <Link to='/products'> <li className='text-gray-700 hover:text-gray-200'>Products</li></Link>
            <Link to='/contact'> <li className='text-gray-700 hover:text-gray-200'>Contact</li></Link>
          </ul>
        </div>
      </nav>
        
    );
};

export default NavBar;