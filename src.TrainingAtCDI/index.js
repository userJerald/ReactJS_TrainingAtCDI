import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ORIGINAL { ...

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// ... } ORIGINAL

// TUT1 { ...

// const element = (
//     <div>
//         <h1>
//             Hello, Jerald M. de Florencia!
//         </h1>
//     </div>
// );

// ReactDOM.render(
//     element, 
//     document.getElementById('root')
// );

// ... } TUT1

// TUT2 { ...

// const fullname = 'Jerald M. de Florencia';

// const element = (
//     <div>
//         <h1>Hello, {fullname}!</h1>
//     </div>
// );

// ReactDOM.render(
//     element, 
//     document.getElementById('root')
// );

// ... } TUT2

// TUT3 { ...

// if you wish to create a function this way, then use 'let' in creation of it

// let decorateName = (user) => {
//     if (user.gender === 'Male'){ 
//         return ['Mr.', user.firstname, user.middleinitial, user.lastname].join(' ');
//     }
//     else {
//         return ['Ms.', user.firstname, user.middleinitial, user.lastname].join(' ');
//     }
// }

// const user = {
//     'firstname': 'Jerald',
//     'middleinitial': 'M.',
//     'lastname': 'de Florencia',
//     'gender': 'Male'
// };

// const element = (
//     <div>
//         {/* Using Template Strings */}
        
//         <h1>
//             Hello, {`${user.firstname} ${user.middleinitial} ${user.lastname}`}!
//         </h1>

//         {/* Using Array and .join() method */}

//         <h1>
//             Hi, {[user.firstname, user.middleinitial, user.lastname].join(' ')}!
//         </h1>

//         {/* Using Function */}

//         <h1>
//             {decorateName(user)}
//         </h1>
//     </div>
// );

// ReactDOM.render(
//     element, 
//     document.getElementById('root')
// );

// ... } TUT3

// TUT4 { ...

// const imagealt = 'IMAGE ALTERNATIVE';

// let hello = () => {
//     return <h1>Hello, Jerald M. de Florencia!</h1>;
// }

// const element = (
//     <div>
//         {/* Using function to return an HTML element */}

//         {hello()}
        
//         <h1>
            
//         </h1>
        
//         {/* Using value from a variable as an Attribute Property */}

//         <img src = 'image.png' alt = {imagealt} />
//     </div>
// );

// ReactDOM.render(
//     element, 
//     document.getElementById('root')
// );

// ... } TUT4

// TUT5 { ...

// let counter = 0;

// var count = () => {

//     counter += 1;

//     const element = (
//         <div>
//             <h1>The Philippine Population continues to increase...</h1>
//             <h1>{counter}</h1>
//         </div>
//     );

//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }

// setInterval(() => count(), 100);

// ... } TUT5

// TUT6 { ...

// var Greet = (props) => {
//     return (
//         <div>
//             <h1>Hello, {props.name}!</h1>
//             <h1>You are {props.age} years old!</h1>
//         </div>
//     );
// }

// ReactDOM.render(
//     <Greet name = 'Jerald M. de Florencia' age = '20'/>,
//     document.getElementById('root')
// );

// ... } TUT6

// TUT7 { ...

// class Greet extends React.Component {
//     render(){
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }

// ReactDOM.render(
//     <Greet name = 'Jerald M. de Florencia' />,
//     document.getElementById('root')
// );

// ... } TUT7

// TUT8 { ...

// class Greet extends React.Component {
//     render(){
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }

// const element = (
//     <div>
//             <Greet name = 'Jerald' />
//             <Greet name = 'Diether' />
//             <Greet age = '20' />
//     </div>
// );

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// ... } TUT8

// TUT9 { ...

// class World extends React.Component{
//     render(){
//         return (
//             <div>  
//                 <Greet name = 'Jerald M. de Florencia' />
//                 <Car color = 'red' />
//             </div>
//         );
//     }
// }

// class Greet extends React.Component {
//     render(){
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }

// class Car extends React.Component {
//     render(){
//         return <h1>I am a {this.props.color} car!</h1>;
//     }
// }

// ReactDOM.render(
//     <World />,
//     document.getElementById('root')
// );

// ... } TUT9

// TUT10.1 { ...

// class World extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Car quantity = '4' />
//                 <Tricycle quantity = '3' />
//             </div>
//         );
//     }
// }
    
// class Car extends React.Component {
//     render() {
//         return ( 
//             <div>{[...this.construct()]}</div>
//         );
//     }

//     construct() {
//         let msg = [];

//         for (let i = 1; i <= parseInt(this.props.quantity, 10); i++) {
//             msg.push(<h3 key = {i}>I am Car #{i}!</h3>);
//         }

//         return msg;
//     }
// }
// class Tricycle extends React.Component {
//     render() {
//         return ( 
//             <div>{[...this.construct()]}</div>
//         );
//     }

//     construct() {
//         let msg = [];

//         for (let i = 1; i <= parseInt(this.props.quantity, 10); i++) {
//             msg.push(<h3 key = {i}>I am Tricycle #{i}!</h3>);
//         }

//         return msg;
//     }
// }

// ReactDOM.render(
//     <World />,
//     document.getElementById('root')
// );

// ... } TUT10.1

// TUT10.2 { ...

// class World extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.iterate()}
//             </div>
//         );
//     }

//     iterate () {
//         let msg = [];

//         for (let i = 1; i <= parseInt(this.props.carCount, 10); i++) {
//             msg.push(<h3 key = {i}>I am Car No. {i}!</h3>);
//         }

//         for (let i = 1; i <= parseInt(this.props.tricycleCount, 10); i++) {
//             msg.push(<h3 key = {i}>I am Tricycle No. {i}!</h3>);
//         }

//         return msg;
//     }
// }

// ReactDOM.render(
//     <World carCount = '4' tricycleCount = '3' />,
//     document.getElementById('root')
// );

