import React,{useState, useEffect} from "react";

function ApiTest(){

const[user, setUser] = useState([]);

const apiGet = () => {
    fetch('https://prescriptiontrails.org/api/filter/?by=city&city=Albuquerque&offset=0&count=7')
    .then((response) => response.json())
    .then((json) => {
        let parsedArray = json.trails;
        console.log(parsedArray);
        setUser(parsedArray);
    });
};

useEffect(() => {
    apiGet();
}, []);

    return (
        <div>
            <br/>
           {user.map(data=>(
               <div>
                   <li key = {data.id}><b>Trail Name: {data.name}</b></li>
                   <p>Trail Difficulty on scale of 5: {data.difficulty}</p>
                   <p>Address: {data.address + ", " + data.city + "," + data.zip}</p>
                   <p>Image from Trail</p>
                   <div>
                     <img src={data.largeImgURL} key={data.id} width="300" height="200"/>
                   </div>
               <br/>
               </div>
           ))}
        </div>

    );
}
export default ApiTest;