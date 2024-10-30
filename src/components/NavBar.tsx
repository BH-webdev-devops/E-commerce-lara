const NavBar: React.FC = () => {
    return (
        <nav className="bg-red-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">BAUHAUS mini</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Products</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>
        
    );
};

export default NavBar;