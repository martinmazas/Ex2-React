import React from 'react';
import './deliveryInfo.css';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    deliveries: {
        width: '42.8%',
        height: '74.25%',
        left:'14.24%',
        top: '14.5%',
        background: 'white',
        position: 'absolute'
    },
    buttons: {
        width: '22.15%',
        padding: 0
    },
    info: {
        marginLeft: '4.36%',
        marginBottom: '2.36%',
        width: '93.45%',
        height:'6.4%',
    }
}

const DeliveryInfo = ({ list, removePerson, editPerson }) => {
    list.sort((a,b) => new Date(a.date) - new Date(b.date));
    return (
        <TableContainer className='deliveries-info' style={styles.deliveries}>
            <Table className='person-info' style={styles.info}>
                {list.map((person, i) => {
                    return (
                        <TableBody>
                            <TableRow>
                                <TableCell id="cell" style={{ width: '4.67%' }}><h4 >{i + 1}</h4></TableCell>
                                <TableCell id="cell" style={{ marginLeft: '2.53%' }}><h4>{person.date}</h4></TableCell>
                                <TableCell id="cell"><h4>{person.name}</h4></TableCell>
                                <TableCell id="cell"><h4>{person.city}</h4></TableCell>
                                <TableCell style={styles.buttons} className="buttons">
                                    <Fab aria-label="edit" style={{ width: 32, height: 32, background: '#ED4D47', color: '#FFFFFF' }} onClick={() => editPerson(person)}>
                                        <EditIcon />
                                    </Fab>
                                    <Fab className="deleteButton" aria-label="edit" style={{ width: 32, height: 32, marginLeft: '16.36%', background: '#ED4D47', color: '#FFFFFF' }} onClick={() => removePerson(person.id)}>
                                        <DeleteIcon />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )
                }
                )}
            </Table>
        </TableContainer>
    )
}

export default DeliveryInfo;