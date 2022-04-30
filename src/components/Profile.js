import { _toEscapedUtf8String } from "@ethersproject/strings";
import React, { useState } from "react";
import { Container, Button, Image} from "react-bootstrap";
import pic from "../monke.jpeg"
import "./styles.css"



const test ={
    height: "40px",
    transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
}



function NavCircleProfile(props) {
    const[hovering, setHovering] =  useState(false);
    return (
        <Button className="rounded-circle bg-primary justify-content-center align-items-center p-1 h-auto">
            <Image src={pic} roundedCircle className="image-button"/>
        </Button>
    )
}


export {NavCircleProfile};