// ... } TUT10.2

// TUT10.3 { ...

// class World extends React.Component {
//     render() {
//         const {carCount, motorCount} = this.props;

//         let count = () => {
//             let proc = [];

//             for (let i = 1; i <= parseInt(carCount, 10); i++) {
//                 proc.push(<h1 key = {i}>I am Car No. {i}</h1>);
//             }

//             for (let i = 1; i <= parseInt(motorCount, 10); i++) {
//                 proc.push(<h1 key = {i}>I am Motor No. {i}</h1>);
//             }

//             return proc;
//         }

//         return (
//             <div>
//                 {count()}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <World carCount = '3' motorCount = '3' />,
//     document.getElementById('root')
// );

// ... } TUT10.3

// TUT10.4 { ...

// class World extends React.Component {
//     render = () => {
//         const {carCount, motorCount} = this.props;

//         let msg = [];

//         for (let i = 1; i <= carCount; i++) {
//             msg.push(<h1>I am Car No. {i}!</h1>);
//         }

//         for (let i = 1; i <= motorCount; i++) {
//             msg.push(<h1>I am Motor No. {i}!</h1>);
//         }

//         return (
//             <div>
//                 {msg}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <World carCount = {3} motorCount = {2} />,
//     document.getElementById('root')
// );

// ... } TUT10.4

// TUT11.Experiment { ...

// var Greet = (param) => {
//     return <h1>Hello, {param.name}!</h1>;
// }

// class World extends React.Component {
//     propLocal = {
//         name: 'Jerald M. de Florencia'
//     }
    
//     render = () => {
//         return (
//             <Greet name = {this.propLocal.name} />
//         );
//     }
// }

// ReactDOM.render(
//     <World />,
//     document.getElementById('root')
// );

// ... } TUT11.Experiment

// TUT12.1 { ...

// class Car extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'speed': this.props.initialSpeed,
//             'distance': 0,
//             'time': 0
//         }
//     }

//     componentDidMount = () => {
//         this.threadId = setInterval (() => this.move(), 1000);
//     }

//     componentWillUnmount = () => {
//         clearInterval(this.threadId);
//     }
    
//     move = () => {
//         this.setState({
//             'speed': this.state.speed + this.getRandomSpeed(0, 4),
//             'time': this.state.time + 1,
//             'distance': this.state.distance + Math.ceil(this.state.speed * this.state.time / 3600)
//         });
//     }   

//     getRandomSpeed = (min, max) => {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//         /*
//             Math.floor(e) -> gives you the lower value of the number you pass
//             examples:
//                 Math.floor(-0.1) = -1   * from -1 to 0, which is the lower value *
//                 Math.floor(-1.1) = -2   * from -2 to -1 *
//                 Math.floor(0.1) = 0     * from 0 to 1 *
//                 Math.floor(1.1) = 1     * from 1 to 2 *

//             Math.ceil(e)  -> gives you the higher value of the number you pass
//             examples:
//                 Math.ceil(-0.1) = 0     * from -1 to 0 *
//                 Math.ceil(0.1) = 1      * from 0 to 1 *
            
//             Math.random() -> gives you a number from 0.01 to 0.99

//             * therefore, the correct formula to return a random number ranging from min to max is...
//             Math.ceil( Math.random() * (max - min) + min ); OR
//             Math.floor( Math.random() * (max - min + 1) + min);
//         */
//     }

//     render = () => {
//         return (
//             <h1>I am a {this.props.color} car running at {this.state.speed} kph covering {this.state.distance} meters!</h1>
//         );
//     }
// }

// class World extends React.Component {
//     render = () => {
//         return (
//             <div>
//                 <Car color = 'red'  initialSpeed = {0}/>
//                 <Car color = 'blue' initialSpeed = {0} />
//             </div>
//         );
//     }
// }

// const element = <World />;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// ... } TUT12.1

// TUT12.2.Experiment { ... 

// import char0 from './CHARACTER0%.png';
// import char25 from './CHARACTER25%.png';
// import char50 from './CHARACTER50%.png';
// import char75 from './CHARACTER75%.png';
// import char100 from './CHARACTER100%.png';

// class Character extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'char1': this.props.char1,
//             'char2': this.props.char2,
//             'char1Life': this.props.char1InitialLife,
//             'char2Life': this.props.char2InitialLife,
//             'char1Img': this.props.char1InitialImg,
//             'char2Img': this.props.char2InitialImg,
//             'hitting': 'Hitting commencing...',
//             'events': [<p>> Hitting commencing... <span class = 'highlight1'>{this.props.char1}</span>: <span class = 'highlight2'>{this.props.char1InitialLife}</span>, <span class = 'highlight1'>{this.props.char2}</span>: <span class = 'highlight2'>{this.props.char2InitialLife}</span></p>]
//         }
//     }

//     componentDidMount = () => {
//         this.threadId = setInterval(() => this.hits(), 500);
//     }

//     componentWillUnmount = () => {
//         clearInterval(this.threadId);
//     }

//     hits = () => {
//         let min = 1, max = 4, damage = 0;
//         let chance = Math.floor(Math.random() * (max - min + 1) + min);

//         if (this.state.char1Life > 0 && this.state.char2Life > 0) {
//             if (chance === 1 || chance === 2) {
//                 damage = this.damage();
    
//                 this.setState({
//                     'char2Life': this.state.char2Life - damage,
//                     'hitting': `${this.state.char1} hits, ` + ((damage > 0) ? `damaging ${damage} from  ${this.state.char2}'s life` : `but missed`),
//                     'events': this.state.events.concat([<p>> <span class = 'highlight1'>{this.state.char1}</span> hits, {(damage > 0) ? <span>damaging {damage} from <span class = 'highlight2'>{this.state.char2}</span>'s life: (<span class = 'highlight1'>{this.state.char2Life}</span> - <span class = 'highlight2'>{damage}</span>)</span> : <span>but missed</span>}</p>])
//                 });
//             }
//             else if (chance === 3 || chance === 4) {
//                 damage = this.damage();
    
