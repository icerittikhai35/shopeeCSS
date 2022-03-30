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
    { url: 'https://www.techhub.in.th/wp-content/uploads/2021/06/Shopee-pay-Slide-Banner-1920x754px.jpg' },
    { url: 'https://cf.shopee.co.th/file/b1d32ced4c34b7d2b13ddd785773f61c' },
    { url: 'https://cf.shopee.co.th/file/915ff301bf522e145d2fd7ae30489874' },
    { url: 'https://www.techhub.in.th/wp-content/uploads/2020/11/3BB-PressPic-20Nov2020-Pic-2.jpg' },

];



function Poster() {
    return (
        <div style={styles.container}>
            <div style={styles.containerBox}>

                <div style={{ display: 'flex', }}>
                    <div style={{ width: '80%', }}>
                        <SimpleImageSlider
                            width={795}
                            height={249}
                            images={images}
                            showBullets={true}
                            showNavs={false}
                            autoPlayDelay={5.0}
                            autoPlay={true}

                        />
                    </div>
                    <div style={{ marginLeft: 5, margin: 'auto' }}>
                        <div >
                            <img src={PosterImg2} alt="" width={400} height={122} />
                        </div>
                        <div style={{  marginTop: 5 }}>
                            <img src={PosterImg3} alt="" width={400} height={122} />
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
        maxWidth: '100%',
        backgroundColor: 'white',
        margin: 'auto',
        paddingTop: 150,
        boxShadow: '0px 0px 0px #000000',
        minHeight: '500px'
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
