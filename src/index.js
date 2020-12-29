import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';

// class WhoAmI extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             age: 21
//         }
//     }

//     newAge = () => {
//         this.setState(state => ({
//            age: ++state.age
//         }))
//     }

//     render() {
//         const {name, surname} = this.props;
//         return (
//             <div>
//                 <h2>My name is {name}, surname - {surname}, age - {this.state.age}</h2>
//                 <button onClick={this.newAge} >+</button>
//             </div>

//         )
//     }
// }

// const All = () => {
//     return (
//         <div>
//         <WhoAmI name="Ivan" surname="Petr"/>
//         <WhoAmI name="John" surname="Smith"/>
//         <WhoAmI name="Oleg" surname="Syhyda"/>
//         </div>
//     )
// }


ReactDOM.render( <App/> , document.getElementById('root'));