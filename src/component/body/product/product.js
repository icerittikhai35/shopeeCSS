import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductForDay from './productForDay';
import ProductFree149 from './productFree149';

function Product(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            hidden={value !== index}
            id={`Product-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

Product.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `Product-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div style={styles.container}>
            <Box sx={{ width: '100%',  }}>
                <Box sx={{ borderBottom: 1, borderColor: 'white', backgroundColor: 'white', width: '96%', margin: 'auto' }}>
                    <Tabs value={value} onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{ style: { background: '#fa5130', height: 5,  } }}
                        textColor="inherit"
                        style={{ width: '96%', margin: 'auto' }}
                    >
                        <Tab label="สินค้าประจำวัน" style={{ fontSize: 14, fontWeight: 'bold', color: '#fa5130' }} {...allProps(0)} />
                        <Tab label="ส่งฟรีขั้นต่ำ 149.-" style={{ fontSize: 14, fontWeight: 'bold', color: '#fa5130' }}{...allProps(1)} />
                    </Tabs>
                </Box>
                {/* หน้าร้านค้า แก้ไขที่ store.js */}
                <Product value={value} index={0}>
                    <ProductForDay />
                </Product>


                {/* หน้าร้านค้า แก้ไขที่ review.js */}
                <Product value={value} index={1}>
                    <ProductFree149 />
                </Product>

            </Box>


        </div >
    );

}
const styles = {

    container: {
        maxWidth: '1250px',
        margin: 'auto',
        backgroundColor: '#f5f5f5',
        paddingTop: 25,
        minHeight: '100vh',
    },


  

};