import React, {Component} from 'react';
import Delivery from './delivery';
import personsData from '../Data/persons.json';
import './deliveryInfo.css';
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
            <div key={i} className="card">
                <div className="card-body">
                    <Delivery index={item.id} onChange={this.update} onDelete={this.delete}>
                        <div className='person-info'>
                            <h4>{item.id}</h4>
                            <h4>{item.date}</h4>
                            <h4>{item.name}</h4>
                            <h4>{item.city}</h4>
                            {/* <p>{item.id} {item.date} {item.name} {item.city}</p> */}
                        </div>
                    </Delivery>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div>
                <div className='deliveries-info'>
                    {this.state.deliveries.map(this.eachDelivery)}
                    {/* <button onClick={this.add}>Add</button> */}
                </div>
            </div>
        )
    }
}

export default DeliveryInfo;