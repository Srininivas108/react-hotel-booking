import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/destinations' element={<Destinations/>} />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blogsingle/:id' element={<BlogSingle/>}/>
          <Route path='/testimonial' element={<Testimonial/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/sign-in' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App