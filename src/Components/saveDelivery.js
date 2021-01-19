import React, {Component} from 'react';
import './saveDelivery.css';
import {Button, TextareaAutosize} from '@material-ui/core';

const styles = {
    save: {
        width: 400,
        height: 284,
        marginLeft: 1094,
        top: 113,
        position: 'absolute',
        borderRadius: 5,
    },
    input:{
        display: "block",
        marginBottom: 14,
        width: 400,
        height: 60,
        background: '#FFFFFF',
        border: '2px solid #EE4D47',
        boxSizing: 'border-box',
        boxShadow: '0px 20px 40px rgba(238, 77, 71, 0.2)',
        borderRadius: 5,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
  
        color: '#402B2B',
    },
    saveButton: {
        width: 158,
        height:60,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'bold',
        background: '#EE4D47',
        fontSize: 16,
        lineHeight: 19,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.05em',
        color: '#FFFFFF',
        textTransform: 'none',
        marginLeft: 115,
    }
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
            <div className='save-delivery' style={styles.save}>
                <form>
                    <TextareaAutosize name="date" style={styles.input} placeholder='test' />
                    <TextareaAutosize name="name" style={styles.input}/>
                    <TextareaAutosize name="city" style={styles.input}/>
                    {/* <textarea ref={input => {this.newDelivery = input}} /> */}
                    <Button style={styles.saveButton} onClick={this.save}>
                        Save
                    </Button>
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