import Right from '../../img/right-chevron.png'
import Shopee from '../../img/payment/shopee.png'
import SCB from '../../img/payment/scb.png'
import Kbank from '../../img/payment/logo.png'

function Footer() {
    return (
        <div style={styles.container}>
            <div style={styles.containerBox}>
                <div style={{ borderBottom: '1.5px solid #efefef', }}>
                    <label style={styles.text}>SHOPEE THAILAND ช้อปปิ้งออนไลน์กับช้อปปี้</label>
                    <label style={{ fontSize: 12, fontWeight: 'normal', color: '#99938e', paddingBottom: 20 }}>Shopee แอพช้อปปิ้งและเว็บซื้อของออนไลน์ที่สนุก เชื่อถือได้ ปลอดภัย เราคือแพลตฟอร์มซื้อขายสินค้าออนไลน์ชั้นนำในภูมิภาคเอเชียตะวันออกเฉียงใต้ ประเทศไทย สิงคโปร์ มาเลเซีย อินโดนีเซีย เวียดนาม ฟิลิปปินส์ และไต้หวัน ช้อปปิ้งออนไลน์กับ Shopee มั่นใจได้ในความปลอดภัย ด้วยการการันตีโดย Shopee ที่จะช่วยให้คุณซื้อของออนไลน์ได้อย่างมั่นใจ เงินของคุณจะยังไม่ถูกส่งไปยังผู้ขายหากคุณยังไม่ได้รับสินค้าจริง และคุณสามารถรับเงินคืนได้ทุกเมื่อหากไม่ได้รับสินค้า ที่สำคัญคือไม่ว่าใครก็สามารถขายของออนไลน์บน Shopee ได้ฟรี! ด้วยขั้นตอนง่าย ๆ และไม่มีค่าใช้จ่ายเพิ่มเติมใด ๆ ทั้งสิ้น มาร่วมช้อปปิ้งออนไลน์ที่ Shopee กับผู้ใช้อีกหลายล้านคนทั่วประเทศไทย เพื่อช้อปปิ้งสินค้าราคาถูก โปรโมชั่นดี ๆ ดีลเด็ด ๆ และลงขายสินค้าได้ง่ายอย่างง่ายดาย ทุกที่ ทุกเวลา พบกับประสบการณ์ช้อปปิ้งสุดฟินจากแบรนด์ดังมากมาย ไม่ว่าจะเป็นสกินแคร์พรีเมี่ยมจาก loccitane, Eucerin, แบรนด์แฟชั่นและไลฟ์สไตล์อีกมากมายทั้ง แบรนด์แฟชั่นช้ำนำอย่าง birkenstock, garmin, casio, guess,fila The North Face  calvinklein ฯลฯ ไปจนถึงแบรนด์เครื่องใช้ไฟฟ้า และของแต่งบ้าน Marshall, Canon, JBL, Nespresso, microsoft ฯลฯ</label>
                    <label style={{ fontSize: 14, color: '#fa5130', paddingBottom: 8, fontWeight: 'normal' }}>อ่านเพิ่มเติม     <img src={Right} alt="" width={15} /></label>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 60 }}>
                    <div>
                        <div style={{ paddingBottom: 10 }}>
                            <label style={styles.text}>ศูนย์ช่วยเหลือ</label>
                        </div>
                        <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
                            <label style={styles.textDetail}>Help Center</label>
                            <label style={styles.textDetail}>สั่งซื้อสินค้าอย่างไร</label>
                            <label style={styles.textDetail}>เริ่มขายสินค้าอย่างไร</label>
                            <label style={styles.textDetail}>ช่องทางการชำระเงินใน Shopee</label>
                            <label style={styles.textDetail}>Shopee Coins</label>
                            <label style={styles.textDetail}>การจัดส่งสินค้า</label>
                            <label style={styles.textDetail}>การคืนเงินและคืนสินค้า</label>
                            <label style={styles.textDetail}>การันตีโดย Shopee คืออะไร?</label>
                            <label style={styles.textDetail}>ติดต่อ Shopee</label>
                        </div>

                    </div>

                    <div>
                        <div style={{ paddingBottom: 10 }}>
                            <label style={styles.text}>เกี่ยวกับ SHOPEE</label>
                        </div>
                        <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
                            <label style={styles.textDetail}>เกี่ยวกับเรา</label>
                            <label style={styles.textDetail}>โปรแกรม Affiliate</label>
                            <label style={styles.textDetail}>ร่วมงานกับเรา</label>
                            <label style={styles.textDetail}>นโยบายของ Shopee</label>
                            <label style={styles.textDetail}>นโยบายความเป็นส่วนตัว</label>
                            <label style={styles.textDetail}>Shopee Blog</label>
                            <label style={styles.textDetail}>Shopee Mall</label>
                            <label style={styles.textDetail}>Seller Centre</label>
                            <label style={styles.textDetail}>Flash Deals</label>
                            <label style={styles.textDetail}>ผู้ติดต่อออนไลน์</label>
                        </div>

                    </div>

                    <div>
                        <div style={{ paddingBottom: 10 }}>
                            <label style={styles.text}>วิธีการชำระเงิน</label>
                        </div>
                        <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Shopee} alt="" width={70} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={SCB} alt="" width={40} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Kbank} alt="" width={35} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Shopee} alt="" width={70} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={SCB} alt="" width={40} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Kbank} alt="" width={35} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Shopee} alt="" width={70} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={SCB} alt="" width={40} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Kbank} alt="" width={35} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Shopee} alt="" width={70} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={SCB} alt="" width={40} />
                                </div>
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <img src={Kbank} alt="" width={35} />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div>
                        <div style={{ paddingBottom: 10 }}>
                            <label style={styles.text}>ติดตามเรา</label>
                        </div>
                        <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
                            <label style={styles.textDetail}>เกี่ยวกับเรา</label>
                            <label style={styles.textDetail}>โปรแกรม Affiliate</label>
                            <label style={styles.textDetail}>ร่วมงานกับเรา</label>
                            <label style={styles.textDetail}>นโยบายของ Shopee</label>
                            <label style={styles.textDetail}>นโยบายความเป็นส่วนตัว</label>
                            <label style={styles.textDetail}>Shopee Blog</label>
                            <label style={styles.textDetail}>Shopee Mall</label>
                            <label style={styles.textDetail}>Seller Centre</label>
                            <label style={styles.textDetail}>Flash Deals</label>
                            <label style={styles.textDetail}>ผู้ติดต่อออนไลน์</label>
                        </div>

                    </div>


                    <div>
                        <div style={{ paddingBottom: 10 }}>
                            <label style={styles.text}>ดาวน์โหลดแอปพลิเคชั่น</label>
                        </div>
                        <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
                            <label style={styles.textDetail}>เกี่ยวกับเรา</label>
                            <label style={styles.textDetail}>โปรแกรม Affiliate</label>
                            <label style={styles.textDetail}>ร่วมงานกับเรา</label>
                            <label style={styles.textDetail}>นโยบายของ Shopee</label>
                            <label style={styles.textDetail}>นโยบายความเป็นส่วนตัว</label>
                            <label style={styles.textDetail}>Shopee Blog</label>
                            <label style={styles.textDetail}>Shopee Mall</label>
                            <label style={styles.textDetail}>Seller Centre</label>
                            <label style={styles.textDetail}>Flash Deals</label>
                            <label style={styles.textDetail}>ผู้ติดต่อออนไลน์</label>
                        </div>
                    </div>

                </div>

            </div >
        </div >

    );
}
const styles = {
    container: {
        maxWidth: '100%',
        backgroundColor: 'white',
        margin: 'auto',
        paddingTop: 55,
        borderTop: '4px solid #fa5130',
        minHeight: '540px'
    },
    containerBox: {
        maxWidth: '1200px',
        margin: 'auto',
    },
    showBullets: {
        color: 'red'
    },
    text: {
        fontSize: 14,
        color: '#99938e',
        paddingBottom: 8
    },
    textDetail: {
        fontSize: 12,
        color: '#99938e',
        fontWeight: 'normal'
    },
}
export default Footer;
