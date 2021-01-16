import React, {Component} from 'react';
import Delivery from './delivery';
import personsData from '../Data/persons.json';
import './deliveryInfo.css';
// import Background from './background';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    deliveries: {
        width: 550,
        height: 594
    },
    buttons: {
        marginLeft: 58,
        width: 86,
        height: 36
    },
    info: {
        width: 514,
        height: 38,
        marginLeft: 24
    }
}
class DeliveryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deliveries : []
        }
        this.eachDelivery = this.eachDelivery.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    
    componentDidMount() {
        personsData.map(item => this.add({id: item.id, date: item.date, name: item.name, city: item.city}));
    }

    update(newDelivery, i) {
        this.setState(prevState => ({
            deliveries: prevState.deliveries.map(
                delivery => delivery.id !== i ? delivery: {...delivery, delivery: newDelivery})
        }));
    }

    delete(id) {
        console.log('deleteId');
        this.setState(prevState => ({
            deliveries: prevState.deliveries.filter(delivery => delivery.id !== id)
        }))
    }

    add({id = null, date = null, name = null, city = null}) {
        this.setState(prevState => ({
            deliveries: [
                ...prevState.deliveries, {
                    id: id !== null ? id:this.nextId(prevState.deliveries),
                    name: name,
                    date: date,
                    city: city
                }
            ]
        }))
    }

    nextId(deliveries = []) {
        let max = deliveries.reduce
        ((prev, curr) => prev.id > curr.id ? prev.id: curr.id, 0)
        return ++max;
    }

    eachDelivery(item, i) {
        return(
            // <div  className="card">
                    <Delivery key={i} index={item.id} onChange={this.update} onDelete={this.delete}>
                        <div className='person-info'>
                            <h4>{item.id}</h4>
                            <h4 style={{marginLeft:13}}>{item.date}</h4>
                            <h4 style={{marginLeft:30}}>{item.name}</h4>
                            <h4 style={{marginLeft:30}}>{item.city}</h4>
                            <span style={styles.buttons} className="buttons">
                                <Fab color="secondary" aria-label="edit" style={{width:32, height:32}} onClick={this.edit}>
                                    <EditIcon />
                                </Fab>
                                <Fab color="secondary" aria-label="edit" style={{marginLeft:13, width:32, height:32}} onClick={this.delete}>
                                    <DeleteIcon />
                                </Fab>
                            </span>
                        </div>
                    </Delivery>
            // </div>
        )
    }

    render() {
        return(
            <div>
                <div className='deliveries-info' style={styles.deliveries}>
                    {this.state.deliveries.map(this.eachDelivery)}
                    {/* <button onClick={this.add}>Add</button> */}
                </div>
            </div>
        )
    }
}

export default DeliveryInfo;