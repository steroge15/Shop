import React from "react";
import NavBar from "./NavBar";
import errorimage from '../assets/errorimage.jpeg'

const ErrorPage = () => {
    // Logic goes here

    return (
        <>
        <NavBar/>
        <div>
            <img src={errorimage} alt="" />
            <h1>WEWE GEN Z WACHA FUJO! Click Duka.com URUDI NYUMBANI (HOMEPAGE)</h1>
        </div>
        </>
    )
}

export default ErrorPage