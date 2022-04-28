import React from "react";
import { CustomNavbar } from "./components/Navbar"
import { CustomForm, EmailGroup, PasswordGroup } from "./components/Form";
import { CustomModal } from "./components/Modal";
import { Page, Post } from "./components/Page"
import pic from "./monke.jpeg"




/* ---------------------------------------------------------------------     NAV     ----------------------------------------------------------------- */



//SAMPLE DATA:


const navItems = ["Test1", "Test2", "Test3"]
const navTitle = "Test Title";

const Email = () => <EmailGroup label="Email" placeholder="Enter your email..." comment="We will never give anyone else access to your email."/>;
const Password = () => <PasswordGroup label="Password" placeholder="Enter your password"/>;
const ConfirmPassword = () => <PasswordGroup label="Confirm Password" placeholder="Re-enter your password"/>;
const signUpChildren = [<Email/>, <Password/>, <ConfirmPassword/>];
const signInChildren = [<Email/>, <Password/>];


const signUpProp = {
    buttonLabel: "Sign Up",
    title: "Sign up form",
    body: <CustomForm children={signUpChildren}/>,
}


const signInProp = {
    buttonLabel: "Sign In",
    title: "Sign in form",
    body: <CustomForm children={signInChildren}/>,
}



//COMPONENT DECLERATIONS:

const SignUpModal = () => <CustomModal props={signUpProp}/>;
const SignInModal = () => <CustomModal props={signInProp}/>;
const navButtons = [<SignUpModal/>, <SignInModal/>]
const Navbar = () => <CustomNavbar navItems={navItems} navTitle={navTitle} navButtons={navButtons}/>;



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






export {Navbar, SignUpModal, SignInModal, PostsPage};