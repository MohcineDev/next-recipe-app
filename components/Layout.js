import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      {
        props.children
      }
      <Footer />
    </div>
  )
}
