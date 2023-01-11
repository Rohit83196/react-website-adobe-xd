import React from 'react';
import {  useEffect } from "react";
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate
    // Link
  } from "react-router-dom";
import "../myCss/table.css";
import Tbody from './Tbody';

function Table(props) {
    let location = useLocation();
    console.log(location.pathname); 
    let history = useNavigate();
    let path = props.tb_path;
    const to_tab_One = (path) => {

        history(`/${path}/tab1`)
    }

    useEffect(()=>{
        if ((location.pathname==="/moduleone")||(location.pathname==="/moduletwo")||(location.pathname==="/modulethree")||(location.pathname==="/modulefour")||(location.pathname==="/modulefive") ) {
            
            to_tab_One(path)
        }
        // eslint-disable-next-line
      },[])
    const Search_to_mod=()=>{
        history("/search")
    }
 


    return (
        <div className="primary">
            <div className="header">

                <h1>{props.mod_name}</h1>
                <i onClick={Search_to_mod} className="fa-solid fa-2x fa-magnifying-glass"></i>
            </div>
            <div className="table">
                <div className="t_head">
                    <Link to={`/${props.tb_path}/tab1`}><button className="tab_btn"><div><h1>Tab 1</h1></div></button></Link>
                    <Link to={`/${props.tb_path}/tab2`}><button className="tab_btn"><div><h1>Tab 2</h1></div></button></Link>
                    <Link to={`/${props.tb_path}/tab3`}><button className="tab_btn"><div><h1>Tab 3</h1></div></button></Link>
                </div>
                {/* <Tbody/> */}
                <Outlet/>
         
            </div>
        </div>
    );
}

export default Table;
