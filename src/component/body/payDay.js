import HeaderPayDay from '../../img/headerPayDay.jpg'
import Right from '../../img/right-chevron.png'

function PayDay() {
    return (
        <div style={styles.container}>
            <div style={styles.containerBox}>
                <img src={HeaderPayDay} alt="" width={'100%'} />
                <div style={{ width: '98.5%', backgroundColor: '#ffebda', margin: 'auto', height: '78.5%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '97%', margin: 'auto', paddingTop: 15 }}>
                        <div>
                            <label style={styles.text}>ดีลเด็ดเฉพาะวันนี้</label>
                        </div>
                        <div>
                            <label style={styles.text}>ดูเพิ่มเติม <img src={Right} alt="" width={15} /></label>
                        </div>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '98.5%', margin: 'auto', paddingTop: 0, }}>
                        <div style={{ width: '16.4%', height: '220px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                            <img src="https://th-live-05.slatic.net/p/abe3987bdd0d572b39933268fcbf6487.jpg_720x720q80.jpg_.webp" alt="new" width={'100%'} />
                            <label style={styles.textPrice}>฿1,500 </label>
                        </div>
                        <div style={{ width: '16.4%', height: '220px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                            <img src="https://cf.shopee.co.th/file/23e367905146d76c67e2308e7abd2f6d" alt="new" width={'100%'} />
                            <label style={styles.textPrice}>฿2,490 </label>
                        </div>
                        <div style={{ width: '16.4%', height: '220px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                            <img src="https://cf.shopee.co.th/file/beaca331d8f31b9c629d8382671918e0" alt="new" width={'100%'} />
                            <label style={styles.textPrice}>฿500 </label>
                        </div>
                        <div style={{ width: '16.4%', height: '220px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                            <img src="https://cf.shopee.co.th/file/6c414275f7cff2e59c0acfa8cf6c4edd" alt="new" width={'100%'} />
                            <label style={styles.textPrice}>฿5,590 </label>
                        </div>
                        <div style={{ width: '16.4%', height: '220px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                            <img src="https://cf.shopee.co.th/file/62c03f1a22bd224a4c84ddc2febfc9ca" alt="new" width={'100%'} />
                            <label style={styles.textPrice}>฿9,990 </label>
                        </div>
                        <div style={{ width: '16.4%', height: '220px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                            <img src="https://cf.shopee.co.th/file/6073fad9363f77893e96a7ae0ec5960a" alt="new" width={'100%'} />
                            <label style={styles.textPrice}>฿590 </label>
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
        marginTop: 50,
        boxShadow: '0px 0px 0px #000000',
        height: '350px',
    },
    containerBox: {
        maxWidth: '1200px',
        backgroundColor: '#ee4e2e',
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
        paddingTop: 15,
        color: '#000000',
        paddingBottom: 8,
        textAlign: 'center',
        fontWeight: 'normal'
    },
}
export default PayDay;
