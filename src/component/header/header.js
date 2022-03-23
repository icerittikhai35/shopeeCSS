import React from 'react';
import TopHeader from './TopHeader'
import SearchHeader from './searchHeader'



const Header = () => {
    return (
        <div style={styles.container}>
            <nav className="navbar fixed-top "  >
                <TopHeader />
                <SearchHeader />
            </nav>

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


}

export default Header;