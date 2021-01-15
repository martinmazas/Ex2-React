import React from 'react';
import mask from '../images/Mask.png';

const styles ={
    paperContainer: {
        height: 560.91,
        width: 1153.62,
        marginLeft: 260.35
    }
};

export default class Background extends React.Component {
    render() {
        return (
            <div>
                <img src={mask} style={styles.paperContainer} alt="mask"/>
            </div>
        )
    }
}