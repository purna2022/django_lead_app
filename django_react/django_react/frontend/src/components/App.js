import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import axios from 'axios';

//------------------------------------------------
// class LeadDeatils extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             leadinfo: []
//         };
//     }
//     componentDidMount() {
//         axios.get('api/lead').then(res => {
//             console.log(res);
//             var leadarray = [];
//             leadarray.push(res.data);
//             this.setState({ leadinfo: leadarray });
//         }
//         )
//     }
//     // componentDidMount() {
//     //     fetch('api/lead').then(res => res.json()).then(
//     //         result => {
//     //             console.log(res);
//     //             this.setState({ leadinfo: result });
//     //         }
//     //     )
//     // }

//     render() {
//         return (
//             <div>
//                 <h2>Lead details</h2>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Message</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.leadinfo.map(lead => (
//                             <tr key={lead.id}>
//                                 <td>{lead.Id}</td>
//                                 <td>{lead.Name}</td>
//                                 <td>{lead.Email}</td>
//                                 <td>{lead.Message}</td>

//                             </tr>
//                         ))}
//                     </tbody>

//                 </table>
//             </div>

//         )
//     }
// }

// const element = <LeadDeatils></LeadDeatils>;
// ReactDOM.render(element, document.getElementById('app'));

//--------------------------------------------------------
//-------------------------this is working fine
//---------------------------------------------------------
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/lead")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <div>
                <h2>Lead details</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(contact => {
                            return (
                                <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.message}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        );

    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

//---------------------Sending Data from Frontend to databse
class LeadInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    onCreateLead = () => {
        let leadinfo = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            message: this.message.value
        };

        fetch('api/lead', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringfy(leadinfo)
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: 'New Lead created Successfully' });
            }
        })
    }
    render() {
        return (
            <div>
                <h2>Please eneter lead details</h2>
                <p>
                    <label> Lead Name:<input type='text' ref='name'></input></label>
                </p>
                <p>
                    <label> Lead email:<input type='text' ref='email'></input></label>
                </p>
                <p>
                    <label> Lead Message:<input type='text' ref='message'></input></label>
                </p>
                <button onClick={this.onCreateLead}>Create Lead</button>
                <p>
                    {this.state.message}
                </p>
            </div>
        )
    }
}

// const element = <LeadInput></LeadInput>;
// ReactDOM.render(element, document.getElementById('root'));