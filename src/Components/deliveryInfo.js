import React from 'react';
import './deliveryInfo.css';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    deliveries: {
        width: 550,
        height: 594,
        marginLeft: 506,
        top: 113,
        background: 'white',
        position: 'absolute'
    },
    buttons: {
        marginLeft: 58,
        width: 86,
        height: 36,
    },
    info: {
        width: 514,
        height: 38,
        marginLeft: 24,
        marginBottom: 14,
    }
}

const DeliveryInfo = ({ list, removePerson, editPerson }) => {
    return (
        <div className='deliveries-info' style={styles.deliveries}>
             <table className='person-info' style={styles.info}>
            {list.map((person, i) => {
                return (
                       
                            <tr>
                                <td style={{ width: 24 }}><h4 >{i + 1}</h4></td>
                                <td style={{ marginLeft: 13 }}><h4>{person.date}</h4></td>
                                <td><h4>{person.name}</h4></td>
                                <td><h4>{person.city}</h4></td>
                                <td style={styles.buttons} className="buttons">
                                    {/* <span  className="buttons"> */}
                                    <Fab aria-label="edit" style={{ width: 32, height: 32, background: '#ED4D47', color: '#FFFFFF' }} onClick={() => editPerson(person)}>
                                        <EditIcon />
                                    </Fab>
                                    <Fab className="deleteButton" aria-label="edit" style={{ width: 32, height: 32, marginLeft: 13, background: '#ED4D47', color: '#FFFFFF' }} onClick={() => removePerson(person.id)}>
                                        <DeleteIcon />
                                    </Fab>
                                {/* </span> */}
                                </td>
                            </tr>
                    
                )
                
            }
            )}
            </table>
        </div>
    )
}

export default DeliveryInfo;