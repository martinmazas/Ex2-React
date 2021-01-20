import React from "react";
import "./saveDelivery.css";
import { Button } from "@material-ui/core";
// import Delivery from "./delivery";

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
//Uno mas

class SaveDelivery extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            date: "",
            name: "",
            city: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
        ...this.state,
        [event.target.name]: value,
        });
    }

// const SaveDelivery = () => {
//   const [state, setState] = React.useState({
//     date: "",
//     name: "",
//     city: "",
//   });

//   function handleChange(evt) {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value,
//     });
//   }
    render(){
  return (
    <div className="save-delivery" style={styles.save}>
      <form>
        <input
          type="text"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
          style={styles.input}
        />{" "}
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          style={styles.input}
        />{" "}
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
          style={styles.input}
        />{" "}
        <Button
          variant="contained"
          style={styles.saveButton}
          onClick={() => this.props.handler(this.state)}
        >
          Save{" "}
        </Button>{" "}
      </form>{" "}
    </div>
  );
    }
};

// class SaveDelivery extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             save: false,
//             newDelivery:
//                 {
//                     date: "",
//                     name: "",
//                     city: ""
//                 }
//             // date: '',
//             // name: '',
//             // city: ''
//         }
//         // this.newDelivery = [];
//         this.renderForm = this.renderForm.bind(this);
//         // this.save = this.save.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleAdd = this.handleAdd.bind(this);
//     }

//     handleChange({target: { value: text }}) {

//         this.setState({
//             newDelivery: text
//         })
//         // let delivery = e.target.value;
//         // const target = e.target.name;
//         // this.setState(`${target}: ${delivery}`);

//         // let json = `${target}: ${delivery}`;
//         // // console.log(json);
//         // this.setState.newDelivery = {delivery};
//     }

//     handleAdd(e) {
//         console.log(this.state.newDelivery);
//         // this.props.onSubmitDelivery(this.state.newDelivery);
//     }

//     // save(e) {
//     //     console.log(e);
//     //     e.preventDefault();

//     //     this.props.onChange(this.newDelivery.value, this.props.index);
//     //     this.setState({
//     //         save: false
//     //     })

//     // }

//     renderForm() {
//         return(
//             <div className='save-delivery' style={styles.save}>
//                 <Delivery onChange={this.save}/>
//                 <form>
//                     <input name='date' style={styles.input} onChange={this.handleChange} value={this.state.newDelivery.date} />
//                     <input name='name' style={styles.input} onChange={this.handleChange} value={this.state.newDelivery.name}/>
//                     <input name='city' style={styles.input} onChange={this.handleChange} value={this.state.newDelivery.city}/>
//                     <Button variant='contained' style={styles.saveButton} onClick={this.add}>
//                         Save
//                     </Button>
//                 </form>
//             </div>
//         )
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderForm()}
//             </div>
//         )
//     }
// }

export default SaveDelivery;
