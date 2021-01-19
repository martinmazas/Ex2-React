import React from 'react';
import mobel from '../images/mobel.png';

const styles ={
    paperContainer: {
        height: 394.55,
        width: 811,
        position: 'absolute'
    }
};

export default class Mobel extends React.Component {
    render() {
        return (
            <img src={mobel} style={styles.paperContainer} alt="mobel"/>
        )
    }
}