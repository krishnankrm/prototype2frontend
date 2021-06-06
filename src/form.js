import axios from "axios";
import { Component } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
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
export default class  form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    value:false,                   //used for hide and show concept for output
    value1:1,                      //used  
    }}
  handleChange(event) {
      this.setState({value1: event.target.value});
    }
  async refreshList1(){
      const article = { firstname:document.getElementById('fname').value, lastname: document.getElementById('lname').value, middlename:document.getElementById('mname').value, address: document.getElementById('Add').value,email: document.getElementById('email').value, phone:this.state.phone, height: document.getElementById('Height').value, weight: document.getElementById('Weight').value};

      axios
        .post("http://localhost:9001/form/savedetails",article)
        .then(res => this.setState({ login: res.data }, console.log(1)))
        .catch(err => alert(err))    
        
    };
  savedfn()
  {
    if(this.state.value!=false)
      return(
        <div >
          <br/>
          <div className="card col-10 offset-1" style={{backgroundColor:''}}>
            <div className="row">
              <div className="col-12 " style={{fontSize:'18px'}}>
              <br/>
              <h3 style={{textAlign:"center"}}> Retrieved Data</h3>
              <hr style={{textAlign:"center", width:"80%", background: "black"}}/>      
              <br/>
          <div className='ml-5'>
            <label><b>First Name: </b>{document.getElementById('fname').value}</label><br/>
            <label><b>Last Name: </b>{document.getElementById('lname').value}</label><br/>
            <label><b>Middle Name: </b>{document.getElementById('mname').value}</label><br/>
            <label><b>Address: </b>{document.getElementById('Add').value}, {document.getElementById('state').value}, {document.getElementById('country').value}, {document.getElementById('pcode').value}</label><br/>
            <div className='row'>
              <div className="col-3">
              <label><b>Email: </b>{document.getElementById('email').value}</label><br/>  
              </div>
              <div className="col-5">
              <label><b>Phone Number: </b>+{this.state.phone}</label><br/>  
              </div>
            </div>
            <div className='row'>
              <div className="col-3">
              < label><b>Height: </b>{document.getElementById('Height').value} (Ft/inches)</label><br/>  
              </div>
              <div className="col-5">
                <label><b>Weight: </b>{document.getElementById('Weight').value} (kg)</label><br/>  </div></div>
              </div>
              <hr style={{textAlign:"center", width:"80%", background: "black"}}/>
              <div style={{textAlign:"center"}}>            
                <input type="submit" className="btn btn-secondary btn-lg active" value="New Record" onClick={this.handleclick.bind(this)} style={{width:'150px',fontSize:'18px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      )
  }
  handleclick()
{  window.location.reload()}  
  fnstateselect()
  { 
    if(document.getElementById('country')!=null)
    if(document.getElementById('country').value=='United States of America')
      return(<select className='form-control' id="state">
      <option value="Alabama">Alabama</option>
      <option value="Alaska">Alaska</option>
      <option value="Arizona">Arizona</option>
      <option value="Arkansas">Arkansas</option>
      <option value="California">California</option>
      <option value="Colorado">Colorado</option>
      <option value="Connecticut">Connecticut</option>
      <option value="Delaware">Delaware</option>
      <option value="District Of Columbia">District Of Columbia</option>
      <option value="Florida">Florida</option>
      <option value="Georgia">Georgia</option>
      <option value="Hawaii">Hawaii</option>
      <option value="Idaho">Idaho</option>
      <option value="Illinois">Illinois</option>
      <option value="Indiana">Indiana</option>
      <option value="Iowa">Iowa</option>
      <option value="Kansas">Kansas</option>
      <option value="Kentucky">Kentucky</option>
      <option value="Louisiana">Louisiana</option>
      <option value="Maine">Maine</option>
      <option value="Maryland">Maryland</option>
      <option value="Massachusetts">Massachusetts</option>
      <option value="Michigan">Michigan</option>
      <option value="Minnesota">Minnesota</option>
      <option value="Mississippi">Mississippi</option>
      <option value="Missouri">Missouri</option>
      <option value="Montana">Montana</option>
      <option value="Nebraska">Nebraska</option>
      <option value="Nevada">Nevada</option>
      <option value="New_Hampshire">New Hampshire</option>
      <option value="New_Jersey">New Jersey</option>
      <option value="New_Mexico">New Mexico</option>
      <option value="New_York">New York</option>
      <option value="North_Carolina">North Carolina</option>
      <option value="North_Dakota">North Dakota</option>
      <option value="Ohio">Ohio</option>
      <option value="Oklahoma">Oklahoma</option>
      <option value="Oregon">Oregon</option>
      <option value="Pennsylvania">Pennsylvania</option>
      <option value="Rhode Island<">Rhode Island</option>
      <option value="South_Carolina">South Carolina</option>
      <option value="South_Dakota">South Dakota</option>
      <option value="Tennessee">Tennessee</option>
      <option value="Texas">Texas</option>
      <option value="Utah">Utah</option>
      <option value="Vermont">Vermont</option>
      <option value="Virginia">Virginia</option>
      <option value="Washington">Washington</option>
      <option value="West_Virginia">West Virginia</option>
      <option value="Wisconsin">Wisconsin</option>
      <option value="Wyoming">Wyoming</option>
    </select>)
    return(<input type='text' className='form-control' id='state' placeholder='State' required/>)
  }
  handleSubmit(event) {
    event.preventDefault();
    if(this.state.phone!=undefined)
    {alert('Record Saved');
    this.refreshList1();
    this.setState({value:true})}
    else
    alert('Add Phone Number')
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
      <i class="icon-home" aria-hidden="true" style={{color:"white", paddingRight:'10px'}}></i><Link to="/form" style={{paddingRight:"10px", color:'grey',fontWeight:'510'}}>Forms</Link>
      </span>
      <span className="Nav__item">
      <i class="icon-folder-open-alt" aria-hidden="true" style={{color:"white"}}></i>  <Link to="/Dashboard" style={{paddingRight:"10px", color:'grey',fontWeight:'500'}}>Dashboard</Link>
      </span>
      <span className="Nav__item">
      <i class="icon-signout" aria-hidden="true" style={{color:"white"}}></i>  <Link to="/logout" style={{paddingRight:"10px", color:'grey',fontWeight:'500'}}>Logout</Link>
      </span>     
    </span>
    </span>
        </div></div>

      
        
      </div><br/><br/>
      
    
      <div className="card col-10 offset-1" style={{backgroundColor:''}}>      
        <div className="row">
          <div className="col-12"> 
          <br/>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="col-4">
                <label >First Name </label>
                <div className="form-group">
                  <input type="text" id="fname" className="form-control" required placeholder="First Name"/>
                </div>
              </div>
              <div className="col-4">
                <label >Middle Name</label>
                <div className="form-group">
                  <input type="text" id="mname" className="form-control" required placeholder="Middle Name"/>
                </div>
              </div>
              <div className="col-4">
                <label >Last Name</label>
                <div className="form-group">
                  <input type="text" id="lname" className="form-control" required placeholder="Last Name"/>
                </div>
              </div>            
          </div>
          <div className="row">
            <div className="col-8">
              <label>Address</label>
              <div className="form-group">
                <input type="text" id="Add" className="form-control" required placeholder="Address"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label >Country</label>
              <div className="form-group">
                <select id="country" className="form-control" value={this.state.value1} onChange={this.handleChange.bind(this)} required>
                <option value="Afganistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire">Bonaire</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Canary Islands">Canary Islands</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Channel Islands">Channel Islands</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Island">Cocos Island</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote DIvoire">Cote DIvoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaco">Curacao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Ter">French Southern Ter</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Great Britain">Great Britain</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Indonesia">Indonesia</option>
                <option value="India">India</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea North">Korea North</option>
                <option value="Korea Sout">Korea South</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Midway Islands">Midway Islands</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nambia">Nambia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherland Antilles">Netherland Antilles</option>
                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                <option value="Nevis">Nevis</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau Island">Palau Island</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Phillipines">Philippines</option>
                <option value="Pitcairn Island">Pitcairn Island</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Montenegro">Republic of Montenegro</option>
                <option value="Republic of Serbia">Republic of Serbia</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="St Barthelemy">St Barthelemy</option>
                <option value="St Eustatius">St Eustatius</option>
                <option value="St Helena">St Helena</option>
                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                <option value="St Lucia">St Lucia</option>
                <option value="St Maarten">St Maarten</option>
                <option value="St Pierre and Miquelon">St Pierre and Miquelon</option>
                <option value="St Vincent and Grenadines">St Vincent and Grenadines</option>
                <option value="Saipan">Saipan</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa American">Samoa American</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tahiti">Tahiti</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Is">Turks and Caicos Is</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Erimates">United Arab Emirates</option>
                <option value="United States of America">United States of America</option>
                <option value="Uraguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City State">Vatican City State</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Islands">Virgin Islands</option>
                <option value="Wake Island">Wake Island</option>
                <option value="Wallis and Futana Is">Wallis and Futana Is</option>
                <option value="Yemen">Yemen</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <label >State</label>
              <div className="form-group">
                {this.fnstateselect()}
              </div>
            </div>
            <div className="col-4">
              <label >Pin Code</label>
              <div className="form-group">
                <input type="text" id="pcode" className="form-control" required placeholder="Pincode"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
            <label >Email Id</label>
              <div className="form-group">
              <input type="email" id="email" className="form-control" required placeholder="Email"/>
              </div>
            </div>
            <div className="col-4">
              <label >Phone Number</label>
              <div className="form-group">
                <PhoneInput   country={'us'}  value={this.state.phone}   onChange={phone => this.setState({ phone })}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label >Height(Ft/inches)</label>
              <div className="form-group">
                <input type="text" id="Height" className="form-control" required placeholder="Height"/>
              </div>
            </div>
            <div className="col-4">
              <label >Weight(kg)</label>
              <div className="form-group">
                <input id="Weight" type="text" className="form-control" placeholder="Weight" required />
              </div>
            </div>
          </div>
          <div style={{textAlign:"center"}}>            
            <input type="submit" className="btn btn-secondary btn-lg active" value="Submit" style={{width:'150px',fontSize:'18px'}}/>
          </div>
          </form>
          <br/>
        </div>
      </div>
    </div>
  {this.savedfn()}
  </div>)
  }
}
