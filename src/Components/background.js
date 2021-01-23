import React, { useState } from 'react';
import mask from '../images/Mask.png';
import DeliveryInfo from './deliveryInfo';
import SaveDelivery from './saveDelivery';
import personsData from '../Data/persons.json';
import { v4 as uuidv4 } from 'uuid';

const styles = {
    paperContainer: {
        height: 800,
        width: 1285,
        marginLeft: 323,
        position: 'relative'
    }
};

const Background = () => {
    const [persons, setPersons] = useState(personsData);
    const [onePerson, setOnePerson] = useState('');

    const addPerson = (date, name, city) => {
        setPersons([...persons, { id: uuidv4(), date, name, city }]);
    }

    const removePerson = (id) => {
        setPersons(persons.filter(person => person.id !== id));
    }

    const editPerson = (person) => {
        setOnePerson({id:person.id, date:person.date, name: person.name, city: person.city});
    }

    const updatePerson = (person, id) => {
        setPersons(persons.map(p => p.id !== id ? p: person));
        setOnePerson('');
    }

    return (
        <div className='background' style={{ position: 'relative'}}>
            <img id='background' src={mask} style={styles.paperContainer} alt="mask" />
            <DeliveryInfo removePerson={removePerson} editPerson={editPerson} list={persons} />
            <SaveDelivery addPerson={addPerson} onePerson={onePerson} updatePerson={updatePerson} />   
        </div>
    )
}

export default Background;