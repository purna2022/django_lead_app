import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
//Iterating through Lists in React
//----------------------------

// function Employee(props) {
//     return (
//         <div style={{ border: '3px solid red' }}>
//             <p>
//                 <lebel>Employee Id: <b>{props.data.Id}</b></lebel>
//             </p>
//             <p>
//                 <lebel>Employee Name: <b>{props.data.Name}</b></lebel>
//             </p>
//             <p>
//                 <lebel>Employee Location: <b>{props.data.Loacation}</b></lebel>
//             </p>
//             <p>
//                 <lebel>Employee Salary: <b>{props.data.Salary}</b></lebel>
//             </p>

//         </div>
//     )
// }
// function DisplayEMployees(props) {
//     const empList = props.employeeList;

//     const listElements = empList.map((emp) =>
//         <Employee key={emp.Id} data={emp} ></Employee>
//     );
//     return (
//         <div>
//             {listElements}
//         </div>
//     )
// }
// const employees = [
//     { Id: 101, Name: 'Purna', Location: 'Bengaluru', Salary: 50000 },
//     { Id: 102, Name: 'Priya', Location: 'Bengaluru', Salary: 60000 },
//     { Id: 103, Name: 'Dipak', Location: 'BBSR', Salary: 10000 },
// ];

// const element = <DisplayEMployees employeeList={employees}></DisplayEMployees>;
// ReactDOM.render(element, document.getElementById('root'));
//Interaction between React Components
//-----------------------------------

const EmployeeContext = React.createContext({
    data: '',
    changeEmployeeInfo: () => { }
});
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                Id: '100',
                Name: 'Priya',
                Location: 'Bengaluru',
                Salary: 15000
            },
            changeEmployeeInfo: this.updateEmployeeDetails

        };
    }
    updateEmployeeDetails = () => {
        this.setState({ data: { Id: 102 } });
    }
    render() {
        return (
            <div>
                <h3>App components ...</h3>

                <p>
                    <lebel>Employee ID: {this.state.data.Id}</lebel>
                </p>
                <EmployeeContext.Provider value={this.state}>
                    <Employee></Employee>
                </EmployeeContext.Provider>


            </div>
        )
    }
}

class Employee extends React.Component {
    static contextType = EmployeeContext;
    render() {
        return (
            <div>
                <h3>Employee components ...</h3>
                <p>
                    <lebel>EMploee ID:<b>{this.context.data.Id}</b></lebel>
                </p>
                <p>
                    <button onClick={this.context.changeEmployeeInfo}>Update</button>
                </p>
            </div>
        )
    }
}

const element = <App></App>;
ReactDOM.render(element, document.getElementById('root'));
//-----------------------------------------------
//React component communication using context
//------------------------------------------------

//2nd 

// const employeeContext = React.createContext();
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Id: '100',
//       Name: 'Priya',
//       Location: 'Bengaluru',
//       Salary: 15000
//     };
//   }

//   changeEMployeeData = () => {
//     this.setState({ Id: 1000 })
//   }
//   render() {
//     return (
//       <div>
//         <h3>App components ...</h3>

//         <p>
//           <lebel>Employee ID: {this.state.Id}</lebel>
//         </p>
//         <employeeContext.Provider value={this.state}>
//           <Employee></Employee>
//         </employeeContext.Provider>
//         <p>
//           <button onClick={this.changeEMployeeData}>Update</button>
//         </p>

//       </div>
//     )
//   }
// }

// class Employee extends React.Component {
//   static contextType = employeeContext;
//   render() {
//     return (
//       <div>
//         <h3>Employee components ...</h3>
//         <p>
//           <lebel>Employee ID:{this.context.Id}</lebel>
//         </p>
//         <Salary></Salary>
//       </div>
//     )
//   }
// }


// class Salary extends React.Component {
//   static contextType = employeeContext;
//   render() {
//     return (
//       <div>
//         <h3>Salary components ...</h3>
//         <p>
//           <lebel>Employee ID:{this.context.Id}</lebel>
//         </p>
//       </div>
//     )
//   }
// }


// const element = <App></App>;
// ReactDOM.render(element, document.getElementById('root'));
//1st example
// const employeeContext = React.createContext();
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Id: '100',
//       Name: 'Priya',
//       Location: 'Bengaluru',
//       Salary: 15000
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h3>App components ...</h3>

//         <p>
//           <lebel>Employee ID: {this.state.Id}</lebel>
//         </p>
//         <employeeContext.Provider value={this.state}>
//           <Employee></Employee>
//         </employeeContext.Provider>
//       </div>
//     )
//   }
// }

// class Employee extends React.Component {
//   static contextType = employeeContext; //child context should be accessable via static contextType= employeeContext
//   render() {
//     return (
//       <div>
//         <h3>Employee components ...</h3>
//         <p>
//           <lebel>Employee ID:{this.context.Id}</lebel>
//         </p>
//         <Salary></Salary>
//       </div>
//     )
//   }
// }


