import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "../components/Navbar";
import DishItem from "../components/Specials/DishItem";
import Cart from "../components/Specials/Cart";
import Api from "../api";
import Home from "./Home";
import Courses from "../components/Specials/Courses";
import Searchbar from "../components/Searchbar";
import Button from "../components/Button";

export default function Screens(props) {
    return (
        <div className='container'>
            <Router>
                <Navbar {...{
                    brandName: 'Restaurant Menu',
                    brandLink: '/',
                    links: [
                        {name: "Home", link: '/', onClick: () => console.log("Home")},
                        {name: "Courses", link: '/courses', onClick: () => console.log("courses")},
                        {
                            name: "Today's Special",
                            link: '/todays_special',
                            onClick: () => console.log("Today's Special")
                        },
                        {name: "Cart", link: '/card', onClick: () => console.log("Cart")},
                        {name: "Api", link: '/api', onClick: () => console.log("Api")},
                    ],
                    children: <>
                        <Searchbar/>
                        <Button {...{label: "Login"}}/>
                        <Button {...{label: "Signup"}}/>
                    </>
                }} />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/courses' component={Courses}/>
                    <Route path='/dish/:dishName' component={DishItem}/>
                    <Route path='/cart' component={Cart}/>
                    <Route exact path='/api' component={Api}/>
                </Switch>
            </Router>
        </div>
    )
}