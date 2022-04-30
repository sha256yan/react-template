import React from "react";
import { CustomNavbar } from "./components/Navbar"
import { CustomForm, EmailGroup, PasswordGroup, PasswordConfirmGroup } from "./components/Form";
import { NavCircleProfile } from "./components/Profile";
import { AuthButton } from "./components/AuthButtons";
import { Page, Post } from "./components/Page"
import pic from "./monke.jpeg"

import { AuthProvider } from "./hooks/AuthContext";




/* ---------------------------------------------------------------------     NAV     ----------------------------------------------------------------- */



//SAMPLE DATA:


const navItems = ["Profile", "Test2", "Test3"]
const navTitle = "PiGen";

const Email = () => <EmailGroup label="Email" placeholder="Enter your email..." comment="We will never give anyone else access to your email."/>;
const Password = () => <PasswordGroup label="Password" placeholder="Enter your password"/>;
const ConfirmPassword = () => <PasswordConfirmGroup/>;
const signUpChildren = [<Email/>, <ConfirmPassword/>];
const signInChildren = [<Email/>, <Password/>];


const signUpProp = {
    buttonLabel: "Sign Up",
    modalTitle: "Sign up form",
    modalBody: <CustomForm children={signUpChildren}/>,
}


const signInProp = {
    buttonLabel: "Sign In",
    modalTitle: "Sign in form",
    modalBody: <CustomForm children={signInChildren}/>,
}


const signOutProp = {
    buttonLabel: "Sign out"
}



//COMPONENT DECLERATIONS:

const SignUpButton = () => <AuthButton params={signUpProp}/>;
const SignInButton = () => <AuthButton params={signInProp}/>;
const SignOutButton = () => <AuthButton params={signOutProp}/>;
const getNavButtons = (emailAuth) => emailAuth ? [<NavCircleProfile/>, <SignOutButton/>]: [<SignUpButton/>, <SignInButton/>]
const Navbar = () => 
    <AuthProvider>
        <CustomNavbar navItems={navItems} navTitle={navTitle} getNavButtons={getNavButtons}/>
    </AuthProvider>;



/* ---------------------------------------------------------------------    POSTS PAGE    ----------------------------------------------------------------- */


//SAMPLE DATA:




const post1Params = {
    userName: "yodel333",
    title: "this is a title",
    profilePicSrc: pic,
    collapsedParams: {
        postId: "p0",
        text: "test text",
        showingButtonLabel: "See less...",
        notShowingButtonLabel: "See more..."
    }
}


const post2Params = {
    userName: "personsName",
    title: "Another title!",
    profilePicSrc: pic,
    collapsedParams: {
        postId: "p1",
        text: "bruh how does this work lmao bruh how does this work lmao bruh how doe \
        does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh \
        how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh \
        how does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh\
         how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how\
          does this work lmao bruh how does this work lmao bru \
        ",
        showingButtonLabel: "See less...",
        notShowingButtonLabel: "See more..."
    }
}




//COMPONENT DECLERATIONS:

const Post1 = () => <Post params={post1Params}/>;
const Post2 = () => <Post params={post2Params}/>;

const pageChildren = [<Post1/>, <Post2/>];
const PostsPage = () => <Page children={pageChildren}/>;



/* ---------------------------------------------------------------------    POSTS PAGE    ----------------------------------------------------------------- */






export {Navbar, SignUpButton, SignInButton, PostsPage};