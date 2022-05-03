import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SmartHikeHeaderBar from "./SmartHikeHeaderBar";
import '../css/HomeCSS.scss';
import '../css/PreferenceCSS.scss';

const initialFormData = Object.freeze({
    city: '',
    zipcode: '',
    name: ''
});

const Home = () => {
    const { user, logout } = useUserAuth()
    const [city, setCity] = useState();
    const [zipcode, setZip] = useState();
    const [formData, updateFormData] = React.useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    //Signout
    const [err, setErr] = useState();
    const navigate = useNavigate();
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
    return(
        <div>
        <SmartHikeHeaderBar />
            <Container>
                <Paper elevation={2} className='login-paper' >
                    <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        { user == null && <h2>Hello Stranger! Lets Hike!</h2> }
                        { user!=null && <h2>Hello {user.displayName}! Lets Hike!</h2> }
                    </Typography>
                    <form className='login-form' noValidate autoComplete='off'>
                        <TextField type='text' label='City' variant='outlined' fullWidth value={city}
                            onChange={(e) => setCity(e.target.value)} className="small-margin-below" />
                        <TextField type='text' label='Zip Code' variant='outlined' fullWidth value={zipcode}
                            onChange={(e) => setZip(e.target.value)} className="small-margin-below" />
                        <br></br>
                        <Button className="btn btn-primary" onClick={ handleSubmit }>Submit</Button>
                        <br></br>
                        <br></br>
                        { user==null && <Button variant="outlined" onClick={() => navigate("/login")} className="small-margin-below">Sign In</Button>}
                        { user==null && <Button variant="outlined" onClick={() => navigate("/signup")} className="small-margin-below">Register</Button>}
                        { user!=null && <Button variant="outlined" onClick={(handleLogout)} className="small-margin-below">Logout</Button>}
                        <br></br>
                        { user==null && <Link to="/forgotPassword">Forgot Password</Link>}
                        <br></br>
                        <br></br>
                    </form>
                    {err}
                </Paper>
            </Container>
        </div>
    )
}

export default Home;

