import React, { Component } from "react";
import axios from "axios";
import './App.css';
import { Link } from 'react-router-dom';
const apiaccesstoken= localStorage.getItem("token");

axios.interceptors.request.use(
    config=>{
        config.headers.authorization = 'Bearer '+apiaccesstoken;
        return(config)
    },
    error=>{
        Promise.reject(error)
    }
)
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value:'',
          value1:'',  
          value2:'', 
          value6:[], 
  
          login1:[] ,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);  
      }
      handleChange(event) {
          this.setState({value: event.target.value});
        }
      handleChange2(event) {
          this.setState({value2: event.target.value});
        }
      handleChange1(event) {
          this.setState({value1: event.target.value});
        }
      componentDidMount(){
          this.refreshList1();
      }
      refreshList1=() => {
        axios
        .get("http://localhost:9001/")
        .then(res => this.setState({ login: res.data }))
        .catch(err => alert(err))    
      }
      
  
    invtable()
{ 
    console.log(this.state.login)
    if(this.state.login!=undefined)
    {const newItems = this.state.login; var s5=[],s6=[],s7=[],s8=[];
    s5.push(newItems.map(newItems => newItems.firstname));
    s6.push(newItems.map(newItems => newItems.lastname)); 
    s7.push(newItems.map(newItems => newItems.email));
    s8.push(newItems.map(newItems => newItems.phone));
    var b=[];
    for (var i = 0; i <s5[0].length ;i++ )
    {
    b.push(<tr >
                        <td>{s5[0][i]}</td>
                        <td>{s6[0][i]}</td>
                        <td>{s7[0][i]}</td>
                        <td>+{s8[0][i]}</td>
                        <td><button className="btn btn-danger" onClick={this.delfn.bind(this,newItems.map(newItems => newItems._id)[i])}>Delete</button></td>
    </tr> )}
    if(b.length==0)
    return(<tr><td>'No records in Database'</td></tr>)
    return(b)}
}
delfn(id)
{ 
    axios
        .delete("http://localhost:9001/form/delete-details/"+id)
        .then(res => alert(res.data),           window.location.replace("/Dashboard") )
        .catch(err => alert(err))

    
    
}
  render() {
    return(
      <div style={{backgroundColor:'LightGray', minHeight:'100vh', overflowX:'hidden' }}>
      <div className="Titleheader" >
      <div className="row"><div className="col-md-7 offset-1" >
      <h1>React Forms Prototype</h1>
      </div>
      <div className="col-md-4" style={{paddingTop:'10px'}}>
      <span className="topnav">
      <span  className="topnavul">
      <span className="Nav__item">
      <i className="icon-home" aria-hidden="true" style={{color:"white", paddingRight:'10px'}}></i><Link to="/form" style={{paddingRight:"10px", color:'grey',fontWeight:'510'}}>Forms</Link>
      </span>
      <span className="Nav__item">
      <i className="icon-folder-open-alt" aria-hidden="true" style={{color:"white"}}></i>  <Link to="/Dashboard" style={{paddingRight:"10px", color:'grey',fontWeight:'500'}}>Dashboard</Link>
      </span>
      <span className="Nav__item">
      <i className="icon-signout" aria-hidden="true" style={{color:"white"}}></i>  <Link to="/logout" style={{paddingRight:"10px", color:'grey',fontWeight:'500'}}>Logout</Link>
      </span>     
    </span>
    </span>
        </div></div>

        
      </div><br/><br/>        <h2 style={{textAlign:'center'}}>Forms Database</h2><br/>
      <div className="container tab-data" >
                <table className="table" style={{textAlign:'center', backgroundColor:'white', borderRadius:'20px'}}>
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.invtable()}

                    </tbody>
                </table>
            </div>
    
</div>
       )
  }
}
