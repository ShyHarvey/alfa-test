import styles from './App.module.scss'
import { Header } from './components/Header/Header'
import { Navbar } from './components/navbar/Navbar'
import { ProductInfo } from './components/ProductInfo/ProductInfo'
import "@fontsource/raleway"
import "@fontsource/montserrat"
import { AdSwiper } from './components/AdSwiper/AdSwiper'
import { AskUs } from './components/AskUs/AskUs'
import { Footer } from './components/footer/Footer'




function App() {


  return (
    <>
      <div className={styles.container}>
        <Header />
        <Navbar />
        <ProductInfo />
        <AdSwiper />
        <AskUs />
      </div>
      <Footer />
    </>
  )
}

export default App
