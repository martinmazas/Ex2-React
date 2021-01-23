import React, { useEffect, useState, input } from "react";
import "./saveDelivery.css";
import { Button } from "@material-ui/core";

const styles = {
  save: {
    width: 400,
    height: 284,
    marginLeft: 1094,
    top: 113,
    position: "absolute",
    borderRadius: 5,
  },
  input: {
    display: "block",
    marginBottom: 14,
    width: 400,
    height: 60,
    background: "#FFFFFF",
    border: "2px solid #EE4D47",
    boxSizing: "border-box",
    boxShadow: "0px 20px 40px rgba(238, 77, 71, 0.2)",
    borderRadius: 5,
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 40,
    color: "#402B2B",
  },
  saveButton: {
    width: 158,
    height: 60,
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "bold",
    background: "#EE4D47",
    fontSize: 16,
    lineHeight: 19,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.05em",
    color: "#FFFFFF",
    textTransform: "none",
    marginLeft: 115,
  },
};

const SaveDelivery = ({ addPerson, onePerson, updatePerson }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    (date !== '' && name !== '' && city !== '') ? addPerson(date, name, city): alert('Please fill all the fields');
    setDate('');
    setName('');
    setCity('');
  }


  const handleEdit = (e) => {
    console.log("handleEdit");
    let editDelivery = {"id": onePerson.id, "date": date?date:onePerson.date, "name": name?name:onePerson.name, "city": city?city:onePerson.city};
    updatePerson(editDelivery, onePerson.id);
  }

  const buttonType = () => {
    return (onePerson !== '')? <Button style={styles.saveButton} onClick={handleEdit} >
        Update
      </Button> : <Button style={styles.saveButton} onClick={handleSubmit} >
          Save
      </Button>;
  }


  return (
    <div className="save-delivery" style={styles.save}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="date" defaultValue={onePerson?onePerson.date:date} onChange={(e) => setDate(e.target.value)} style={styles.input} required/>
        <input type="text" name="name" defaultValue={onePerson?onePerson.name:name} onChange={(e) => setName(e.target.value)} style={styles.input} required/>
        <input type="text" name="city" defaultValue={onePerson?onePerson.city:city} onChange={(e) => setCity(e.target.value)} style={styles.input} required/>
        {buttonType()}
      </form>
    </div>
  )
}

export default SaveDelivery;
