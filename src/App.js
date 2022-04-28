import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, PostsPage } from "./ComponentFiller";





function App() {
    return (
        <Router>
            <Navbar/>
            <PostsPage/>
            <Routes>
            </Routes>
        </Router>
    )
}


/*
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/governance" element={<Governance />}></Route>
                    <Route exact path="/transaction" element={<Transaction />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/profile" element={<Profile />}></Route>
                </Routes>
*/

export {App};