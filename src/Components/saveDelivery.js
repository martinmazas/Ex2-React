import React, {Component} from 'react';
import './saveDelivery.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const style = {
    input:{
        display: "block",
        marginBottom: 14,
    },
    marginLeft: 130
}
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
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={style.input} />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={style.input} />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={style.input} />
                    {/* <input type="date" className="form-control" id="formGroupExampleInput" name="date" /> */}
                    {/* <input type="text" className="form-control" id="formGroupExampleInput" name="name" /> */}
                    {/* <input type="text" className="form-control" id="formGroupExampleInput" name="city" /> */}
                    {/* <textarea ref={input => {this.newDelivery = input}} /> */}
                    <Button variant="contained" color="secondary" style={style}>
                        Save
                    </Button>
                    {/* <button onClick={this.save} type="button" className="btn btn-danger">Save</button> */}
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