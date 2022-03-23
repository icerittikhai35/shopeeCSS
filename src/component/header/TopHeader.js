import React from 'react';
import Facebook from '../../img/facebook.png'
import IG from '../../img/instagram.png'
import Line from '../../img/line.png'
import Notification from '../../img/notification.png'
import Question from '../../img/question.png'
import Wolrd from '../../img/globe.png'



const Header = () => {
    return (

        <div style={styles.TopHeader}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label style={styles.textFirstHeader}>Seller Centre</label>
                <label style={styles.textTab}>|</label>
                <label style={styles.textHeader}>ขายสินค้ากับช้อปปี้</label>
                <label style={styles.textTab}>|</label>
                <label style={styles.textHeader}>ดาวน์โหลด</label>
                <label style={styles.textTab}>|</label>
                <label style={styles.textHeader}>ติดตามเราบน</label>
                <div style={{ paddingLeft: 10, }}>
                    <img src={Facebook} alt="" width={16} />
                </div>
                <div style={{ paddingLeft: 10 }}>
                    <img src={IG} alt="" width={16} />
                </div>
                <div style={{ paddingLeft: 10 }}>
                    <img src={Line} alt="" width={16} />
                </div>
            </div>


            <div style={{ display: 'flex', justifyContent: 'space-between', }}>

                <div style={{ display: 'flex', paddingRight: 10 }}>
                    <div style={{ paddingRight: 5 }}>
                        <img src={Notification} alt="" width={18} />
                    </div>
                    <div>
                        <label style={styles.textFirstHeader}>การแจ้งเตือน</label>
                    </div>
                </div>

                <div style={{ display: 'flex', paddingRight: 10 }}>
                    <div style={{ paddingRight: 5 }}>
                        <img src={Question} alt="" width={18} />
                    </div>
                    <div>
                        <label style={styles.textFirstHeader}>ช่วยเหลือ</label>
                    </div>
                </div>

                <div style={{ display: 'flex', paddingRight: 10 }}>
                    <div style={{ paddingRight: 5 }}>
                        <img src={Wolrd} alt="" width={18} />
                    </div>
                    <div>
                        <label style={styles.textFirstHeader}>ไทย</label>
                    </div>
                </div>

                <div style={{ display: 'flex', paddingRight: 10 }}>
                    <div>
                        <label style={styles.textFirstHeader}>สมัครใหม่</label>
                    </div>
                </div>

                <label style={styles.textTabSingin}>|</label>

                <div style={{ display: 'flex', paddingRight: 10 }}>
                    <div>
                        <label style={styles.textFirstHeader}>เข้าสู่ระบบ</label>
                    </div>
                </div>

            </div>
        </div>

    )
};

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#fa5130',
        position: 'fixed',
        height: 120,
    },
    TopHeader: {
        display: 'flex',
        maxWidth: '63%',
        margin: 'auto',
        paddingTop: 7,
        justifyContent: 'space-between'
    },
    centerHeader: {
        margin: 'auto',
        maxWidth: '63%',
    },
    textHeader: {
        color: 'white',
        paddingLeft: 10,
        paddingTop: 1,
        fontSize: 12,
        fontWeight: 'normal'

    },
    textFirstHeader: {
        color: 'white',
        paddingLeft: 0,
        paddingTop: 1,
        fontSize: 12,
        fontWeight: 'normal'

    },
    textTab: {
        color: 'white',
        paddingLeft: 10,
        paddingRight: 0,
        paddingTop: 1,
        fontSize: 12,
        fontWeight: 'normal'

    },
    textTabSingin: {
        color: 'white',
        paddingLeft: 0,
        paddingRight: 10,
        paddingTop: 1,
        fontSize: 12,
        fontWeight: 'normal'

    },
}

export default Header;