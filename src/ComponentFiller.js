import React from "react";
import { CustomNavbar } from "./components/Navbar"
import { CustomForm } from "./components/Form";
import { CustomModal } from "./components/Modal";
import { Page } from "./components/Page"
import { Row } from "react-bootstrap";



const navItems = ["Test1", "Test2", "Test3"]
const navTitle = "Test Title";






const signUpProp = {
    buttonLabel: "Sign Up",
    title: "Sign up form",
    body: <CustomForm/>,
    positiveResponse: "Submit",
    negativeResponse: "Cancel"
}


const signInProp = {
    buttonLabel: "Sign In",
    title: "Sign in form",
    body: <CustomForm/>,
    positiveResponse: "Submit",
    negativeResponse: "Cancel"
}

const SignUpModal = () => <CustomModal props={signUpProp}/>;
const SignInModal = () => <CustomModal props={signInProp}/>;

const navButtons = [<SignUpModal/>, <SignInModal/>]

const Navbar = () => <CustomNavbar navItems={navItems} navTitle={navTitle} navButtons={navButtons}/>;




export {Navbar, SignUpModal, SignInModal, Page};