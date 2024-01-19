import PropTypes from "prop-types";
import { ChangeTitle } from "../../helpers/title_helper";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import i18n
import { withTranslation } from "react-i18next";
import { Badge, Button, Card, CardBody, CardTitle, Col, Container, FormGroup, Input, Label, Row, Spinner, Table } from "reactstrap";
import Pagination from "../../common/pagination";

const AppointmentList = (props) => {
    const [ appointments, setAppointments ] = useState();
    const [ total, setTotal ] = useState(2);
    const [ fetchCount, setFetchCount ] = useState(10);
    const [ offset, setOffset ] = useState(1);
    const [ searchTerm, setSearchTerm ] = useState();

    ChangeTitle(props.t("Appointment List"))

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value !== "" ? e.target.value : null);
    }

    const handleArchived = (e) => {
        setArchived(e.target.checked);
    }

    useEffect(() => {
        setTimeout(() => {
            setAppointments([
                {
                    uuid: "192489621586151512171",
                    name: "Joris Krisman",
                    doctor: "Dr. Bert",
                    date: "2023-11-20"
                },
                {
                    uuid: "192489621586156727512171",
                    name: "John Doe",
                    doctor: "Dr. Jan",
                    date: "2024-11-20"
                },
            ])
        }, 1000)
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs
                        title={props.t("Appointments")}
                        breadcrumbItem={props.t("Appointments List")}
                    />

                    <Card>
                        <CardBody>
                            <Row className="mb-2">
                                <Col md={6}>
                                    <CardTitle>{props.t("Appointments List")}</CardTitle>
                                </Col>
                                <Col>
                                <Row>
                                    <Col md={3}>
                                    </Col>
                                    <Col md={9}>
                                    <FormGroup>
                                        <Label for="searchTerm">
                                            {props.t("Search Term")}
                                        </Label>
                                        <Input type="text" placeholder={props.t("Search")} name="searchTerm" onChange={handleSearchTerm} />
                                    </FormGroup>
                                    </Col>
                                </Row>
                                </Col>
                            </Row>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>{props.t("Name")}</th>
                                        <th>{props.t("Doctor")}</th>
                                        <th>{props.t("Date")}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { appointments != null ? 
                                        <>
                                            { appointments.map((appointment, i) => (
                                                <tr className="align-items-baseline" key={`appointment_${i}`}>
                                                    <td>{appointment.name}</td>
                                                    <td>{appointment.doctor}</td>
                                                    <td>{appointment.date}</td> 
                                                    <td>
                                                        <a href={`/administrator/appointments/${appointment.uuid}`} className="btn btn-rounded btn-sm btn-primary">Details</a>
                                                    </td>
                                                </tr>
                                            )) }
                                        </> : 
                                        <tr>
                                            <td colSpan={4}>
                                                <div className="d-flex justify-content-center align-items-baseline">
                                                    <Spinner className="ms-2" color="primary" />
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </Table>

                            <Row>
                                <Col md={6}>
                                    <a href="/administrator/appointments/create" className="btn btn-lg btn-success">{props.t("Create Appointment")}</a>
                                </Col>
                                <Col md={6}>
                                <Pagination changePageCurrent={(v) => { setOffset(v) }} pagesTotal={Math.ceil(total/fetchCount)} />
                                </Col>
                            </Row>
                            
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

AppointmentList.propTypes = {
    t: PropTypes.any
};
  
export default withTranslation()(AppointmentList);
  
