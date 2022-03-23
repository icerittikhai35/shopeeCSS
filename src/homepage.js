import './App.css';
import Header from './component/header/header';
import Poster from './component/body/poster';

function Home() {
    return (
        <div style={{ margin: 'auto' ,backgroundColor:'#f5f5f5',height:'100vh'}}>
            <Header />
            <Poster />

        </div>
    );
}

export default Home;
