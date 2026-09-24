import Navbar from "../components/Navbar";
import './PageNotFound.css'

function PageNotFound( {cart} ) {
  return (
    <>
      <Navbar cart={cart} />
      <div className="Page-Not-Found">Page Not Found</div>
    </>
  )
}

export default PageNotFound;