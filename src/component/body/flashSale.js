import FlashSaleImg from '../../img/Flash-Sale.png'
import Right from '../../img/right-chevron.png'
import Countdown from "react-countdown";

function FlashSale() {
    return (
        <div style={styles.container}>
            <div style={styles.containerBox}>
                <div style={{ padding: 12, display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ fontSize: 16, }}>
                        <img src={FlashSaleImg} alt="" width={'100px'} />

                    </div>
                    <div style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 5, color: 'white', backgroundColor: 'black', width: '80px', textAlign: 'center' }}>
                        <Countdown
                            date={Date.now() + 100000}
                            daysInHours={true}
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '98.5%', margin: 'auto', paddingTop: 0, }}>
                    <div style={{ width: '15%', height: '210px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <img src="https://th-live-05.slatic.net/p/abe3987bdd0d572b39933268fcbf6487.jpg_720x720q80.jpg_.webp" alt="new" width={'100%'} />
                        <label style={styles.textPrice}>฿1,500 </label>
                        <div style={{ width: '90%', backgroundColor: '#ffbda6', height: 20, borderRadius: 100, margin: 'auto', }}>
                            <label style={{ fontSize: 12, color: 'white', textAlign: 'center', fontWeight: 'normal', paddingBottom: 10 }}>ขายแแล้ว 0 </label>
                        </div>
                    </div>
                    <div style={{ width: '15%', height: '210px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <img src="https://cf.shopee.co.th/file/23e367905146d76c67e2308e7abd2f6d" alt="new" width={'100%'} />
                        <label style={styles.textPrice}>฿2,490 </label>
                        <div style={{ width: '90%', backgroundColor: '#ffbda6', height: 20, borderRadius: 100, margin: 'auto', }}>
                            <label style={{ fontSize: 12, color: 'white', textAlign: 'center', fontWeight: 'normal', paddingBottom: 10 }}>ขายแแล้ว 0 </label>
                        </div>
                    </div>
                    <div style={{ width: '15%', height: '210px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <img src="https://cf.shopee.co.th/file/beaca331d8f31b9c629d8382671918e0" alt="new" width={'100%'} />
                        <label style={styles.textPrice}>฿500 </label>
                        <div style={{ width: '90%', backgroundColor: '#ffbda6', height: 20, borderRadius: 100, margin: 'auto', }}>
                            <label style={{ fontSize: 12, color: 'white', textAlign: 'center', fontWeight: 'normal', paddingBottom: 10 }}>ขายแแล้ว 0 </label>
                        </div>
                    </div>
                    <div style={{ width: '15%', height: '210px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <img src="https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd" alt="new" width={'100%'} />
                        <label style={styles.textPrice}>฿5,590 </label>
                        <div style={{ width: '90%', backgroundColor: '#ffbda6', height: 20, borderRadius: 100, margin: 'auto', }}>
                            <label style={{ fontSize: 12, color: 'white', textAlign: 'center', fontWeight: 'normal', paddingBottom: 10 }}>ขายแแล้ว 0 </label>
                        </div>
                    </div>
                    <div style={{ width: '15%', height: '210px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <img src="https://cf.shopee.co.th/file/62c03f1a22bd224a4c84ddc2febfc9ca" alt="new" width={'100%'} />
                        <label style={styles.textPrice}>฿9,990 </label>
                        <div style={{ width: '90%', backgroundColor: '#ffbda6', height: 20, borderRadius: 100, margin: 'auto', }}>
                            <label style={{ fontSize: 12, color: 'white', textAlign: 'center', fontWeight: 'normal', paddingBottom: 10 }}>ขายแแล้ว 0 </label>
                        </div>
                    </div>
                    <div style={{ width: '15%', height: '210px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                        <img src="https://cf.shopee.co.th/file/6073fad9363f77893e96a7ae0ec5960a" alt="new" width={'100%'} />
                        <label style={styles.textPrice}>฿590 </label>
                        <div style={{ width: '90%', backgroundColor: '#ffbda6', height: 20, borderRadius: 100, margin: 'auto', }}>
                            <label style={{ fontSize: 12, color: 'white', textAlign: 'center', fontWeight: 'normal', paddingBottom: 10 }}>ขายแแล้ว 0 </label>
                        </div>
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
        height: '300px',
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
}
export default FlashSale;
