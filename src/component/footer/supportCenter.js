
// Banking
import Shopee from '../../img/payment/shopee.png'
import SCB from '../../img/payment/scb.png'
import Kbank from '../../img/payment/logo.png'
import KS from '../../img/payment/KS.png'
import BL from '../../img/payment/BL.png'
import KT from '../../img/payment/KT.png'
import KTC from '../../img/payment/ktc.png'
import VISA from '../../img/payment/visa.png'
import Mastercard from '../../img/payment/mastercard.png'
import JCB from '../../img/payment/JCB.png'
// Logistic
import ShopeeExpress from '../../img/logistic/shopee.png'
import Ninja from '../../img/logistic/ninjavan.png'
import BestExpress from '../../img/logistic/bestexpress.png'
import JandT from '../../img/logistic/JandT.png'
import DHL from '../../img/logistic/DHL.png'
import Kerry from '../../img/logistic/kerry.png'
import ThaiPost from '../../img/logistic/ThailandPost.png'
import Flash from '../../img/logistic/flash.png'
//contact
import Facebook from '../../img/contact/facebook.png'
import IG from '../../img/contact/instagram.png'
import Line from '../../img/contact/line.png'
import LinkedIn from '../../img/contact/linkedin.png'
// Dowload App
import Apple from '../../img/dowloadApp/apple.png'
import GoogleStore from '../../img/dowloadApp/GoogleStore.png'
import AppGallery from '../../img/dowloadApp/AppGallery.png'
import QRcode from '../../img/dowloadApp/QRcode.png'


function SupportCenter() {
    return (



        <div style={{ width: '100%', backgroundColor: '#f5f5f5', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 60, maxWidth: '1200px', margin: 'auto', borderBottom: '1px solid #dbdbdb', }}>
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
                            <div style={{ display: 'flex', margin: 'auto', width: '90px', justifyContent: 'center' }}>
                                <img src={Shopee} alt="" width={60} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={SCB} alt="" width={32} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={Kbank} alt="" width={35} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                            <div style={{ display: 'flex', margin: 'auto', width: '90px', justifyContent: 'center' }}>
                                <img src={KS} alt="" width={30} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={BL} alt="" width={32} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={KT} alt="" width={35} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                            <div style={{ display: 'flex', margin: 'auto', width: '90px', justifyContent: 'center' }}>
                                <img src={KTC} alt="" width={60} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={VISA} alt="" width={32} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={Mastercard} alt="" width={35} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '160px' }}>
                            <div style={{ display: 'flex', width: '73px', justifyContent: 'center' }}>
                                <img src={JCB} alt="" width={50} />
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingBottom: 0 }}>
                        <label style={styles.text}>บริการจัดส่ง</label>
                    </div>
                    <div style={{ paddingBottom: 40, display: 'flex', flexDirection: 'column', }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                            <div style={{ display: 'flex', margin: 'auto', width: '90px', justifyContent: 'center' }}>
                                <img src={ShopeeExpress} alt="" width={70} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={Ninja} alt="" width={60} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={BestExpress} alt="" width={60} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                            <div style={{ display: 'flex', margin: 'auto', width: '90px', justifyContent: 'center' }}>
                                <img src={JandT} alt="" width={65} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={DHL} alt="" width={50} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '53px' }}>
                                <img src={Kerry} alt="" width={50} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '160px' }}>
                            <div style={{ display: 'flex', margin: 'auto', width: '45px', justifyContent: 'center' }}>
                                <img src={ThaiPost} alt="" width={50} />
                            </div>
                            <div style={{ display: 'flex', margin: 'auto', width: '40' }}>
                                <img src={Flash} alt="" width={50} />
                            </div>

                        </div>


                    </div>


                </div>

                <div>
                    <div style={{ paddingBottom: 10 }}>
                        <label style={styles.text}>ติดตามเรา</label>
                    </div>
                    <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
                        <label style={styles.textDetail}> <img src={Facebook} alt="" width={20} style={{ marginRight: 10 }} />Facebook</label>
                        <label style={styles.textDetail}> <img src={IG} alt="" width={20} style={{ marginRight: 10 }} />instagram</label>
                        <label style={styles.textDetail}> <img src={Line} alt="" width={20} style={{ marginRight: 10 }} />Line</label>
                        <label style={styles.textDetail}> <img src={LinkedIn} alt="" width={20} style={{ marginRight: 10 }} />LinkedIn</label>

                    </div>

                </div>


                <div>
                    <div style={{ paddingBottom: 10 }}>
                        <label style={styles.text}>ดาวน์โหลดแอปพลิเคชั่น</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ backgroundColor: 'white', border: '0.5px solid #efefef', height: '80%' }}>
                            <img src={QRcode} alt="" width={70} />
                        </div>
                        <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
                            <label style={styles.textDetail}> <img src={Apple} alt="" width={20} style={{ marginRight: 10 }} />App Store</label>
                            <label style={styles.textDetail}> <img src={GoogleStore} alt="" width={18} style={{ marginRight: 10 }} />Google Play</label>
                            <label style={styles.textDetail}> <img src={AppGallery} alt="" width={20} style={{ marginRight: 10 }} />AppGallery</label>

                        </div>
                    </div>
                </div>

            </div>

            <div style={{ margin: 'auto', width: '1200px', display: 'flex' }}>
                <div style={{ paddingBottom: 30, margin: 'auto', paddingTop: 20, width: '30%', textAlign: 'left ' }}>
                    <label style={styles.textFooter}>© 2022 Shopee. All Rights Reserved</label>
                </div>
                <div style={{ paddingBottom: 30, margin: 'auto', paddingTop: 40, textAlign: 'center ', width: '100%', }}>
                    <label style={styles.textFooter}>
                        Country & Region:
                        สิงคโปร์ |
                        อินโดนีเซีย |
                        ไต้หวัน |
                        ไทย |
                        มาเลเซีย |
                        เวียดนาม |
                        ฟิลิปปินส์ |
                        บราซิล |
                        เม็กซิโก |
                        โคลัมเบีย |
                        ชิลี |
                        โปแลนด์ |
                        สเปน |
                        ฝรั่งเศส |
                        อินเดีย |
                        อาร์เจนตินา </label>
                </div>
            </div>

        </div>


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
        paddingBottom: 50
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
    textCatagory: {
        fontSize: 12,
        color: '#99938e',
        fontWeight: 'bold'
    },
    textFooter: {
        fontSize: 13,
        color: '#99938e',
        fontWeight: 'normal'
    },
}
export default SupportCenter;
