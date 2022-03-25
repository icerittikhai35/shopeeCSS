import Right from '../../img/right-chevron.png'
import CatagoryFooter from './catagoryFooter'
import SupportCenter from './supportCenter'


function Footer() {
    return (
        <div style={styles.container}>
            {/* แถบคำอธิบาย */}
            <div style={styles.containerBox}>
                <div style={{ borderBottom: '1.5px solid #efefef', }}>
                    <label style={styles.text}>SHOPEE THAILAND ช้อปปิ้งออนไลน์กับช้อปปี้</label>
                    <label style={{ fontSize: 12, fontWeight: 'normal', color: '#99938e', paddingBottom: 20 }}>Shopee แอพช้อปปิ้งและเว็บซื้อของออนไลน์ที่สนุก เชื่อถือได้ ปลอดภัย เราคือแพลตฟอร์มซื้อขายสินค้าออนไลน์ชั้นนำในภูมิภาคเอเชียตะวันออกเฉียงใต้ ประเทศไทย สิงคโปร์ มาเลเซีย อินโดนีเซีย เวียดนาม ฟิลิปปินส์ และไต้หวัน ช้อปปิ้งออนไลน์กับ Shopee มั่นใจได้ในความปลอดภัย ด้วยการการันตีโดย Shopee ที่จะช่วยให้คุณซื้อของออนไลน์ได้อย่างมั่นใจ เงินของคุณจะยังไม่ถูกส่งไปยังผู้ขายหากคุณยังไม่ได้รับสินค้าจริง และคุณสามารถรับเงินคืนได้ทุกเมื่อหากไม่ได้รับสินค้า ที่สำคัญคือไม่ว่าใครก็สามารถขายของออนไลน์บน Shopee ได้ฟรี! ด้วยขั้นตอนง่าย ๆ และไม่มีค่าใช้จ่ายเพิ่มเติมใด ๆ ทั้งสิ้น มาร่วมช้อปปิ้งออนไลน์ที่ Shopee กับผู้ใช้อีกหลายล้านคนทั่วประเทศไทย เพื่อช้อปปิ้งสินค้าราคาถูก โปรโมชั่นดี ๆ ดีลเด็ด ๆ และลงขายสินค้าได้ง่ายอย่างง่ายดาย ทุกที่ ทุกเวลา พบกับประสบการณ์ช้อปปิ้งสุดฟินจากแบรนด์ดังมากมาย ไม่ว่าจะเป็นสกินแคร์พรีเมี่ยมจาก loccitane, Eucerin, แบรนด์แฟชั่นและไลฟ์สไตล์อีกมากมายทั้ง แบรนด์แฟชั่นช้ำนำอย่าง birkenstock, garmin, casio, guess,fila The North Face  calvinklein ฯลฯ ไปจนถึงแบรนด์เครื่องใช้ไฟฟ้า และของแต่งบ้าน Marshall, Canon, JBL, Nespresso, microsoft ฯลฯ</label>
                    <label style={{ fontSize: 14, color: '#fa5130', paddingBottom: 8, fontWeight: 'normal' }}>อ่านเพิ่มเติม     <img src={Right} alt="" width={15} /></label>
                </div>
            </div >
            {/* แถบหมดหมู่ */}
            <div style={styles.containerBox}>

                <CatagoryFooter />
            </div >

            {/* แถบล่างสุด ต่างๆ */}
            <SupportCenter />
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
        maxWidth: '1100px',
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
        fontSize: 14,
        color: '#99938e',
        fontWeight: 'normal'
    },
}
export default Footer;
