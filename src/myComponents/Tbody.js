import React from 'react';
import "../myCss/table.css";
import { Link } from 'react-router-dom'


function Tbody(props) {
    return (

        <div className="t_body">
            <div className="t_img">
                <img src={props.tb_url} alt="" />
            </div>
            <div className="t_data">
                <h1>{props.tb_heading}</h1>
                <p>{props.tb_data}</p>
            </div>
        </div>


    


    );
}

export default Tbody;
