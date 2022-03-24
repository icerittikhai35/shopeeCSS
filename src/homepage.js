import './App.css';
import Header from './component/header/header';
import Poster from './component/body/poster';
import Product from './component/body/product/product'

function Home() {
    return (
        <div style={{ margin: 'auto', backgroundColor: '#f5f5f5', height: '100%' }}>
            <Header />
            <Poster />
            <Product />


        </div>
    );
}

export default Home;
