import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            // className={className}
            style={{ ...style, display: "flex", background: "black", borderRadius: 50, }}
            onClick={onClick}
        />
    );
}


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            // className={className}
            style={{ ...style, display: "flex", background: "black", borderRadius: 50 }}
            onClick={onClick}
        />
    );
}

function Catagory() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
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
                <label style={{ fontSize: 18, fontWeight: 'normal', color: '#99938e', paddingLeft: 40, paddingBottom: 10 }}>หมวดหมู่</label>
                <Slider {...settings}>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เสื้อผ้าแฟรชั่นผู้ชาย</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://cf.shopee.co.th/file/c514ca6e0c54d424da79b7d653dcdac9_tn' alt="" width={70} style={{ borderRadius: 100 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เสื้อผ้าแฟรชั่นผู้หญิง</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>มือถือและอุปกรณ์เสริม</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://mpics.mgronline.com/pics/Images/559000013478201.JPEG' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เครื่องสำอาง</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>ผลิตภัณฑ์สุขภาพ</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://backend.central.co.th/media/catalog/product/c/d/cds18984989.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>ของเล่นและสินค้าเด็ก</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://www.casio.com/content/dam/casio/product-info/locales/th/th/timepiece/product/watch/F/F2/F20/F-201WAM-9AV/assets/F-201WAM-9AV_Seq1.jpg.transform/main-visual-pc/image.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>นาฬิกา</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เสื้อผ้าแฟรชั่นผู้ชาย</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://cf.shopee.co.th/file/c514ca6e0c54d424da79b7d653dcdac9_tn' alt="" width={70} style={{ borderRadius: 100 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เสื้อผ้าแฟรชั่นผู้หญิง</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>มือถือและอุปกรณ์เสริม</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://mpics.mgronline.com/pics/Images/559000013478201.JPEG' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เครื่องสำอาง</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>ผลิตภัณฑ์สุขภาพ</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://backend.central.co.th/media/catalog/product/c/d/cds18984989.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>ของเล่นและสินค้าเด็ก</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://www.casio.com/content/dam/casio/product-info/locales/th/th/timepiece/product/watch/F/F2/F20/F-201WAM-9AV/assets/F-201WAM-9AV_Seq1.jpg.transform/main-visual-pc/image.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>นาฬิกา</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://s.alicdn.com/@sc04/kf/S0f928d9575f6480c9b7d6ee57fbfe752P.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เสื้อผ้าแฟรชั่นผู้ชาย</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://cf.shopee.co.th/file/c514ca6e0c54d424da79b7d653dcdac9_tn' alt="" width={70} style={{ borderRadius: 100 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เสื้อผ้าแฟรชั่นผู้หญิง</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://img.ltwebstatic.com/images3_pi/2021/05/13/16208792990cd20871bb40f7e77e5011f4b1d83c19.webp' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>มือถือและอุปกรณ์เสริม</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://mpics.mgronline.com/pics/Images/559000013478201.JPEG' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>เครื่องสำอาง</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://i0.wp.com/www.cctgroup.co.th/wp-content/uploads/2021/06/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpeg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>ผลิตภัณฑ์สุขภาพ</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://backend.central.co.th/media/catalog/product/c/d/cds18984989.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>ของเล่นและสินค้าเด็ก</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://www.casio.com/content/dam/casio/product-info/locales/th/th/timepiece/product/watch/F/F2/F20/F-201WAM-9AV/assets/F-201WAM-9AV_Seq1.jpg.transform/main-visual-pc/image.jpg' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>นาฬิกา</label>
                            </div>
                        </div>
                        <div style={styles.boxCatagory}>
                            <div style={styles.BoxImgCatagory}>
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
        minHeight: '150px',

    },
    containerBox: {
        maxWidth: '1200px',
        margin: 'auto',
    },
    showBullets: {
        color: 'red'
    },
    boxCatagory: {
        width: '100%',
        backgroundColor: '#ffffff',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        border: '0.01px solid #f2f2f2'
    },
    BoxImgCatagory: {
        margin: 'auto',
        marginTop: 15,
        height: 70,
        weight: 70,
        borderRadius: 100,
        textAlign: 'center'
    },
}
export default Catagory;

