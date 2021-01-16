import React, {Component} from 'react';
import './saveDelivery.css';

class SaveDelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            save: false
        }
        this.newDelivery = "";
        this.renderForm = this.renderForm.bind(this);
        this.save = this.save.bind(this);
    }

    save(e) {
        e.preventDefault();

        this.props.onChange(this.newDelivery.value, this.props.index);
        this.setState({
            save: false
        })

    }

    renderForm() {
        return(
            <div className='save-delivery'>
                <form>
                    <input type="date" className="form-control" id="formGroupExampleInput" name="date" /><br />
                    <input type="text" className="form-control" id="formGroupExampleInput" name="name" /><br />
                    <input type="text" className="form-control" id="formGroupExampleInput" name="city" /><br />
                    {/* <textarea ref={input => {this.newDelivery = input}} /> */}
                    <button onClick={this.save} type="button" className="btn btn-danger">Save</button>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}

export default SaveDelivery;