//                 this.setState({
//                     'char1Life': this.state.char1Life - damage,
//                     'hitting': `${this.state.char2} hits, ` + ((damage > 0) ? `damaging ${damage} from  ${this.state.char1}'s life` : `but missed`),
//                     'events': this.state.events.concat([<p>> <span class = 'highlight1'>{this.state.char2}</span> hits, {(damage > 0) ? <span>damaging {damage} from <span class = 'highlight2'>{this.state.char1}</span>'s life: (<span class = 'highlight1'>{this.state.char1Life}</span> - <span class = 'highlight2'>{damage}</span>)</span> : <span>but missed</span>}</p>])
//                 });
//             }
//         }
        
//         if (this.state.char1Life <= 0) {
//             this.setState({
//                 'char1Img': char0,
//             });
//         }
//         else if (this.state.char1Life <= 25) {
//             this.setState({
//                 'char1Img': char25,
//             });
//         }
//         else if (this.state.char1Life <= 50) {
//             this.setState({
//                 'char1Img': char50,
//             });
//         }
//         else if (this.state.char1Life <= 75) {
//             this.setState({
//                 'char1Img': char75,
//             });
//         }
//         else if (this.state.char1Life <= 100) {
//             this.setState({
//                 'char1Img': char100,
//             });
//         }

//         if (this.state.char2Life <= 0) {
//             this.setState({
//                 'char2Img': char0,
//             });
//         }
//         else if (this.state.char2Life <= 25) {
//             this.setState({
//                 'char2Img': char25,
//             });
//         }
//         else if (this.state.char2Life <= 50) {
//             this.setState({
//                 'char2Img': char50,
//             });
//         }
//         else if (this.state.char2Life <= 75) {
//             this.setState({
//                 'char2Img': char75,
//             });
//         }
//         else if (this.state.char2Life <= 100) {
//             this.setState({
//                 'char2Img': char100,
//             });
//         }

//         if (this.state.char1Life <= 0 || this.state.char2Life <= 0) {
//             this.setState({
//                 'hitting': (this.state.char1Life <= 0) ? `${this.state.char2} wins` : `${this.state.char1} wins`,
//                 'events': this.state.events.concat([<p>> {(this.state.char1Life <= 0) ? <span class = 'highlight1'>{this.state.char2}</span> : <span class = 'highlight1'>{this.state.char1}</span>} wins</p>])
//             })

//             this.componentWillUnmount();
//         }
//     }

//     damage = () => {
//         let min = 0, max = 3;
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }

//     render = () => {
//         const {char1, char2, char1Life, char2Life, hitting, events} = this.state;

//         return (
//             <div>
//                 <table>
//                     <tr>
//                         <th><img src = {this.state.char1Img} height = '100px' width = '100px' alt = {char1} /></th>
//                         <th><img src = {this.state.char2Img} height = '100px' width = '100px' alt = {char2} /></th>
//                     </tr>
//                     <tr>
//                         <td><h1>{char1}: {char1Life}%</h1></td>
//                         <td><h1>{char2}: {char2Life}%</h1></td>
//                     </tr>
//                     <tr>
//                         <td colspan = '2'><h1>{hitting}</h1></td>
//                     </tr>
//                     <tr>
//                         <td id = 'events' colspan = '2'>{events}</td>
//                     </tr>
//                 </table>
//             </div>
//         );
//     }
// }

// class World extends React.Component {
//     render = () => {
//         return (
//             <Character char1 = 'Girl1' char2 = 'Girl2' char1InitialLife = {100} char2InitialLife = {100} char1InitialImg = {char100} char2InitialImg = {char100} />
//         );
//     }
// }

// ReactDOM.render(
//     <World />,
//     document.getElementById('root')
// );

// ... } TUT12.2.Experiment

// TUT13 { ...

// const element = <button onClick = {() => alert('yeah')}>yeah</button>;

// const element = <button onClick = {() => click()}>yeah</button>;

// let click = () => {
//     alert('hey');
// }

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// ... } TUT13

// TUT13.Experiment { ...

// class World extends React.Component {
//     state = {
//         carCount : 0,
//         motorCount: 0
//     }

//     setCar = (e) => { // updates value once textbox changes
//         this.setState({
//             carCount : e.target.value,
//             motorCount: this.state.motorCount
//         });
//     }

//     setMotor = (e) => { // updates value once textbox changes
//         this.setState({
//             carCount : this.state.carCount,
//             motorCount: e.target.value
//         });
//     }

//     render = () => {
//         return (
//             <div>
//                 <label htmlFor = "">car count</label> 
//                 <input onChange =
//                     {
//                         this.setCar
//                         /* calls on function setCar(e), paramater 'e' is the input done by the user */
//                     }
//                     value =
//                     {
//                         this.state.carCount
//                         /* is responsible for the display which is set at function setCar(e),
//                            meaning the value in textbox does not change on the time user inputs value,
//                            but when the function setCar(e) is called
//                         */
//                     }
//                 />
//                 <label htmlFor = "">motor count</label> 
//                 <input onChange = {this.setMotor} value = {this.state.motorCount} />

//                 {/* this two classes/components are called everytime the above controls are invoked,
//                     passing paramter 'carCount' set at function setCar(e) */}
//                 <Car count = {this.state.carCount} />
//                 <Motor count = {this.state.motorCount} />
//             </div>
//         );
//     }
// }

// class Car extends React.Component {
//     render = () => {
//         const {count} = this.props;

//         let arr = () => {
//             let el = [];

//             for (let i = 1; i <= parseInt(count, 10); i++) {
//                 el.push(<h1>this is Car No. {i}</h1>);
//             }

