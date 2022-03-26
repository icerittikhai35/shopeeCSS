import Slider from "react-slick";



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

function Catagory() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
                                <img src='https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd' alt="" width={70} style={{ borderRadius: 50 }} />
                            </div>
                            <div style={styles.BoxImgCatagory}>
                                <label style={{ fontSize: 14, fontWeight: 'normal', color: '#000000' }}>คอมพิวเตอร์</label>
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
        minHeight: '300px',

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
        marginTop: 15
    },
}
export default Catagory;

