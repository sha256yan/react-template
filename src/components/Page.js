import React from "react";
import { Container, Col, Row, Card, Button, Image, Accordion , ToggleButton} from "react-bootstrap";
import "../overrides.css"

import pic from "../monke.jpeg"


const hiddenDiv ={
    "transition": "smooth"
}



function splitText(text, numChars) {
    const breakpoint = text.length > numChars ? numChars : text.length;
    return [text.slice(0, breakpoint), text.slice(breakpoint)];
}


function Post(props) {
    //profile pic - text - like/comment
    const [showing, setShowing] = React.useState(false);

    const handleTextCollapse = () => {
        setShowing(!showing)
    }


    return (
        <Container className="h-50 p-3 mb-3 border justify-content-start align-items-start smooth">
            <Row>
                <Container className="col-1 justify-content-start border-right">
                    <Image src={pic} roundedCircle className="mw-100"/>
                </Container>
                <div className="col-10 border-bottom">
                    <div className="text-wrap">
                        {props.title}
                    </div>
                </div>
            </Row>
            <Container className="p-3">
                <Button onClick={handleTextCollapse}>
                    {showing ? "See less..." : "See more..."}
                </Button>
                {showing ? <div style={hiddenDiv}>{props.text}</div> : null}
            </Container>
        </Container>
    )
}



/*
function Post(props) {
    return (
        <div className="container bg-light border-top border-bottom p-3 mb-5 rounded-pill">
            <Row>
                    <Image src={pic} roundedCircle className="col-1"/>
                    <div className="col-11 h-20 overflow-hidden">
                        bruh how does this work lmao bruh how does this work lmao bruh how doe does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how does this work lmao bru 
                    </div>
            </Row>
        </div>
        
    )
}

*/
const text1 = "test text"
const text2 = "bruh how does this work lmao bruh how does this work lmao bruh how doe \
does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh \
how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh \
how does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh\
 how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how\
  does this work lmao bruh how does this work lmao bru \
"

const title = "HEHEHEHEH"


function Page(props) {
    return (
        <Container fluid className="container-fluid bg-primary justify-content-center p-3">
            <Post text={text1} title={title}/>
            <Post text={text2} title={title}/>
        </Container>
    )
}

export { Page };