import React, {Component} from 'react';

const styles = {
    info: {
        // width: 514,
        // height: 38,
        // marginLeft: 138,
        // marginBottom: 14,
    }
}

class Delivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.delete = this.delete.bind(this);
        // this.edit = this.edit.bind(this);
        
        // this.renderUI = this.renderUI.bind(this);
        // this.renderForm = this.renderForm.bind(this);
        // this.save = this.save.bind(this);
    }

    // edit() {
    //     this.setState({
    //         editing: true
    //     })
    // }

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
    //     console.log(e);
    //     e.preventDefault();

    //     // this.props.onChange(this.newDelivery.value, this.props.index);

    //     // this.setState({
    //     //     editing: false
    //     // })
    // }

    delete() {
        this.props.onDelete(this.props.index);
    }

    // renderUI() {
    //     return(
    //         <div className="delivery" style={styles.info}>
    //             {this.props.children}                
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="delivery" style={styles.info}>
                {this.props.children}                
            </div>
        )
    }
}

export default Delivery;