import React from 'react';
import Logo from '../../img/shopee_logo_white.png'
import Search from '../../img/search.png'
import Cart from '../../img/cart.png'



const Header = () => {
    return (

        <div style={styles.centerHeader}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <img src={Logo} alt="" width={150} />
                </div>

                <div style={{ width: '67%', }}>
                    <div style={{ width: '100%', height: 40, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <input type="text" name="name" placeholder='วันช้อปปี้เพย์ | โค้ดลดสูงสุด 2,500.-' style={styles.input} />
                        <div style={{ backgroundColor: '#fa5130', height: '33px', width: '9%', borderRadius: 2, display: 'flex', margin: 'auto' }}>
                            <div style={{ margin: 'auto' }}>
                                <img src={Search} alt="" width={15} />
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'left',paddingTop:5}}>
                        <label style={styles.textFirstHeader}>แมส</label>
                        <label style={styles.textHeader}>กระเป๋าสะพายข้าง</label>
                        <label style={styles.textHeader}>รองเท้าเเตะผู้หญิง</label>
                        <label style={styles.textHeader}>เสื้อครอป</label>
                        <label style={styles.textHeader}>ชุดตรวจ ATK</label>
                        <label style={styles.textHeader}>เสื้อยึด</label>
                        <label style={styles.textHeader}>ATK</label>
                        <label style={styles.textHeader}>กางเกงขายาว</label>
                    </div>
                </div>

                <div style={{ width: '8%' }}>
                    <div style={{ paddingTop: 15, margin: 'auto', }}>
                        <img src={Cart} alt="" width={30} />
                    </div>
                </div>
            </div>
        </div>

    )
};

const styles = {

    centerHeader: {
        margin: 'auto',
        maxWidth: '63%',
        paddingTop: 20
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
    input: {
        width: '90%',
        boxShadow: '0px 0px #ffffff',
        paddingLeft: 10,
        border: 0
    },
   
   
}

export default Header;