// class Salary extends React.Component {
//   static contextType = employeeContext;
//   render() {
//     return (
//       <div>
//         <h3>Salary components ...</h3>
//         <p>
//           <lebel>Employee ID:{this.context.Id}</lebel>
//         </p>
//       </div>
//     )
//   }
// }


// const element = <App></App>;
// ReactDOM.render(element, document.getElementById('root'));
//------------------------------------
//inter action between react components

// class Employee extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       updatedSalary: null
//     };
//   }
//   getUpdatedSalary = (salary) => {
//     this.setState({ updatedSalary: salary })
//   }
//   render() {
//     return (
//       <div>
//         <h2> Employee Details..</h2>
//         <p>
//           <lebel>Employee Id :<b>{this.props.ID}</b></lebel>
//         </p>
//         <p>
//           <lebel>Employee Name :<b>{this.props.Name}</b></lebel>
//         </p>
//         <p>
//           <lebel>Employee Loc :<b>{this.props.Loc}</b></lebel>
//         </p>
//         <p>
//           <lebel>Total Salary :<b>{this.props.salary}</b></lebel>
//         </p>
//         <p>
//           <lebel>Updated Total Salary :<b>{this.state.updatedSalary}</b></lebel>
//         </p>
//         <Salary BasicSal={this.props.BasicSal}
//           HRA={this.props.HRA}
//           OtherAllowance={this.props.OtherAllowance} onSalaryChanged={
//             this.getUpdatedSalary
//           }></Salary>
//       </div>
//     )
//   }

// }

// class Salary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       basic: this.props.BasicSal,
//       hra: this.props.HRA,
//       othr: this.props.OtherAllowance
//     }

//   }
//   updateSalary = () => {
//     let salary = parseInt(this.refs.basic.value) +
//       parseInt(this.refs.hra.value) +
//       parseInt(this.refs.other.value);
//       this.props.onSalaryChanged(salary);
//   }
//   render() {
//     return (
//       <div>
//         <h2> Slary Details..</h2>
//         <p>
//           <lebel>Basic Salary :<input type='text' ref='basic' defaultValue={this.state.basic}></input></lebel>
//         </p>
//         <p>
//           <lebel>HRA :<input type='text' ref='hra' defaultValue={this.state.hra}></input></lebel>
//         </p>
//         <p>
//           <lebel>Other Allowances :<input type='text' ref='other' defaultValue={this.state.othr}></input></lebel>
//         </p>
//         <button onClick={this.updateSalary}>Update</button>
//       </div>
//     )
//   }
// }


// const element = <Employee ID='100' Name='Purnachandra' Loc='Bengaluru'
//   BasicSal='10000' HRA='15000' OtherAllowance='5000'></Employee>;
// ReactDOM.render(element, document.getElementById('root'));






// -----------------------

//State of Class components
//2nd

// class CountCharacters extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       message: '',
//       counter: 10
//     };
//   }
//   onMessageChange(text) {

//     this.setState({ message: 'Message has' + text.length + 'number of characters' });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Welcome to count Caharacter components..</h2>
//         <p>
//           Enter Message<input type='text' onChange={e => this.onMessageChange(e.target.value)}></input>
//         </p>
//         <p>
//           <lebel>{this.state.message}</lebel>
//         </p>
//         <p>
//           <lebel>{this.state.counter}</lebel>
//         </p>

//       </div>)
//   }
// }

// const element = <CountCharacters></CountCharacters>;
// ReactDOM.render(element, document.getElementById('root'));

//1st
// class Employee extends React.Component {
//   state = { counter: 0 };
//   addEmployee = () => {

//     this.setState({ counter: this.state.counter + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Welcome to employee components</h2>
//         <p>
//           <button onClick={this.addEmployee} >Add Employee</button>
//         </p>
//         <p>
//           <lebel>Add Employee button is clicked:</lebel>
//           <b>{this.state.counter} times</b>
//         </p>
//       </div>)
//   }
// }

// const element = <Employee></Employee>;
// ReactDOM.render(element, document.getElementById('root'));

//-------------------------------------------------
//Class components

//3rd to understand the props objest are read only

// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     //this.props.id = '200'; // this will throw error as objects properties are read only
//   }
//   render() {
//     return (
//       <div>
//         <h2>Employee Details..</h2>
//         <p>
//           <lebel>Employee Id:<b>{this.props.id}</b></lebel>
//         </p>
//         <p>
//           <lebel>Employee Id:<b>{this.props.name}</b></lebel>
//         </p>
//         <Department deptName={this.props.deptName} deptHead={this.props.deptHead}></Department>

//       </div>
//     )
//   }
// }

