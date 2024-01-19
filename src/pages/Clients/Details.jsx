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

const ClientDetails = (props) => {
    const { uuid } = useParams();
    const [ client, setClient ] = useState();

    ChangeTitle(props.t("Client Details"))

    useEffect(() => {
        console.log(uuid);

        setTimeout(() => {
            setClient({
                uuid: "192489621586151512171",
                name: "Quinn Hegeman",
                dob: "2004-11-20",
                archived: false
            })
        }, 1000)
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs
                        title={props.t("Clients")}
                        breadcrumbItem={props.t("Client Details")}
                    />

                    { client != null ? 
                    <Row>
                        <Col md={6}>
                        <Card>
                            <CardBody>
                                <CardTitle>{props.t("Client Details")}</CardTitle>

                                <Table>
                                    <tbody>
                                        <tr>
                                            <th>{props.t("Name")}</th>
                                            <td>{client.name}</td>
                                        </tr>
                                        <tr>
                                            <th>{props.t("Date of Birth")}</th>
                                            <td>{client.dob}</td>
                                        </tr>
                                        <tr>
                                            <th>{props.t("Archived")}</th>
                                            <td>{client.archived ? "true" : "false"}</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <a className={"btn btn-lg btn-rounded btn-primary"} href={`/administrator/clients/${client.uuid}/edit`}>
                                    <i className="bx bx-pencil"></i>{props.t("Edit Client")}
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
                                        <h4 className="mb-0">2023-12-03 13:00</h4>
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
                    </Row>
                    : <Card><CardBody><Spinner className="ms-2" color="primary" /></CardBody></Card> }
                    
                </Container>
            </div>
        </React.Fragment>
    )
}

ClientDetails.propTypes = {
    t: PropTypes.any
};
  
export default withTranslation()(ClientDetails);
  