import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Page } from "./ComponentFiller";



const DataContext = React.createContext({});


function App() {
    const [currentId, setCurrentId] = React.useState(0);
    const newId = () => {
        let newId = currentId;
        setCurrentId(currentId + 1);
        return newId;
    }
    return (
        <Router>
            <DataContext.Provider value={{newId}}>
                <Navbar/>
                <Page/>
                <Routes>
                </Routes>
            </DataContext.Provider>
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

export {App, DataContext};