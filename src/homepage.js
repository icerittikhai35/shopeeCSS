import './App.css';
import Header from './component/header/header';
import Poster from './component/body/poster';
import Product from './component/body/product/product'
import Footer from './component/footer/fotter';
import PayDay from './component/body/payDay';
import Catagory from './component/body/category';

function Home() {
    return (
        <div style={{ margin: 'auto', backgroundColor: '#f5f5f5', height: '100%' }}>
            <Header />
            <Poster />
            <PayDay />
            <Catagory />
            <Product />
            <Footer />


        </div>
    );
}

export default Home;
