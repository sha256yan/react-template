import React, { useContext } from "react";
import { Container, Row, Image} from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";

import pic from "../monke.jpeg"



function CollapseButton(props) {
    const {postId, showing, handleCollapseButtonClick, text, showingButtonLabel, notShowingButtonLabel} = props.params;

    return (
        <Container className="p-3">
            <button
                className="btn btn-primary"
                type="button" data-bs-toggle="collapse"
                data-bs-target={`#${postId}`}
                aria-expanded={showing}
                aria-controls={postId}
                onClick={handleCollapseButtonClick}
                >
                    
                {showing ? showingButtonLabel : notShowingButtonLabel}
            </button>
            <div className="collapse" id={postId}>
            <div className="card card-body">
                {text}
            </div>
            </div>
        </Container>
    );
}




function Post(props) {
    //profile pic - text - like/comment
    const [showing, setShowing] = React.useState(false);
    const handleCollapseButtonClick = () => {
        setShowing(!showing)
    }

    /*
        Props: userName, title, text
    */
   const statefulCollapseParams = Object.assign({showing, handleCollapseButtonClick}, props.collapseParams);

    return (
        <Container className="p-3 mb-3 border justify-content-start">
            <Row>
                <Container fluid className="col-2 justify-content-center border-right">
                    <Image src={pic} roundedCircle className="mw-100"/>
                    <div className="text-center">
                        {props.userName}
                    </div>
                </Container>
                <div className="col-10 border-bottom">
                    <div className="text-wrap">
                        {props.title}
                    </div>
                </div>
            </Row>
            <CollapseButton params={statefulCollapseParams}/>


        </Container>
    )
}


const text1 = "test text"
const text2 = "bruh how does this work lmao bruh how does this work lmao bruh how doe \
does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh \
how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh \
how does this work lmao bruh how does this work lmao bru bruh how does this work lmao bruh\
 how does this work lmao bruh how does this work lmao bruh how does this work lmao bruh how\
  does this work lmao bruh how does this work lmao bru \
"

const title = "HEHEHEHEH"

const post1CollapseParams = {
    postId: "p0",
    text: text1,
    showingButtonLabel: "See less...",
    notShowingButtonLabel: "See more..."
}

const post2CollapseParams = {
    postId: "p1",
    text: text2,
    showingButtonLabel: "See less...",
    notShowingButtonLabel: "See more..."
}


//postId needs to be alphabetic string 

function Page(props) {
    const test = useContext(DataContext);



    return (
        <Container fluid className="container-fluid bg-light justify-content-center p-3">
            <Post text={text1} title={title} userName="yodel" collapseParams={post1CollapseParams}/>
            <Post text={text2} title={title} userName="Hewhoremains" collapseParams={post2CollapseParams}/>
        </Container>
    )
}

export { Page };