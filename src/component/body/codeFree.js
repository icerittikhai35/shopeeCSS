
function codeFree() {
    return (
        <div style={styles.container}>
            <div style={{ margin: 'auto', }}>
                <img src='https://cf.shopee.co.th/file/e3845042e63d9ca06faf6cb09c177fab' alt="" width={'1200px'}  />
            </div>


        </div >

    );
}
const styles = {
    container: {
        maxWidth: '1200px',
        backgroundColor: 'red',
        margin: 'auto',
        marginTop: 20,
        boxShadow: '0px 0px 0px #000000',
 
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
export default codeFree;
