import React, { useState } from 'react';
import mask from '../images/Mask.png';
import DeliveryInfo from './deliveryInfo';
import SaveDelivery from './saveDelivery';
import personsData from '../Data/persons.json';
import { v4 as uuidv4 } from 'uuid';
import './background.css';

const styles = {
    paperContainer: {
        left: '20.14%',
        width: '80.11%',
        height: '70.11%',
        position: 'absolute',
        top: -3,
    }
};

const Background = () => {
    const [persons, setPersons] = useState(personsData);
    const [onePerson, setOnePerson] = useState('');

    const addPerson = (date, name, city) => {
        setPersons([...persons, { id: uuidv4(), date, name, city }]);
        console.log(persons);
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
        <div style={styles.paperContainer}>
            <img id='background' src={mask} alt="mask" />
            <DeliveryInfo removePerson={removePerson} editPerson={editPerson} list={persons} />
            <SaveDelivery addPerson={addPerson} onePerson={onePerson} updatePerson={updatePerson} />
        </div>
    )
}

export default Background;