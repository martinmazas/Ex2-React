import React from 'react';
import mobel from '../images/mobel.png';

const styles = {
    paperContainer: {
        height: '34.62%',
        width: '50.56%',
        position: 'absolute',
        left: '0%',
        right: '49.44%',
        top: '65.38%',
        bottom: '0.04%'

    }
};

const Mobel = () => {
    return <img src={mobel} style={styles.paperContainer} alt="mobel" />;
}

export default Mobel;

