import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import HeroCarousel from '../components/HeroCarousel'
import "./home.css"
import { Link } from 'react-router-dom'








function Home() {

  return (

    <div className='container mt-4'>
      <HeroCarousel />
      <h1 className='text-center mb-5 mt-5 text-primary'>Shop the Latest Football Jerseys</h1>
      <div className="row justify-content-center">
        {
          products.slice(0,8).map((item) => {
            return <ProductCard key={item.id} {...item} />
          })
        }
      </div>
      <Link to='/shop' className='btn btn-outline-info mb-3 d-block m-auto w-50'>see All items</Link>
    </div>
    
  )
}

export default Home