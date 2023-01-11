import React from 'react';
import "../myCss/main.css"
import "../myCss/table.css"
import Home from './Home';
import Module from './Module';
import Table from './Table';
import Tbody from './Tbody';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate
    // Link
} from "react-router-dom";
import Search from './Search';


export default function Main() {
    let history = useNavigate();
    const navi_home = () => {
        history("/")
    }
    return (
        <>
            <div className="main">
                <Routes> 
                    <Route exact path="/" element={<Home />} ></Route>

                    <Route exact path="/allmodules" element={<Module />} ></Route>
                    <Route exact path="/search" element={<Search />} ></Route>

                    {/* <Route exact path="/moduleone" element={ <Table tb_path="moduleone" mod_name="MOdule One" />} ></Route> */}
                    <Route exact path="/moduleone" element={<Table tb_path="moduleone" mod_name="MOdule One" />} >
                        <Route exact path="/moduleone/tab1" element={<Tbody tb_url="https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Morbi arcu libero hello" tb_data="    Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/moduleone/tab2" element={<Tbody tb_url="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" tb_heading="Ut hendrerit est toth lorem" tb_data="    Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/moduleone/tab3" element={<Tbody tb_url="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" tb_heading="Ut hendrerit est tovegh pro" tb_data="Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut venenatis purus." />} ></Route>
                    </Route>
                    
                    <Route exact path="/moduletwo" element={<Table tb_path="moduletwo" mod_name="MOdule Two" />} >
                        <Route exact path="/moduletwo/tab1" element={<Tbody tb_url="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Morbi dd arcu libero" tb_data="Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce
sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/moduletwo/tab2" element={<Tbody tb_url="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" tb_heading="Ut hendrerit ese est toth" tb_data="Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/moduletwo/tab3" element={<Tbody tb_url="https://images.unsplash.com/photo-1458014854819-1a40aa70211c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvd3RofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Ut hendrerit sew est tovegh" tb_data="Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut
venenatis purus." />} ></Route>
                    </Route>
                    
                    <Route exact path="/modulethree" element={<Table tb_path="modulethree" mod_name="MOdule Three" />} >
                        <Route exact path="/modulethree/tab1" element={<Tbody tb_url="https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Morbi uyr arcu lebro" tb_data="Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/modulethree/tab2" element={<Tbody tb_url="https://images.unsplash.com/photo-1609159524764-8b2011efe640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Ut at hendrerir est toth" tb_data="Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/modulethree/tab3" element={<Tbody tb_url="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Ut rti hendrerir est tovegh" tb_data="Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut venenatis purus." />} ></Route>
                    </Route>
                    
                    <Route exact path="/modulefour" element={<Table tb_path="modulefour" mod_name="MOdule Four" />} >
                        <Route exact path="/modulefour/tab1" element={<Tbody tb_url="https://plus.unsplash.com/premium_photo-1661605653366-b1a6a6831cd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Morbi esu arcu lebro" tb_data="Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/modulefour/tab2" element={<Tbody tb_url="https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Ut hendrerir swaes est toth" tb_data="Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/modulefour/tab3" element={<Tbody tb_url="https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Ut hendreri swizxr est tovegh" tb_data="Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut venenatis purus." />} ></Route>
                    </Route>

                    <Route exact path="/modulefive" element={<Table tb_path="modulefive" mod_name="MOdule Five" />} >
                        <Route exact path="/modulefive/tab1" element={<Tbody tb_url="https://plus.unsplash.com/premium_photo-1661611422215-8ed4f10d0b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Morbi liol arcu lebro" tb_data="Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/modulefive/tab2" element={<Tbody tb_url="https://images.unsplash.com/photo-1414872785488-7620d2ae7566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGdyb3d0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Ut hendrerir hgjt est toth" tb_data="Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque." />} ></Route>
                        <Route exact path="/modulefive/tab3" element={<Tbody tb_url="https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyb3d0aCUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" tb_heading="Utrjf ryuy hendrerir est tovegh" tb_data="Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut venenatis purus." />} ></Route>
                    </Route>

                </Routes>
                {/* <i className="fa-solid fa-2x fa-comments chat_icon"></i> */}
                <i onClick={navi_home} className="fa-solid fa-2x fa-house home_icon"></i>

            </div>
        </>
    );
}
