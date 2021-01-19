import React from 'react';
import mask from '../images/Mask.png';
import DeliveryInfo from './deliveryInfo';
import SaveDelivery from './saveDelivery';

const styles ={
    paperContainer: {
        height: 800,
        width: 1285,
        marginLeft: 323,
        position: 'relative'
    }
};

export default class Background extends React.Component {
    render() {
        return (
            <div className='background' style={{position: 'relative'}}>
                <img src={mask} style={styles.paperContainer} alt="mask"/>
                <DeliveryInfo />
                <SaveDelivery />
            </div>
        )
    }
}