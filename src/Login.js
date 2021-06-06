import react,{Component} from 'react';
import './App.css';
import axios from 'axios';
let b = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI4MDEzMzcsImV4cCI6MTYyMzQwNjEzN30.PaC1LsXX4qNVgZhGh-X5qjXl3GA0BYbjkLxJvJKIpDU"

axios.interceptors.request.use(
    config=>{
        config.headers.authorization = 'Bearer '+b;;
        return(config)
    },
    error=>{
        Promise.rereject(error)
    }
)

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    value:'',     //id
    value1:'',   //pass 
    value5:1,      
    login: [],      
    sessionlogin: [],     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);    
  }

  async refreshList1(){
    const article = { username: this.state.value, password: this.state.value1};
    await axios
      .post("http://localhost:9001/login",article)
      .then(res => this.setState({ login: res.data }))
      .catch(err => alert(err))         
  };
  
  componentDidMount() {
    console.clear();
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
 
  handleSubmit(event) {
    this.setState({value: event.target.value}); 
  }
  handleClick()
  {
    this.refreshList1()

  }
  fn1()
  {
    if(this.state.login!=null)
    if(this.state.login.token!= undefined)
    {           
        localStorage.removeItem("token");
        localStorage.setItem('token', this.state.login.token);
        window.location.replace("/form")

    }
  }
  render (){
    return(

        <div style={{backgroundColor:'LightGray', minHeight:'100vh', overflowX:'hidden'}}>
        <div className="Titleheader1" >
          <h1>React Forms Prototype</h1>
        </div>
        {this.fn1()}
        <div className="conn1">
          <div className="row">         
            <div className="container_allign_center">
                <div id="div12">              
                    <form id='abx'>
                    <h3 style={{paddingBottom:'10px', textAlign:'center'}}>Login</h3>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                             <span className="input-group-text"><i className="icon-user"></i></span> 
                            </div>
                            <input type="text" className="form-control" placeholder="Username" autoComplete="off" name="email" value={this.state.value} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="icon-lock"></i></span> 
                            </div>
                            <input type="password" className="form-control" id="pwd" placeholder="Password" name="pwd" value={this.state.value1} onChange={this.handleChange1}/>      
                        </div>    
                        <div style={{textAlign:'center'}}>
                        <input type="button" className="btn btn-secondary" onClick={this.handleClick.bind(this)} value="Login"/>
                        </div><br/>
                        </form>
                    </div>
            </div>
          </div>
  
        </div>

    </div>
    )
}
}
export default Login;
