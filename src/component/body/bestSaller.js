import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import Right from '../../img/right-chevron.png'

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

function BestSeller() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
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
            <div style={{ width: '100%', margin: 'auto', paddingTop: 20, }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%', margin: 'auto' }}>
                    <div>
                        <label style={{ fontSize: 16, fontWeight: 'normal', color: '#fa5130', paddingBottom: 10 }}>ขายดีประจำสัปดาห์</label>
                    </div>
                    <div>
                        <label style={{ fontSize: 15, color: 'red', textAlign: 'center', fontWeight: 'normal', }}>ดูเพิ่มเติม  <img src={Right} alt="new" width={'12px'} /></label>                    </div>
                </div>
                <Slider {...settings}>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={70} />
                            </div>
                            <div style={{
                                margin: 'auto',
                                height: 61,
                                weight: 60,
                                textAlign: 'center'
                            }}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 9 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>เสื้อผ้าแฟรชั่นผู้ชาย</label>
                            </div>
                        </div>

                    </div>


                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>มือถือและอุปกรณ์เสริม</label>
                            </div>
                        </div>

                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>ผลิตภัณฑ์สุขภาพ</label>
                            </div>

                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://www.casio.com/content/dam/casio/product-info/locales/th/th/timepiece/product/watch/F/F2/F20/F-201WAM-9AV/assets/F-201WAM-9AV_Seq1.jpg.transform/main-visual-pc/image.jpg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>นาฬิกา</label>
                            </div>
                        </div>

                    </div>
                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>

                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>เสื้อผ้าแฟรชั่นผู้ชาย</label>
                            </div>
                        </div>

                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>มือถือและอุปกรณ์เสริม</label>
                            </div>
                        </div>

                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>ผลิตภัณฑ์สุขภาพ</label>
                            </div>
                        </div>

                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://www.casio.com/content/dam/casio/product-info/locales/th/th/timepiece/product/watch/F/F2/F20/F-201WAM-9AV/assets/F-201WAM-9AV_Seq1.jpg.transform/main-visual-pc/image.jpg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>นาฬิกา</label>
                            </div>
                        </div>

                    </div>
                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>เสื้อผ้าแฟรชั่นผู้ชาย</label>
                            </div>
                        </div>

                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>มือถือและอุปกรณ์เสริม</label>
                            </div>
                        </div>

                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>ผลิตภัณฑ์สุขภาพ</label>
                            </div>
                        </div>

                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://www.casio.com/content/dam/casio/product-info/locales/th/th/timepiece/product/watch/F/F2/F20/F-201WAM-9AV/assets/F-201WAM-9AV_Seq1.jpg.transform/main-visual-pc/image.jpg' alt="" width={70} />
                            </div>
                            <div style={styles.BoxTextCatagory}>
                                <div style={{ background: '#bdbdbd', color: 'white', width: '180px', marginBottom: 10 }}>
                                    <label style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>ยอกขายต่อเดือน 6พัน+</label>
                                </div>
                                <label style={styles.textBestseller}>นาฬิกา</label>
                            </div>
                        </div>

                    </div>




                </Slider>
            </div>


        </div>
    );
}
const styles = {
    container: {
        maxWidth: '1200px',
        backgroundColor: 'white',
        margin: 'auto',
        marginTop: 20,
        boxShadow: '0px 0px 0px #000000',
        minHeight: '250px',

    },
    containerBox: {
        maxWidth: '1200px',
        margin: 'auto',
    },

    boxCatagory: {
        width: '100%',
        backgroundColor: '#ffffff',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        border: '0.01px solid #f2f2f2',
        height: '200px'
    },
    BoxImgCatagory: {
        margin: 'auto',
        marginTop: 15,
        height: 60,
        weight: 60,
        textAlign: 'center'
    },
    BoxTextCatagory: {
        margin: 'auto',
        paddingTop: 10,
        height: 60,
        weight: 60,
        textAlign: 'center'
    },
    textBestseller: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555555',

    },
}
export default BestSeller;