// class Department extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Department Details...</h2>
//         <p>
//           <lebel>Department Name:<b>{this.props.deptName}</b></lebel>
//         </p>
//         <p>
//           <lebel>Department Head:<b>{this.props.deptHead}</b></lebel>
//         </p>

//       </div>
//     )
//   }
// }

// const element = <Employee id='100' name='Purna' deptName='Finance' deptHead='Vasas'></Employee>;
// ReactDOM.render(element, document.getElementById("root"));

// 2nd
// class Employee extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Employee Details..</h2>
//         <p>
//           <lebele>Employee Id:<b>{this.props.id}</b></lebele>
//         </p>
//         <p>
//           <lebele>Employee Id:<b>{this.props.name}</b></lebele>
//         </p>
//         <Department deptName={this.props.deptName} deptHead={this.props.deptHead}></Department>

//       </div>
//     )
//   }
// }

// class Department extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Department Details...</h2>
//         <p>
//           <lebel>Department Name:<b>{this.props.deptName}</b></leblel>
//         </p>
//         <p>
//           <leblel>Department Head:<b>{this.props.deptHead}</b></leblel>
//         </p>

//       </div>
//     )
//   }
// }

// const element = <Employee id='100' name='Purna' deptName='Finance' deptHead='Vasas'></Employee>;
// ReactDOM.render(element, document.getElementById("root"));


//1st
// class EMployee extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Employee Details</h2>
//         <p>
//           <lebel>Employee ID: <b>{this.props.id}</b></lebel>
//         </p>
//         <p>
//           <lebel>Employee Name: <b>{this.props.name}</b></lebel>
//         </p>
//       </div>
//     )
//   }
// }

// const element = <EMployee id='100' name='purna'></EMployee>;
// ReactDOM.render(element, document.getElementById('root'));


//REACT FUNCTIONAL COMPONENTS EXAMPLE
// -----------------------------------------

//3rd Way where
//---------------------------------------
// var DisplayEMployeeInfo = (employee) => {

//   return <div>
//     <h1>EMployee dtls..</h1>
//     <p>
//       <lebale>EmployeeId :<b>{employee.id}</b></lebale>
//     </p>
//     <p>
//       <lebale>Employee Name :<b>{employee.name}</b></lebale>
//     </p>
//     <Department deptName={employee.deptName}></Department>
//   </div>;
// }

// const Department = (department) => {

//   return <div>
//     <h1>Department Details...</h1>
//     <p><lebel>Department Name : <b>{department.deptName}</b></lebel></p>
//   </div>;
// }

// const element = <DisplayEMployeeInfo id='100' name='Purna' deptName='Finance'></DisplayEMployeeInfo>;

// ReactDOM.render(element, document.getElementById('root'));
//--------------------------------------------

// //2nd

// var DisplayEMployeeInfo = (employee) => {

//   return <div>
//     <h1>EMployee dtls..</h1>
//     <p>
//       <lebale>EmployeeId :<b>{employee.id}</b></lebale>
//     </p>
//     <p>
//       <lebale>Employee Name :<b>{employee.name}</b></lebale>
//     </p>
//   </div>;
// }

// const element = <DisplayEMployeeInfo id='100' name='Purna'></DisplayEMployeeInfo>;
// ReactDOM.render(element, document.getElementById('root'));

//1st

// function DisplayEMployeeInfo(employee) {

//   return <div>
//     <p>
//       <lebale>EmployeeId :<b>{employee.id}</b></lebale>
//     </p>
//     <p>
//       <lebale>Employee Name :<b>{employee.name}</b></lebale>
//     </p>
//   </div>;
// }

// const element = <DisplayEMployeeInfo id='100' name='Purna'></DisplayEMployeeInfo>;
// ReactDOM.render(element, document.getElementById('root'));


//--------------REACT ELEMENTS Example
//------------------------------

// //4th way of rendering  REact without JSX
// const elementName = React.createElement("div", { className: 'testClass' },
//   React.createElement("h1", null, "Heloo"),
//   React.createElement("h1", null, "Hiiiiiiiiiiiiiii..."),
//   React.createElement('h3', null, 'React JSSSSSS'));

// ReactDOM.render(elementName, document.getElementById('root'));


///-------------React with JSX
//3rd Way of rendering
// const element = React.createElement('h1', null, "Heloo....");

// ReactDOM.render(element, document.getElementById('root'));


//2nd way of rendering using JSX
// const elemnt = (
//     <div className='testClass'>
//         <h1> HHHHHHHHHHHH</h1>
//         <h1> ajsakskajskasjkas</h1>
//     </div>
// )

// ReactDOM.render(elemnt, document.getElementById('root'))


//1st way of rendering using JSX
// const element = <h1 className='testClass'>Welcome to React JS...</h1>;

// ReactDOM.render(element, document.getElementById("root"));

// const newElement = <h1 className='testClass'>Hello World .....</h1>;

// ReactDOM.render(newElement, document.getElementById("root"));