import Right from '../../../img/right-chevron.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
import SimpleImageSlider from "react-simple-image-slider";
import OneLogo from '../../../img/shopeeMall/1.png'
import TwoLogo from '../../../img/shopeeMall/2.png'
import ThreeLogo from '../../../img/shopeeMall/3.png'


const images = [
    { url: 'https://cf.shopee.co.th/file/52e1072f0ab6db8af4d3164779cde95d' },
    { url: 'https://cf.shopee.co.th/file/166085b95c0f8be01f1022587072dd46' },
    { url: 'https://cf.shopee.co.th/file/adb429db02375c4856bcb8aad7bc77c4' },

];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "black", borderRadius: 50, }}
            onClick={onClick}
        />
    );
}


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "black", borderRadius: 50 }}
            onClick={onClick}
        />
    );
}


function ShopeeMall() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]




    };
    return (
        <div style={styles.container}>
            <div style={styles.containerBox}>
                <div style={{ padding: 12, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', }}>
                        <div style={{ fontSize: 16, }}>
                            <label style={{ fontSize: 17, color: 'red', textAlign: 'center', fontWeight: 'normal', }}>SHOPEE MALL   </label>
                        </div>
                        <div style={{ fontSize: 16, paddingLeft: 10 }}>
                            <label style={{ fontSize: 17, color: 'black', textAlign: 'center', fontWeight: 'normal', }}>| </label>
                        </div>
                        <div style={{ fontSize: 16, paddingLeft: 10 }}>
                            <label style={{ fontSize: 17, color: 'black', textAlign: 'center', fontWeight: 'normal', }}>  <img src={OneLogo} alt="" width={20} style={{ borderRadius: 50 }} />ของเเท้ 100%</label>
                        </div>
                        <div style={{ fontSize: 16, paddingLeft: 10 }}>
                            <label style={{ fontSize: 17, color: 'black', textAlign: 'center', fontWeight: 'normal', }}><img src={TwoLogo} alt="" width={20} style={{ borderRadius: 50 }} />คืนเงิน/สินค้า ภายใน 15 วัน</label>
                        </div>
                        <div style={{ fontSize: 16, paddingLeft: 10 }}>
                            <label style={{ fontSize: 17, color: 'black', textAlign: 'center', fontWeight: 'normal', }}><img src={ThreeLogo} alt="" width={20} style={{ borderRadius: 50 }} />ส่งฟรีทั่วไทย</label>
                        </div>

                    </div>
                    <div style={{ display: 'flex', }}>

                        <div style={{ fontSize: 16, paddingLeft: 10 }}>
                            <label style={{ fontSize: 15, color: 'red', textAlign: 'center', fontWeight: 'normal', }}>ดูเพิ่มเติม  <img src={Right} alt="new" width={'12px'} /></label>
                        </div>

                    </div>

                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '98.5%', margin: 'auto', paddingTop: 0, height: '200px' }}>

                    <div style={{ width: '29%', height: '200px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <SimpleImageSlider
                            width={395}
                            height={500}
                            images={images}
                            showBullets={true}
                            showNavs={false}
                            autoPlayDelay={5.0}
                            autoPlay={true}

                        />
                    </div>


                    <div style={{ width: '66%', height: '210px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <Slider {...settings}>

                            <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 50%</label>
                                    </div>
                                </div>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://cf.shopee.co.th/file/c514ca6e0c54d424da79b7d653dcdac9_tn' alt="" width={90} style={{ borderRadius: 100 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 50%</label>
                                    </div>
                                </div>
                            </div>

                            <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 50%</label>
                                    </div>
                                </div>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://mpics.mgronline.com/pics/Images/559000013478201.JPEG' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 70%</label>
                                    </div>
                                </div>
                            </div>

                            <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 50%</label>
                                    </div>
                                </div>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://backend.central.co.th/media/catalog/product/c/d/cds18984989.jpg' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 30%</label>
                                    </div>
                                </div>
                            </div>

                            <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://www.casio.com/content/dam/casio/product-info/locales/th/th/timepiece/product/watch/F/F2/F20/F-201WAM-9AV/assets/F-201WAM-9AV_Seq1.jpg.transform/main-visual-pc/image.jpg' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 50%</label>
                                    </div>
                                </div>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 90%</label>
                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 50%</label>
                                    </div>
                                </div>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://cf.shopee.co.th/file/c514ca6e0c54d424da79b7d653dcdac9_tn' alt="" width={90} style={{ borderRadius: 100 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 55%</label>
                                    </div>
                                </div>
                            </div>

                            <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 30%</label>
                                    </div>
                                </div>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://mpics.mgronline.com/pics/Images/559000013478201.JPEG' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 10%</label>
                                    </div>
                                </div>
                            </div>

                            <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={90} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 15%</label>
                                    </div>
                                </div>
                                <div style={styles.boxCatagory}>
                                    <div style={styles.BoxImgCatagory}>
                                        <img src='https://backend.central.co.th/media/catalog/product/c/d/cds18984989.jpg' alt="" width={80} style={{ borderRadius: 50 }} />
                                    </div>
                                    <div style={styles.BoxImgCatagory}>
                                        <label style={{ fontSize: 20, fontWeight: 'normal', color: '#d0011b' }}>ลดสูงสุด 50%</label>
                                    </div>
                                </div>
                            </div>






                        </Slider>
                    </div>

                </div>

            </div>

        </div >

    );
}
const styles = {
    container: {
        maxWidth: '1200px',
        backgroundColor: 'white',
        margin: 'auto',
        marginTop: 20,
        boxShadow: '0px 0px 0px #000000',
        height: '563px',
    },
    containerBox: {
        maxWidth: '1200px',
        backgroundColor: '#ffffff',
        height: '100%',
        borderRadius: 15,
        margin: 'auto',


    },
    text: {
        fontSize: 16,
        color: '#ee4e2e',
        paddingBottom: 8,
        textAlign: 'center',
        fontWeight: 'normal'
    },
    textPrice: {
        fontSize: 16,
        paddingTop: 5,
        color: '#ee4e2e',
        paddingBottom: 8,
        textAlign: 'center',
        fontWeight: 'normal'
    },
    boxCatagory: {
        width: '100%',
        height: '250px',
        backgroundColor: '#ffffff',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        border: '0.01px solid #f2f2f2'
    },
    BoxImgCatagory: {
        margin: 'auto',
        marginTop: 50,
        height: 70,
        weight: 70,
        borderRadius: 100,
        textAlign: 'center'
    },
}
export default ShopeeMall;
