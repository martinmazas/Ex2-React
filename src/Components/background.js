import React, {useState, useEffect} from 'react';
import mask from '../images/Mask.png';
import DeliveryInfo from './deliveryInfo';
import SaveDelivery from './saveDelivery';
import personsData from '../Data/persons.json';
import { v4 as uuidv4 } from 'uuid';

const styles ={
    paperContainer: {
        height: 800,
        width: 1285,
        marginLeft: 323,
        position: 'relative'
    }
};

const Background = () =>{
    const [persons, setPersons] = useState(personsData);

    const addPerson = (date, name, city) => {
        setPersons([...persons,{id:uuidv4(), date,name,city}]);
    }

    useEffect(() => {console.log(persons);},[persons]);

    return(
        <div className='background' style={{position: 'relative'}}>
            <img src={mask} style={styles.paperContainer} alt="mask"/>
            <DeliveryInfo addPerson = {addPerson} list = {persons}/>
            <SaveDelivery addPerson = {addPerson} />
        </div>
    )
}

// class Background extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state ={
//             list: personsData
//         }
//         this.handler = this.handler.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handler(data) {
        
//         this.setState({list: this.state.list.concat(data)});
//         console.log(this.state.list);
//     }

//     handleChange = (person) => { this.setState({list: this.state.list.concat()})}

//     render(){
//         return (
//             <div className='background' style={{position: 'relative'}}>
//                 <img src={mask} style={styles.paperContainer} alt="mask"/>
//                 <DeliveryInfo list = {this.state.list}/>
//                 <SaveDelivery handler = {this.handler}/>
//             </div>
//         )
//     }
// }

export default Background;