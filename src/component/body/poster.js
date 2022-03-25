import PosterImg1 from '../../img/poster1.jpg';
import PosterImg2 from '../../img/poster2.png';
import PosterImg3 from '../../img/poster3.png';
import logistic from '../../img/logistics.png';
import New from '../../img/new.png';
import PcSmartphone from '../../img/pc-smartphone.png';
import Gamer from '../../img/game-over.png';
import Cart from '../../img/cart2.png';
import Profit from '../../img/profit.png';
import Hanger from '../../img/clothes-hanger.png';
import Tag from '../../img/tag.png';
import Discount from '../../img/discount.png';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: 'https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/277243714_5508769262499656_3093963448598635088_n.png?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ulPCpNVbe5IAX9jNwFs&_nc_ht=scontent.fcnx1-1.fna&oh=00_AT-uIzyPqZDN8Cgn5g6svGPK96mNdXPQM85-cis3ZOGf3Q&oe=62400929' },
    { url: 'https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/276073520_5494778340565415_2944834672599574351_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=n-wRAJjRGigAX9e0Wmc&_nc_ht=scontent.fcnx1-1.fna&oh=00_AT-7zBCH39kUQZcXk-hf7so1y2PYGeuS_f7v7S8on0T0Xg&oe=623F2DF6' },
    { url: 'https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/272761962_5311044848938766_4376898788481068354_n.png?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=4ZA8nIFIjnAAX8M50qe&_nc_ht=scontent.fcnx1-1.fna&oh=00_AT9wPaJG_ZUx4T1mBGYvh2u1xdTA7sqeJj6V4UQv5OemGg&oe=623F90FF' },
    { url: 'https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/273781507_5371699419539975_2900010883245235114_n.png?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ZvVGt725B1MAX91eQKW&_nc_ht=scontent.fcnx1-1.fna&oh=00_AT941296RQFOYu1L2rnOWTwqs5_68AXArNDj3mqcqDx9Qw&oe=62408B82' },

];



function Poster() {
    return (
        <div style={styles.container}>
            <div style={styles.containerBox}>

                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80%', }}>
                        <SimpleImageSlider
                            width={710}
                            height={300}
                            images={images}
                            showBullets={true}
                            showNavs={false}
                            autoPlayDelay={5.0}
                            autoPlay={true}
                           


                        />
                    </div>
                    <div style={{ marginLeft: 5, margin: 'auto' }}>
                        <div style={{ height: '50%', }}>
                            <img src={PosterImg2} alt="" width={380} />
                        </div>
                        <div style={{ height: '50%', marginTop: 10 }}>
                            <img src={PosterImg3} alt="" width={380} />
                        </div>
                    </div>
                </div>



                <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 10 }}>

                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={logistic} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>โค้ดส่งฟรี*</label>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={New} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>แบรนด์แท้ถูกชัวร์</label>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={PcSmartphone} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>สินค้า</label>
                            <label style={{ fontSize: 11 }}>อิเล็กทีอนิกส์</label>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={Gamer} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>Gamer Zone</label>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={Cart} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', paddingTop: 5 }}>
                            <div style={{ margin: 'auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontSize: 11 }}>ลูกค้าใหม่ รับโค้ด</label>
                            </div>

                        </div>
                    </div>
                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={Cart} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>ซูปเปอร์มาร์เก็ต</label>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={Profit} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>แลกรางวัล</label>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={Hanger} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>แฟชั่น ส่งฟรี*</label>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={Tag} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>โปรโมชั่นพิเสษ</label>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', }}>
                        <div style={{ margin: 'auto', width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: 15, border: '1.8px solid rgba(0, 0, 0, 0.2)', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, }}>
                                <img src={Discount} alt="" width={30} />
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
                            <label style={{ fontSize: 11 }}>โค้ดส่วนลดพิเศษ</label>
                        </div>
                    </div>




                </div>

            </div>
        </div >

    );
}
const styles = {
    container: {
        maxWidth: '1100px',
        backgroundColor: 'white',
        margin: 'auto',
        paddingTop: 150,
        boxShadow: '0px 0px 0px #000000',
        minHeight: '540px'
    },
    containerBox: {
        maxWidth: '1200px',
        margin: 'auto',
    },
    showBullets: {
        color: 'red'
    },
}
export default Poster;
