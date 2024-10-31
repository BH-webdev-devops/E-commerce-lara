import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Home.tsx'
import { BrowserRouter } from 'react-router-dom'
import MyRouter from './MyRouter.tsx'
import { ProductsController } from './context/productsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ProductsController>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </ProductsController>,
)
