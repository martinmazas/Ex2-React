import React, {useState, useEffect, createContext } from 'react';
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

export const DeliveryContext = createContext();

const Background = () =>{
    const [persons, setPersons] = useState(personsData);

    const addPerson = (date, name, city) => {
        setPersons([...persons,{id:uuidv4(), date,name,city}]);
    }

    const removePerson = (id) => {
        setPersons(persons.filter(person => person.id !== id));
        console.log("deleteeeeed");
    }

    const editPerson = (person) => {
        console.log('hola');
    }

    useEffect(() => {console.log(persons)},[persons]);

    return(
        <DeliveryContext.Provider value={{persons, addPerson, removePerson, editPerson}}>
            <div className='background' style={{position: 'relative'}}>
                <img src={mask} style={styles.paperContainer} alt="mask"/>
                <DeliveryInfo removePerson = {removePerson} editPerson = {editPerson} list = {persons}/>
                <SaveDelivery addPerson = {addPerson} editPerson = {editPerson}/>
            </div>
        </DeliveryContext.Provider>
    )
}

export default Background;

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

