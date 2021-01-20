import React from 'react';
import mask from '../images/Mask.png';
import DeliveryInfo from './deliveryInfo';
import SaveDelivery from './saveDelivery';
import personsData from '../Data/persons.json';

const styles ={
    paperContainer: {
        height: 800,
        width: 1285,
        marginLeft: 323,
        position: 'relative'
    }
};

class Background extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            list: personsData
        }
        this.handler = this.handler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handler(data) {
        
        this.setState({list: this.state.list.concat(data)});
        console.log(this.state.list);
    }

    handleChange = (person) => { this.setState({list: this.state.list.concat()})}

    render(){
        return (
            <div className='background' style={{position: 'relative'}}>
                <img src={mask} style={styles.paperContainer} alt="mask"/>
                <DeliveryInfo list = {this.state.list}/>
                <SaveDelivery handler = {this.handler}/>
            </div>
        )
    }
}

export default Background;