//             return el;
//         }
        
//         return (
//             arr()
//         );
//     }
// }

// class Motor extends React.Component {
//     render = () => {
//         const {count} = this.props;

//         let arr = () => {
//             let el = [];

//             for (let i = 1; i <= parseInt(count, 10); i++) {
//                 el.push(<h1>this is Motor No. {i}</h1>);
//             }

//             return el;
//         }
        
//         return (
//             arr()
//         );
//     }
// }

// const element = <World />;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// ... } TUT13.Experiment

// TUT14.1 { ...

// let array = [
//     {
//         'id': 1,
//         'name': 'apple',
//         'price': 1,
//         'category': 'fruit'
//     },
//     {
//         'id': 2,
//         'name': 'banana',
//         'price': 2,
//         'category': 'fruit'
//     },
//     {
//         'id': 3,
//         'name': 'camote',
//         'price': 3,
//         'category': 'root crop'
//     },
//     {
//         'id': 4,
//         'name': 'durian',
//         'price': 4,
//         'category': 'fruit'
//     },
//     {
//         'id': 5,
//         'name': 'egg',
//         'price': 5,
//         'category': 'meat and poultry'
//     },
//     {
//         'id': 6,
//         'name': 'fish',
//         'price': 6,
//         'category': 'meat and poultry'
//     },
//     {
//         'id': 7,
//         'name': 'gulay-gulayan',
//         'price': 7,
//         'category': 'vegetable'
//     }
// ];

