import React, {useState} from "react";
import '../css/PreferenceCSS.scss';
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const initialFormData = Object.freeze({
    city: '',
    zipcode: '',
    name: ''
});

const PreferenceForm = () => {
    const [formData, updateFormData] = React.useState(initialFormData);
    const[user, setUser] = useState([]);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };
    const apiGet = () => {
        if(formData.zipcode !== '')
            fetch('https://prescriptiontrails.org/api/filter/?by=zip&zip='+formData.zipcode+'&offset=0&count=10')
                .then((response) => response.json())
                .then((json) => {
                    let parsedArray = json.trails;
                    console.log(parsedArray);
                    setUser(parsedArray);
                });
        else if(formData.name !== '')
            fetch('https://prescriptiontrails.org/api/filter/?by=name&name='+formData.name+'&offset=0&count=10')
                .then((response) => response.json())
                .then((json) => {
                    let parsedArray = json.trails;
                    console.log(parsedArray);
                    setUser(parsedArray);
                });
        else if(formData.city !== '')
            fetch('https://prescriptiontrails.org/api/filter/?by=city&city='+formData.city+'&offset=0&count=10')
                .then((response) => response.json())
                .then((json) => {
                    let parsedArray = json.trails;
                    console.log(parsedArray);
                    setUser(parsedArray);
                });
        else
            fetch('https://prescriptiontrails.org/api/filter/?by=city&city=Albuquerque&offset=0&count=20')
                 .then((response) => response.json())
                 .then((json) => {
                     let parsedArray = json.trails;
                     console.log(parsedArray);
                     setUser(parsedArray);
                 });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        apiGet();
    };

    //Signout
    const [err, setErr] = useState();
    const navigate = useNavigate();
    const { logout } = useUserAuth();
    const handleLogout = async (e) =>{
        e.preventDefault();
        setErr("");
        try {
            await logout();
            navigate("/")
        } catch (err) {
            setErr(err.message)
        }
    }

    return (
        <div>
            <button className="btn btn-primary" onClick = { handleLogout } variant="primary" type="Submit" style={{}}>
              Log Out
            </button>
        <form noValidate>
            <div><h2><b>Preferences</b></h2></div>
            <div><p><b>Filter on any ONE of the below fields</b></p></div>
            <div className="form-group">
                <label id="name">Name</label>
                <input className="form-control"
                       type="text"
                       name="name"
                       onChange={ handleChange }
                       required />
            </div>
            <div className="form-group">
                <label id="city">City</label>
                <input className="form-control"
                       type="text"
                       name="city"
                       onChange={ handleChange }
                       required />
            </div>
            <div className="form-group">
                <label id="zipcode">ZipCode</label>
                <input className="form-control"
                       type="text"
                       name="zipcode"
                       onChange={ handleChange }
                       required />
            </div>
            <button className="btn btn-primary"
                    onClick={ handleSubmit }>submit
            </button>
            <br />
        </form>
            <div id="outPopUp">
                <br/>
                {user.map(data=>(
                    <div>
                        <li key = {data.id}><b>Trail Name: {data.name}</b></li>
                        <p>Trail Difficulty on scale of 5: {data.difficulty}</p>
                        <p>Address: {data.address + ", " + data.city + "," + data.zip}</p>
                        <p>Image from Trail</p>
                        <div>
                            <img alt = "Trailhead" src={data.largeImgURL} key={data.id} width="300" height="200"/>
                        </div>
                        <br/>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
export default PreferenceForm;