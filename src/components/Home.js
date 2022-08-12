/* eslint-disable react/no-unescaped-entities */

// import { ReactComponent as Logo } from '../img/Logo.svg'
import Footer from './Footer'

function Home() {
  return (
    <section className="homepage">
      <div className="body">
        <div className="body-writing">
          <div className="home-title">
            More than just a Dentist
          </div>
          <div className="home-writing">
            Roses are red, violets are blue, it's time for your dental cleaning, and maybe a checkup too
          </div>
        </div>

        <img src={require('../img/home.png')} className="home-image" />
      </div>
      
      <Footer />
    

    </section>
  )
}

export default Home
