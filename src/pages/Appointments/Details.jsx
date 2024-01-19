import PropTypes from "prop-types";
import { ChangeTitle } from "../../helpers/title_helper";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import i18n
import { withTranslation } from "react-i18next";
import { Badge, Button, Card, CardBody, CardTitle, Col, Container, Row, Spinner, Table } from "reactstrap";
import Pagination from "../../common/pagination";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const AppointmentDetails = (props) => {
    const { uuid } = useParams();
    const [ appointment, setAppointment ] = useState();

    ChangeTitle(props.t("Appointment Details"))

    useEffect(() => {
        console.log(uuid);

        setTimeout(() => {
            setAppointment({
                uuid: "192489621586151512171",
                name: "Joris Krisman",
                doctor: "Dr. Bert",
                date: "2023-11-20"
            })
        }, 1000)
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs
                        title={props.t("Appointment")}
                        breadcrumbItem={props.t("Appointment Details")}
                    />

                    { appointment != null ? 
                    <Row>
                        <Col md={6}>
                        <Card>
                            <CardBody>
                                <CardTitle>{props.t("Appointment Details")}</CardTitle>

                                <Table>
                                    <tbody>
                                        <tr>
                                            <th>{props.t("Name")}</th>
                                            <td>{appointment.name}</td>
                                        </tr>
                                        <tr>
                                            <th>{props.t("Doctor")}</th>
                                            <td>{appointment.doctor}</td>
                                        </tr>
                                        <tr>
                                            <th>{props.t("Date")}</th>
                                            <td>{appointment.date}</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <a className={"btn btn-lg btn-rounded btn-primary"} href={`/administrator/appointments/${appointment.uuid}/edit`}>
                                    <i className="bx bx-pencil"></i>{props.t("Edit appointment")}
                                </a>
                                <a className={"btn btn-lg btn-rounded btn-danger"} onClick={() => {console.log("Disallow")}}>
                                    <i className="bx bx-pencil"></i>{props.t("Disallow Login")}
                                </a>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mini-stats-wid">
                                <CardBody>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted fw-medium">
                                            {props.t("Aankomende afspraak")}
                                        </p>
                                        <h4 className="mb-0">2023-11-20 13:00</h4>
                                    </div>
                                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span className="avatar-title rounded-circle bg-primary">
                                        <i className={ `bx font-size-24 bx-calendar` }></i>
                                        </span>
                                    </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mini-stats-wid">
                                <CardBody>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <textarea className="text-muted fw-medium">
                                            {props.t("Notities")}
                                        </textarea>
                                    </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    : <Card><CardBody><Spinner className="ms-2" color="primary" /></CardBody></Card> }
                    
                </Container>
            </div>
        </React.Fragment>
    )
}

AppointmentDetails.propTypes = {
    t: PropTypes.any
};
  
export default withTranslation()(AppointmentDetails);