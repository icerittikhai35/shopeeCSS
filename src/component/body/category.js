import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NextImg from '../../img/next.png'

function Catagory() {
    return (
        <div style={styles.container}>
            <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                showArrows={true}
                renderArrowNext={(clickHandler, hasPrev,) =>
                    hasPrev && (
                        <button onClick={clickHandler} style={{ borderRadius: 50, width: '60px', height: '60px' }}>
                            <img
                                style={{ height: "30px", width: "30px", }}
                                src={NextImg} />
                        </button>
                    )
                }
                style={{ zIndex: '-1' }}

            >
                <div style={styles.container}>
                    <img src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" />
                </div>
                <div style={styles.container}>
                    <img src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" />
                </div>
                <div style={styles.container}>
                    <img src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" />
                </div>
            </Carousel>
        </div>
    );
}
const styles = {
    container: {
        maxWidth: '1100px',
        backgroundColor: 'white',
        margin: 'auto',
        marginTop: 20,
        boxShadow: '0px 0px 0px #000000',
        minHeight: '540px',

    },
    containerBox: {
        maxWidth: '1200px',
        margin: 'auto',
    },
    showBullets: {
        color: 'red'
    },
}
export default Catagory;

