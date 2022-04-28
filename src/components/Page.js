import React, { useContext } from "react";
import { Container, Row, Image} from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";





function PostCollapse(props) {
    const {postId, showing, handlePostCollapseClick, text, showingButtonLabel, notShowingButtonLabel} = props.params;

    return (
        <Container className="p-3">
            <button
                className="btn btn-primary"
                type="button" data-bs-toggle="collapse"
                data-bs-target={`#${postId}`}
                aria-expanded={showing}
                aria-controls={postId}
                onClick={handlePostCollapseClick}
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
    const { userName, title, text, collapsedParams, profilePicSrc } = props.params;
    //profile pic - text - like/comment
    const [showing, setShowing] = React.useState(false);
    const handlePostCollapseClick = () => {
        setShowing(!showing)
    }

    /*
        Props: userName, title, text
    */
   const statefulCollapseParams = Object.assign({showing, handlePostCollapseClick}, collapsedParams);

    return (
        <Container className="p-3 mb-3 border justify-content-start">
            <Row>
                <Container fluid className="col-2 justify-content-center border-right">
                    <Image src={profilePicSrc} roundedCircle className="mw-100"/>
                    <div className="text-center">
                        {userName}
                    </div>
                </Container>
                <div className="col-10 border-bottom">
                    <div className="text-wrap">
                        {title}
                    </div>
                </div>
            </Row>
            <PostCollapse params={statefulCollapseParams}/>


        </Container>
    )
}





//postId needs to be alphabetic string 

function Page(props) {

    return (
        <Container fluid className="container-fluid bg-light justify-content-center p-3">
            {props.children}
        </Container>
    )
}

export { Page, Post };