import React from 'react';
import mobel from '../images/mobel.png';

const styles ={
    paperContainer: {
        height: 276.63,
        width: 728.08,
        marginLeft: 0
    }
};

export default class Mobel extends React.Component {
    render() {
        return (
            <div>
                <img src={mobel} style={styles.paperContainer} alt="mobel"/>
            </div>
        )
    }
}