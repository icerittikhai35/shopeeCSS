import DataStore from '../../../dataStore';

function ProductForDay() {
    let boxStore =
        DataStore.map((item, e) => {
            console.log(item.id);
            return (
                <img src={item.Image} alt="new" width={'100%'} style={{ margin: '1%',paddingLeft:'0%' ,paddingRight:'2%'}} />
            )
        });
    return (
        <div style={styles.container}>
            <table style={{ margin: 'auto', backgroundColor:'#f5f5f5',width:'100%'}}>
                <tr >
                    <td>
                        <div style={styles.containerTableStyle}>
                            {boxStore}
                        </div>
                    </td>
                </tr>
            </table>
        </div >

    );
}
const styles = {
    container: {
        maxWidth: '1200px',
        backgroundColor: '#f5f5f5',
        margin: 'auto',
        paddingTop: 0,
      
    },


    containerTableStyle: {
        gridTemplateColumns: "repeat(5,20%)",
        display: "grid",
        justifyContent: 'space-between',

    },
}
export default ProductForDay;
