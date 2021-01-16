import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Delivery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.renderUI = this.renderUI.bind(this);
        // this.renderForm = this.renderForm.bind(this);
        // this.save = this.save.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        })
    }

    // renderForm() {
    //     return(
    //         <div>
    //             <form>
    //                 <textarea ref={input => {this.newDelivery = input}} />
    //                 <button onClick={this.save}>Save</button>
    //             </form>
    //         </div>
    //     )
    // }

    // save(e) {
    //     e.preventDefault();

    //     this.props.onChange(this.newDelivery.value, this.props.index);

    //     this.setState({
    //         editing: false
    //     })
    // }

    delete() {
        this.props.onDelete(this.props.index);
    }

    renderUI() {
        return(
            <div className="delivery">
                <div>{this.props.children}</div>
                <span>
                    <Fab color="secondary" aria-label="edit" size="small" onClick={this.edit}>
                        <EditIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit" size="small" onClick={this.delete}>
                        <DeleteIcon />
                    </Fab>
                </span>
            </div>
            
        )
    }

    render() {
        return this.renderUI();
        // return this.state.editing ? this.renderForm() : this.renderUI();
    }
}

export default Delivery;