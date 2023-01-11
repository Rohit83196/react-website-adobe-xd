import React from 'react';
import { Link } from 'react-router-dom'
import "../myCss/module.css"

function Module() {
  return (
    <div className="module_com">
                    <div className="module">
                        <Link to="/moduleone"><button className="mod__btn"><h2>Modole One</h2></button></Link>
                        <hr/>
                        <Link to="/moduletwo"><button className="mod__btn"><h2>Modole Two</h2></button></Link>
                        <hr/>
                        <Link to="/modulethree"><button className="mod__btn"><h2>Modole Three</h2></button></Link>
                        <hr/>
                        <Link to="/modulefour"><button className="mod__btn"><h2>Modole Four</h2></button></Link>
                        <hr/>
                        <Link to="/modulefive"><button className="mod__btn"><h2>Modole Five</h2></button>  </Link>
                    </div>
                    <button  className="sel_mod"><span>Select Module</span> <i className="fa-sharp fa-solid fa-arrow-right-long"></i></button>
                </div>
  );
}

export default Module;