// class World extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'products': this.props.products,
//             'lastID': this.props.products.length + 1,
//             'cPName': '',
//             'cPPrice': 0,
//             'cPCategory': 'fruit'
//         };
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     addProduct = (e) => {
//         e.preventDefault();

//         let products = this.state.products;

//         products.push({
//             'id': this.state.lastID,
//             'name': this.state.cPName,
//             'price': this.state.cPPrice,
//             'category': this.state.cPCategory
//         });

//         this.setState({
//             'products': products,
//             'lastID': this.state.lastID + 1,
//             'cPName': '',
//             'cPPrice': 0,
//             'cPCategory': 'fruit'
//         });
//     }

//     removeProduct = (id, e) => {
//         let products = this.state.products.filter((product) => {
//             return product.id !== id;
//         })
        
//         this.setState({
//             'products': products
//         });
//     }

//     render = () => {
//         const productsInventory = this.state.products.map((product) => {
//             return (
//                 <Row key = {product.id} product = {product} removeProduct = {this.removeProduct} />
//             );
//         });

//         return (
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Price</th>
//                             <th>Category</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             productsInventory
//                         }
//                     </tbody>
//                 </table>
//                 <br />
//                 <form onSubmit = {this.addProduct}>
//                     ID: {this.state.lastID}<br /><br />
//                     Name: <input type = 'text' name = 'cPName'  value = {this.state.cPName} onChange = {this.handleChange} /><br /><br />
//                     Price: <input type = 'text' name = 'cPPrice'  value = {this.state.cPPrice} onChange = {this.handleChange} /><br /><br />
//                     Category: <select  name = 'cPCategory' value = {this.state.cPCategory} onChange = {this.handleChange}>
//                         <option value = 'fruit'>fruit</option>
//                         <option value = 'vegetable'>vegetable</option>
//                         <option value = 'meat and poultry'>meat and poultry</option>
//                     </select><br /><br />
//                     <input type = 'submit' value = 'Add' />
//                 </form>
//             </div>
//         );
//     }
// }

// class Row extends React.Component {
//     componentDidMount = () => {
//         console.log(`new product added: ${this.props.product.id}, ${this.props.product.name}, ${this.props.product.price}, ${this.props.product.category}`);
//     }

//     componentWillUnmount = () => {
//         console.log(`product removed: ${this.props.product.id}, ${this.props.product.name}, ${this.props.product.price}, ${this.props.product.category}`);
//     }

//     render = () => {
//         return (
//             <tr>
//                 <td>{this.props.product.id}</td>
//                 <td>{this.props.product.name}</td>
//                 <td>{this.props.product.price}</td>
//                 <td>{this.props.product.category}</td>
//                 <td>
//                     <button onClick = {this.props.removeProduct.bind(this, this.props.product.id)}>
//                         X
//                     </button>
//                 </td>
//             </tr>
//         );
//     }
// }

// ReactDOM.render(
//     <World products = {array} />,
//     document.getElementById('root')
// );

// ... } TUT14.1

// TUT14.2.Experiment { ...

// let array = [
//     {
//         'id': 1,
//         'name': 'apple',
//         'price': 1,
//         'category': 'fruit'
//     },
//     {
//         'id': 2,
//         'name': 'banana',
//         'price': 2,
//         'category': 'fruit'
//     },
//     {
//         'id': 3,
//         'name': 'camote',
//         'price': 3,
//         'category': 'root crop'
//     },
//     {
//         'id': 4,
//         'name': 'durian',
//         'price': 4,
//         'category': 'fruit'
//     },
//     {
//         'id': 5,
//         'name': 'egg',
//         'price': 5,
//         'category': 'meat and poultry'
//     },
//     {
//         'id': 6,
//         'name': 'fish',
//         'price': 6,
//         'category': 'meat and poultry'
//     },
//     {
//         'id': 7,
//         'name': 'gulay-gulayan',
//         'price': 7,
//         'category': 'vegetable'
//     }
// ];

// class Table extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'products': this.props.products,
//             'lastID': this.props.products.length + 1
//         };
//     }

//     addProduct = (product, e) => {
//         e.preventDefault();

//         let products = this.state.products;

//         products.push({
//             'id': product.id,
//             'name': product.name,
//             'price': product.price,
//             'category': product.category
//         });

//         this.setState({
//             'products': products
//         });
//     }

//     removeProduct = (id, e) => {
//         let products = this.state.products.filter((product) => {
//             return product.id !== id;
//         });
        
//         this.setState({
//             'products': products
//         });
//     }

//     render = () => {
//         const productsInventory = this.state.products.map((product) => {
//             return (
//                 <Row key = {product.id} product = {product} removeProduct = {this.removeProduct} />
//             );
//         });

//         return (
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Price</th>
//                             <th>Category</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             productsInventory
//                         }
//                     </tbody>
//                 </table>
//                 <br />
//                 <Form lastID = {this.state.lastID} addProduct = {this.addProduct} />
//             </div>
//         );
//     }
// }

// class Row extends React.Component {
//     componentDidMount = () => {
//         console.log(`new product added: ${this.props.product.id}, ${this.props.product.name}, ${this.props.product.price}, ${this.props.product.category}`);
//     }

//     componentWillUnmount = () => {
//         console.log(`product removed: ${this.props.product.id}, ${this.props.product.name}, ${this.props.product.price}, ${this.props.product.category}`);
//     }

//     render = () => {
//         return (
//             <tr>
//                 <td>{this.props.product.id}</td>
//                 <td>{this.props.product.name}</td>
//                 <td>{this.props.product.price}</td>
//                 <td>{this.props.product.category}</td>
//                 <td>
//                     <button onClick = {this.props.removeProduct.bind(this, this.props.product.id)}>
//                         X
//                     </button>
//                 </td>
//             </tr>
//         );
//     }
// }

// class Form extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'lastID': this.props.lastID + 1,
//             'cPName': '',
//             'cPPrice': 0,
//             'cPCategory': 'fruit'
//         };
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     reloadCP = () => {
//         this.setState({
//             'lastID': this.state.lastID + 1,
//             'cPName': '',
//             'cPPrice': 0,
//             'cPCategory': 'fruit'
//         });
//     }

//     render = () => {
//         return (
//             <form onSubmit = {
//                 this.props.addProduct.bind(this,
//                 {
//                     'id': this.state.lastID,
//                     'name': this.state.cPName,
//                     'price': this.state.cPPrice,
//                     'category': this.state.cPCategory
//                 }
//             )}>
//                 ID: {this.state.lastID}<br /><br />
//                 Name: <input type = 'text' name = 'cPName'  value = {this.state.cPName} onChange = {this.handleChange} /><br /><br />
//                 Price: <input type = 'text' name = 'cPPrice'  value = {this.state.cPPrice} onChange = {this.handleChange} /><br /><br />
//                 Category: <select  name = 'cPCategory' value = {this.state.cPCategory} onChange = {this.handleChange}>
//                     <option value = 'fruit'>fruit</option>
//                     <option value = 'vegetable'>vegetable</option>
//                     <option value = 'meat and poultry'>meat and poultry</option>
//                 </select><br /><br />
//                 <input type = 'submit' value = 'Add' onClick = {this.reloadCP} />
//             </form>
//         );
//     }
// }

// ReactDOM.render(
//     <Table products = {array} />,
//     document.getElementById('root')
// );

// ... } TUT14.2.Experiment

// TUT14.3.Experiment { ...

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'isLoggedIn': false,
//         }
//     }

//     signIn = (username, e) => {
//         e.preventDefault();

//         this.setState({
//             'isLoggedIn': true,
//             'username': username,
//         });
//     }

//     signOut = () => {
//         this.setState({
//             'isLoggedIn': false,
//         });
//     }

//     render = () => {
//         if (this.state.isLoggedIn) {
//             return (
//                 <Home username = {this.state.username} signOut = {this.signOut} />
//             );
//         }
//         else {
//             return (<SignIn signIn = {this.signIn} />);
//         }
//     }
// }

// class Home extends React.Component {
//     render = () => {
//         return (
//             <div>
//                 <h1>Welcome, {this.props.username}!</h1>
//                 <SignOut signOut = {this.props.signOut} />
//             </div>
//         );
//     }
// }

// class SignOut extends React.Component {
//     render = () => {
//         return (<button onClick = {this.props.signOut.bind(this)}>Sign Out</button>);
//     }
// }

// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'username': '',
//         }
//     }
    
//     handleChange = (username, e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });

//         console.log(username);
//     }

//     render = () => {
//         return (
//             <form onSubmit = {this.props.signIn.bind(this, this.state.username)}>
//                 <input type ='text' name = 'username' onChange = {this.handleChange.bind(this, this.state.username)}/><br />
//                 <input type = 'password' name = 'password' /><br />
//                 <input type = 'submit' value = 'Sign In' />
//             </form>
//         );
//     }
// }

// ReactDOM.render(
//     <App isLoggedIn = {false} />,
//     document.getElementById('root')
// );

// ... } TUT14.3.Experiment

// TUT14.4.Experiment { ...

// const array = [
//     {
//         'id': 1,
//         'code': 'PHI',
//         'name': 'Philippines'
//     },
//     {
//         'id': 2,
//         'code': 'JPN',
//         'name': 'Japan'
//     },
//     {
//         'id': 3,
//         'code': 'RU',
//         'name': 'Russia'
//     },
//     {
//         'id': 4,
//         'code': 'SK',
//         'name': 'South Korea'
//     }
// ];

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'countries': this.props.countries,
//             'lastID': this.props.countries.length,
//             'country': {
//                 'id': null,
//                 'code': '',
//                 'name': ''
//             }
//         }

//         this.addRow = this.addRow.bind(this);
//         this.updateRow = this.updateRow.bind(this);
//         this.deleteRow = this.deleteRow.bind(this);
//         this.cancelAction = this.cancelAction.bind(this);
//         this.fillForm = this.fillForm.bind(this);
//     }

//     addRow(item) {
//         const countries = this.state.countries;
//         countries.push(item);

//         this.setState({
//             'countries': countries,
//             'lastID': item.id,
//             'country': {
//                 'code': '',
//                 'name': ''
//             }
//         });

//         this.textInput.focus();
//     }

//     updateRow(item) {
//         console.log('set', item.id, item.code, item.name);

//         const countries = this.state.countries.filter((country) => country.id !== item.id);
//         countries.push(item);

//         this.setState({
//             'countries': countries,
//             'country': {
//                 'code': '',
//                 'name': ''
//             }
//         });
//     }

//     deleteRow(item) {
//         const countries = this.state.countries.filter((country) => country.id !== item.id);

//         this.setState({
//             'countries': countries,
//             'country': {
//                 'code': '',
//                 'name': ''
//             }
//         });
//     }

//     cancelAction(e) {
//         this.setState({
//             'country': {
//                 'code': '',
//                 'name': ''
//             }
//         })
//     }

//     fillForm(item) {
//         this.setState({
//             'country': item
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Table countries = {this.state.countries} fillForm = {this.fillForm} deleteRow = {this.deleteRow} />
//                 <Form focus = {(input) => this.textInput = input} lastID = {this.state.lastID} addRow = {this.addRow} updateRow = {this.updateRow} cancelAction = {this.cancelAction} country = {this.state.country} />
//             </div>
//         );
//     }
// }

// class Table extends React.Component {
//     render() {
//         const rows = this.props.countries.map((country) => <Row key = {country.id} country = {country} fillForm = {this.props.fillForm} deleteRow = {this.props.deleteRow} />)

//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Code</th>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         rows
//                     }
//                 </tbody>
//             </table>
//         );
//     }
// }

// class Row extends React.Component {
//     componentDidMount() {
//         console.log('in', this.props.country.id, this.props.country.code, this.props.country.name);
//     }

//     componentWillUnmount() {
//         console.log('out', this.props.country.id, this.props.country.code, this.props.country.name);
//     }

//     render() {
//         return (
//             <tr>
//                 <td>{this.props.country.code}</td>
//                 <td>{this.props.country.name}</td>
//                 <td><button onClick = {this.props.fillForm.bind(this, this.props.country)}>Update</button></td>
//                 <td><button onClick = {this.props.deleteRow.bind(this, this.props.country)}>Delete</button></td>
//             </tr>
//         );
//     }
// }

// class Form extends React.Component {
//     constructor(props) {
//         super(props);

//         this.handleChange = this.handleChange.bind(this);
//         this.submit = this.submit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             'country': {
//                 [e.target.name]: e.target.value }
//         });

//        this.props.country[e.target.name] = e.target.value;
//     }

//     submit(e) {
//         e.preventDefault();

//         if (this.props.country.id) {
//             this.props.updateRow(this.props.country);
//         }
//         else {
//             this.props.addRow({
//                 'id': this.props.lastID + 1,
//                 'code': this.props.country.code,
//                 'name': this.props.country.name
//             });
//         }
//     }

//     render() {
//         return (
//             <form onSubmit = {this.submit}>
//                 <input type = 'text' name = 'code' value = {this.props.country.code} onChange = {this.handleChange} ref = {this.props.focus.bind(this)} />
//                 <input type = 'text' name = 'name' value = {this.props.country.name} onChange = {this.handleChange} />
//                 <input type = 'submit' value = {this.props.country.id ? 'Save' : 'Add'} />
//                 {this.props.country.id ? <button onClick = {this.props.cancelAction.bind(this)}>Cancel</button>: ''}
//             </form>
//         );
//     }
// }

// ReactDOM.render(
//     <App countries = {array} />,
//     document.getElementById('root')
// );

// ... } TUT14.4.Experiment

// TUT14.5.Experiment { ...

// const users = [
//     {
//         'userid': 'USER-0001',
//         'userrole': 'Administrator',
//         'username': 'userMama',
//         'password': 'passMama',
//         'education': ['Grade School', 'High School']
//     },
//     {
//         'userid': 'USER-0002',
//         'userrole': 'Administrator',
//         'username': 'userJerald',
//         'password': 'passJerald',
//         'education': ['Grade School', 'High School', 'College']
//     },
//     {
//         'userid': 'USER-0003',
//         'userrole': 'Administrator',
//         'username': 'userDianneRose',
//         'password': 'passDianneRose',
//         'education': ['Grade School']
//     },
//     {
//         'userid': 'USER-0004',
//         'userrole': 'Administrator',
//         'username': 'userMaimai',
//         'password': 'passMaimai',
//         'education': []
//     }
// ]

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'IsSignedIn': false,
//             'txtUN': ''
//         }
//     }

//     signInorOut = ({io, txtUN = ''}, e) => {
//         e.preventDefault();

//         this.setState({
//             'IsSignedIn': io,
//             'txtUN': txtUN
//         });
//     }

//     render = () => {
//         if (this.state.IsSignedIn === true) {
//             return <Home signInorOut = {this.signInorOut} txtUN = {this.state.txtUN} />;
//         }
//         else {
//             return <SignIn signInorOut = {this.signInorOut} />;
//         }
//     }
// }

// class Home extends React.Component {
//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         'value': this.props.value
//     //     }
//     // }

//     // handleChange = (e) => {
//     //     this.setState({
//     //         [e.target.name]: e.target.value
//     //     });
//     // }

//     render = () =>{
//         return (
//             <div>
//                 <h1>Welcome, {this.props.txtUN}!</h1>
//                 <button onClick = {this.props.signInorOut.bind(this, false)}>Sign Out</button>
//             </div>
//         );
//     }    
// }

// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'txtUN': '',
//             'txtPW': ''
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     render = () => {
//         return (
//             <form onSubmit = {this.props.signInorOut.bind(this, true, this.state.txtUN)}>
//                 Username: <input type = 'text' name = 'txtUN' value = {this.state.txtUN} onChange = {this.handleChange} /><br />
//                 Password: <input type = 'text' name = 'txtPW' value = {this.state.txtPW} onChange = {this.handleChange} /><br />
//                 <input type = 'submit' value = 'Sign In' />
//             </form>
//         );
//     }
// }

// // class SignUp extends React.Component {
    
// // }

// ReactDOM.render(
//     <App usersCurrent = {users} />,
//     document.getElementById('root')
// );

// ... } TUT14.5.Experiment

// TUT15 { ...

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'countries': [],
//             'country': {
//                 'id': null,
//                 'code': '',
//                 'name': ''
//             }
//         };

//         this.addRow = this.addRow.bind(this);
//         this.updateRow = this.updateRow.bind(this);
//         this.deleteRow = this.deleteRow.bind(this);
//         this.fillForm = this.fillForm.bind(this);
//         this.cancelAction = this.cancelAction.bind(this);
//     }

//     componentDidMount() {
//         fetch('http://test.codedisruptors.com:3000/v1/lookups/countries', {
//             'method': 'GET'
//         })
//         .then(res => res.json())
//         .then((response) => {
//             this.setState({
//                 'countries': response.countries
//             });
//         });
//     }

//     addRow(item) {
//         fetch('http://test.codedisruptors.com:3000/v1/lookups/countries', {
//             'method': 'POST',
//             'headers': {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             'body': JSON.stringify({
//                 'code': item.code,
//                 'name': item.name
//             })
//         })
//         .then(res => res.json())
//         .then((response) => {
//             const countries = this.state.countries;
//             countries.push(response.country);
//             this.setState({
//                 'countries': countries,
//                 'country': {
//                     'code': '',
//                     'name': ''
//                 }
//             });
//         });
//     }

//     updateRow(item) {
//         console.log('set', item.id, item.code, item.name);

//         fetch('http://test.codedisruptors.com:3000/v1/lookups/countries/' + item.id, {
//             'method': 'PUT',
//             'headers': {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             'body': JSON.stringify({
//                 'code': item.code,
//                 'name': item.name
//             })
//         })
//         .then(res => res.json())
//         .then((response) => {
//             const countries = this.state.countries.filter((country) => country.id !== item.id);
//             countries.push(response.country);
//             this.setState({
//                 'countries': countries,
//                 'country': {
//                     'code': '',
//                     'name': ''
//                 }
//             });
//         });
//     }

//     deleteRow(item) {
//         fetch('http://test.codedisruptors.com:3000/v1/lookups/countries/' + item.id, {
//             'method': 'DELETE',
//         })
//         .then(res => res.json())
//         .then((response) => {
//             const countries = this.state.countries.filter((country) => country.id !== item.id);
//             this.setState({
//                 'countries': countries,
//                 'country': {
//                     'code': '',
//                     'name': ''
//                 }
//             });
//         });
//     }

//     fillForm(item) {
//         this.setState({
//             'country': item
//         });
//     }

//     cancelAction(e) {
//         this.setState({
//             'country': {
//                 'code': '',
//                 'name': ''
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Table countries = {this.state.countries} fillForm = {this.fillForm} deleteRow = {this.deleteRow} />
//                 <Form addRow = {this.addRow} updateRow = {this.updateRow} cancelAction = {this.cancelAction} country = {this.state.country} />
//             </div>
//         );
//     }
// }

// class Table extends React.Component {
//     render() {
//         const rows = this.props.countries.map((country) => <Row key = {country.id} country = {country} fillForm = {this.props.fillForm} deleteRow = {this.props.deleteRow} />);

//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Code</th>
//                         <th>Countries</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         rows
//                     }
//                 </tbody>
//             </table>
//         );
//     }
// }

// class Row extends React.Component {
//     componentDidMount() {
//         console.log('in', this.props.country.id, this.props.country.code, this.props.country.name);
//     }

//     componentWillUnmount() {
//         console.log('out', this.props.country.id, this.props.country.code, this.props.country.name);
//     }

//     render() {
//         return (
//             <tr>
//                 <td>{this.props.country.code}</td>
//                 <td>{this.props.country.name}</td>
//                 <td><button onClick = {this.props.fillForm.bind(this, this.props.country)}>Update</button></td>
//                 <td><button onClick = {this.props.deleteRow.bind(this, this.props.country)}>Delete</button></td>
//             </tr>
//         );
//     }
// }

// class Form extends React.Component {
//     constructor(props) {
//         super(props);

//         this.handleChange = this.handleChange.bind(this);
//         this.submit = this.submit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             'country': {
//                 [e.target.name]: e.target.value }
//         });

//         this.props.country[e.target.name] = e.target.value;
//     }

//     submit(e) {
//         e.preventDefault();

//         if (this.props.country.id) {
//             this.props.updateRow(this.props.country);
//         }
//         else {
//             this.props.addRow(this.props.country);
//         }
//     }

//     render() {
//         return (
//             <form onSubmit = {this.submit}>
//                 <input type  = 'text' name = 'code'  value = {this.props.country.code} onChange = {this.handleChange} />
//                 <input type  = 'text' name = 'name' value = {this.props.country.name} onChange = {this.handleChange} />
//                 <input type  = 'submit' value = {this.props.country.id ? 'Save' : 'Add'} />
//                 {this.props.country.id ? <button onClick = {this.props.cancelAction.bind(this)}>Cancel</button> : ''}
//             </form>
//         );
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// ... } TUT15

// TUT16 { ...

import AuthExample from './router';

ReactDOM.render(
    <AuthExample />,
    document.getElementById('root')
);

// ... } TUT16

// TUT* { ...

// >>> WHAT TO KNOW <<<

/*

--- MADE-UP CONCEPTS ---

* ReactDOM (imported to function as DOM Tree)
* DOM Tree >>> is used to model the entire HTML Document which consists of HTML Element like head, body, and other children tags like paragraph, heading1, etc.
* class Table extends React.Component { ... } >>> a Class or Function can be used as a Component but must have an Uppercase First Letter or else once called as an Instance, may be treated by the React as an HTML Tag; told by my classmates, it is called as the Blueprint.
* Instance >>> once a Component (Class or Function) is called on, that is called as an Instance. Instance may have or may have no argument >>> ex. *ReactDOM.render(<ComponentName paramName = paramValue />);* <<<.
* constructor(props) { ... } >>> not a Regular Function, this is where variables, objects, etc. are declared or created or stated.
* super(props); >>> ???

* this.state = { 'product': this.props.product } >>> proper way of declaring new variables, objects, etc.
* bind() >>> this method is used if the function will make use of keyword 'this' >>> ex.1. *this.props.FunctionOfOtherClass.bind(this, ...Arguments);* ex.2. *this.Function = this.Function.bind(this);* <<<
* render() >>> the only Function, a Component must atleast have.
* this.setState({ 'product': product }) >>> proper way of updating Values to re-render the whole Component and set the New Value to the variable and/or object in the State properties; must be inside a Function that functions as an Event Handler of some Event
* componentDidMount() and componentWillUnmount() >>> are Life-Cycle Hooks, so once created in a Class or Component Extending React.Component, it will be called on automatically based upon situation.
* componentDidMount() >>> allocates memory (ram/cpu) and is called by React automatically once exists.
* componentWillunmount() >>> free ups memory (ram/cpu) by erasing something (an Element or an Object).
* onClick >>> an Event.
* Function >>> if is used to handle an Event, then is called Event Handler.
* onClick = {***() => AnyEventHandlerFunction()***}; >>> an Anonymous Function that returns a Function; similar to just stating the Function alone >>> ex. *onClick = {***this.AnyEventHandlerFunction***};* <<<
* Anonymous Function >>> is also used in map(), filter(), and reduce() method; setInterval() function must also accept an Anonymous Function >>> ex. *setInterval(***() => AnyEventHandlerFunction()***, 1000);*
* key >>> is used to make Every Child Element of any Parent Element Unique.
* e.preventDefault() >>> this is method used to prevent the Default Function of a Control, for example, the Submit Button once clicked, will carry you to another Page.
* props (in a Component or Class Extension of a React Component) >>> cant be changed or updated because of its read-only property.
* props >>> can be used for receiving Value like what a Parameter or an Argument Variable does in a Function.
* state >>> is an Internally-Maintained Set of Properties, which can accept Value from props of a Class and can be changed easily as you please, which is the best solution for the problems encountered with props.

*/

/*

--- MADE-UP THINGS ---

*** TIPS ***

* Auto-focus, Auto-clear value of Controls.
* Separate Components like App, Table, Form.
* Index should not be used since Elements may rearrange, instead assign an ID to every Element.
* key is only used if there is a set of sibling Elements.
* Instance of a Component is also called an Element.
* so even though, the set of Elements is to iterate using a function or method, it also means you will be making a set of sibling Elements or multiple Elements having the same Parent and the same Element Tag Attributes, there is where key must be asigned not every time.
* if only to render or to perform some process just use function not class.
* to sum up the ideas, class and function are just alike in terms of functions, only class holds some more than of the function.
* dumb component - dependent component to independent component which is also called smart component or mother component to the child component
* think of all things you were taught of.

*** HOW TO USE ***

* Math.floor(), Math.ceil(), Math.random()
* how to make a function returning random things... written at TUT12.1
* how to use props, state, props or state as an argument to an instance, function as argument to an instance, there is where bind() method is used
* how to assign an event handler to a control that fires an event
* how to import js, png, css file
* how to do in-line styling
* how to shorten props, state in a Component
* syntax: map(), forEach(), filter(), reduce()
* syntax: threading in life-cycle hooks
* syntax: other things you were taught of

*** RESEARCH ***

* himayhimayin yung mga ikinode, bigyan ng meaning at alamin ang usage at other thing na ginamit ni sir
* lahat ng concept na ibinigay o ipinorovide, tingnan kung tama...
* dom
* inheritance, component, element, argument
* REACT, JSX, CSS, BOOTHSTRAP
* imperative coding - not useful here
* declarative coding - instead this
* bind means??? kapag magpapasa ng value

*/

// ... } TUT*

// single source of truth, source of resources or list items or data
// json, javascript, ecma, jsx, npm, yarn, node, cdi, html, css ???
//. chaining
// available

// client-server architecture
// client >>> an application , initiates request >>> the browser (client)
// server >>> directs the action sent by the user to the database, facilitates the request and then sent to the database
// web server - made up of node web service, the application runs on a machine as a server.
// url - is a unique thing used to access a resource

// http:// >>> skin or ***protocol*** , uses hypertext protocol, language used by the client to communicate with the server
// someuser:sercret >>> authentication, username:password, is direted by the app sometimes so obsolete
// @domain.com >>> ip address, which server you are going to communicate with...
// :80 >>> port, :80 >>> default, so if no port is displayed, then the port used is 80, if port 80 no need to specify or can be ommited
// ***/*** >>> root of an application; */maps.html* or if it is inside a directory then */public/maps.html >>> route directly to the resource

//?date=2018-06-18 >>> query; starts with ?, and can be sent as multiple queries inserting & in between each query; query is made up key and value
//?date=2018-06-18&region=asia ; keys(date, region); values (2018-..., asia)
// #seas >>> called fragment; part where the thing takes place only; which you are only insterested; only the seas in the map resource

// fragment and query are optional
// maps.html >>> the name of the resource

// once request is sent to the webserver a pair of url and a http request (post, etc.)


// request sent to server / http's term >>> post, get, put, delete
// lehman's term >>> create, retrieve, update, delete
// (...) <=> (insert, select, update, delete)

//app, table, row, form
// http request / response consist of both header (describes the body) and body (describes what to pass to the server / describes what to get from the server)