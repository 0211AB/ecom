
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/category/Category';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import NewsLetter from './components/newsletter/NewsLetter';
import Products from './components/products/Products';
import Services from './components/services/Services';

const Home = () => {
  return (
    <main>
      <article>
        <Hero />
        <Services />
        <Category />
        <Products />
        <NewsLetter />
      </article>
    </main>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
