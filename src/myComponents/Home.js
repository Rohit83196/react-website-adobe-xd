import React from 'react';
import { Link } from 'react-router-dom'
import "../myCss/home.css"


function Home() {
    return (
        <div className="home_com">
            <div className="home">
                <h1>Fusce sem magna pharetra cursus</h1>
                <p>Morbi tincidunt nisi id vulputate consequat. Morbi arcu libero, pellentesque eu bibendum non, eleifend ut nisi. Phasellus mattis nibh ullamcorper euismod sodales. Donec metus eros, euismod dapibus fermentum non, gravida id ex. Duis vitae dui sit amet lectus ultrices lacinia eget in tellus. Vivamus lacinia lectus id justo fermentum tincidunt. Duis consectetur porttitor tincidunt. Sed dapibus nulla vitae risus elementum dictum.</p>
            </div>
            <Link to="/allmodules"><button  className="home_btn"><span>Enter</span> <i className="fa-sharp fa-solid fa-arrow-right-long"></i></button></Link>
            {/* <button  className="home_btn"><span>Enter</span> <i className="fa-sharp fa-solid fa-arrow-right-long"></i></button> */}
        </div>
    );
}

export default Home;
