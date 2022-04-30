
import React, { useState } from "react";
import { Container, Button, Image, Row, Table} from "react-bootstrap";
import pic from "../monke.jpeg"
import "./styles.css"






function NavCircleProfile(props) {
    return (
        <Button className="rounded-circle bg-primary justify-content-center align-items-center p-1 h-auto" href="/profile">
            <Image src={pic} roundedCircle className="image-button"/>
        </Button>
    )
}


function ProfilePageChildren(props) {
    return(
        <>
            <button className="btn btn-block btn-primary col-12">Edit profile</button>
            <Container fluid className="border border-primary rounded shadow p-3 justify-content-center">
                <Row className="border mb-3">

                        <img src={pic} className="col-sm-3 col-lg-2 rounded-circle"/>

                    <Container className="col-8">
                        <h1>Name</h1>
                        <Row>
                            <h3 className="col bg-success">
                                Something
                            </h3>
                            <h3 className="col bg-primary">
                                Something else
                            </h3>
                            <h3 className="col bg-danger">
                                Yetti
                            </h3>

                        </Row>
                    </Container>
                </Row>
                <Container className="border border-success">
                    <h1>About me</h1>
                    idk stuff i guess what happens if i keep writing whats the default wrapping or overflow behaviour here? oh ok default is wrap thats cool
                </Container>
                <Container className="border border-success">
                    <h1>Info</h1>
                        <Table striped bordered variant="light">
                            <thead>
                                <th>
                                    #
                                </th>
                                <th>
                                    No. of bitches
                                </th>
                                <th>
                                    Validity
                                </th>
                                <th>
                                    ?
                                </th>
                            </thead>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        ZERO ZILCH NADA
                                    </td>
                                    <td>
                                        VALID AS SHIT
                                    </td>
                                </tr>
                        </Table>
                </Container>
            </Container>
        </>
    );
}


export { NavCircleProfile, ProfilePageChildren};