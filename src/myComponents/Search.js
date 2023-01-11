import { useNavigate } from 'react-router-dom';
import React, {  useState } from 'react'
import "../myCss/search.css"


function Search() {
    let [fewdiv,setFewdiv] = useState([]) 

    let alldiv = [
        {
            title: "Morbi arcu libero hello",
            redirect: "/moduleone/tab1"
        },
        {
            title: "Ut hendrerit est toth lorem",
            redirect: "/moduleone/tab2"
        },
        {
            title: "Ut hendrerit est tovegh pro",
            redirect: "/moduleone/tab3"
        },
    
        {
            title: "Morbi dd arcu libero",
            redirect: "/moduletwo/tab1"
        },
        {
            title: "Ut hendrerit ese est toth",
            redirect: "/moduletwo/tab2"
        },
        {
            title: "Ut hendrerit sew est tovegh",
            redirect: "/moduletwo/tab3"
        },
    
        {
            title: "Morbi uyr arcu lebro",
            redirect: "/modulethree/tab1"
        },
        {
            title: "Ut at hendrerir est toth",
            redirect: "/modulethree/tab2"
        },
        {
            title: "Ut rti hendrerir est tovegh",
            redirect: "/modulethree/tab3"
        },
    
        {
            title: "Morbi esu arcu lebro",
            redirect: "/modulefour/tab1"
        },
        {
            title: "Ut hendrerir swaes est toth",
            redirect: "/modulefour/tab2"
        },
        {
            title: "Ut hendreri swizxr est tovegh",
            redirect: "/modulefour/tab3"
        },
    
        {
            title: "Morbi liol arcu lebro",
            redirect: "/modulefive/tab1"
        },
        {
            title: "Ut hendrerir hgjt est toth",
            redirect: "/modulefive/tab2"
        },
        {
            title: "Utrjf ryuy hendrerir est tovegh",
            redirect: "/modulefive/tab3"
        }
    ]
   
    let history = useNavigate();
    const searchRedirect = (pass) => {
        history(`${pass}`)
        // console.log(pass);
    }
    let targetvalue = "";
    const getdata =(e)=>{
        targetvalue = e.target.value;
       
    }
    const giveRes=()=>{
        fewdiv=[]
        setFewdiv([])
        // console.log(targetvalue);
        // console.log(fewdiv);
        alldiv.forEach(element => {
            // console.log("Rohit");
            let hello = element.title;
            if (targetvalue==="") {
                targetvalue=null
            }
            // console.log(targetvalue);
            if (hello.includes(targetvalue)) {
                fewdiv.push(element)
            }
        })
        // console.log(fewdiv);
        setFewdiv(fewdiv)
    }

  

    return (
        <div className="search">
            <div className="search_header">
                <input type="text"  onChange={getdata}  placeholder='Enter The Module Name' name="title" id="title" />
                <button onClick={giveRes} >Search</button>
            </div>
            <div className="search_body">
                <h3>Click to redirect to Module</h3>
               
                {/* {alldiv.map((note) => {
                    return <div key={note.redirect} onClick={() => { searchRedirect(note.redirect) }} className="mod_all_div">
                        {note.title}
                    </div>
                })} */}

                {fewdiv.map((note) => {
                    return <div key={note.title} onClick={() => { searchRedirect(note.redirect) }} className="mod_all_div">
                        {note.title}
                    </div>
                })}

            </div>
        </div>
    );
}

export default Search;
