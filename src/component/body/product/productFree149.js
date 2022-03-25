import DataStoreFree from '../../../dataStoreFree';
import Button from 'react-bootstrap/Button';


function ProductFree149() {
    let boxStore =
        DataStoreFree.map((item, e) => {
            console.log(item.id);
            return (
                <div style={{ marginTop: '5%', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <img src={item.Image} alt="new" width={'100%'} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <div style={{ display: 'flex', padding: '5%', }}>
                            <label style={{ fontSize: 11, fontWeight: 'normal', }}>{item.name}</label>
                        </div>
                        <div style={{ display: 'flex', paddingLeft: '5%' }}>
                            <label style={{ fontSize: 15, fontWeight: 'normal', color: '#fa5130' }}>{item.price}</label>
                        </div>
                    </div>
                </div>
            )
        });
    return (
        <div style={styles.container}>
            <table style={{ margin: 'auto', backgroundColor: '#f5f5f5', width: '100%' }}>
                <tr >
                    <td>
                        <div style={styles.containerTableStyle}>
                            {boxStore}
                        </div>
                    </td>
                </tr>
            </table>

            <div style={{ display: 'flex', justifyContent: 'center', height: 60, paddingTop: 20, }}>

                <Button variant="secondary" style={{ backgroundColor: 'white', width: '35%', border: '0.5px solid #efefef', }}>
                    <lable style={{ fontSize: 14, fontWeight: 'normal' }}>ดูเพิ่มเติม</lable>
                </Button>


            </div>

        </div >

    );
}
const styles = {
    container: {
        maxWidth: '1100px',
        backgroundColor: '#f5f5f5',
        margin: 'auto',
        paddingTop: 0,

    },


    containerTableStyle: {
        gridTemplateColumns: "repeat(5,19.2%)",
        display: "grid",
        justifyContent: 'space-between',


    },
}
export default ProductFree149;
