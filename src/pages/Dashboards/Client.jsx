import PropTypes from "prop-types";
import { ChangeTitle } from "../../helpers/title_helper";
import React, { useEffect, useState } from "react";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import i18n
import { withTranslation } from "react-i18next";
import { Button, Card, CardBody, CardTitle, Col, Container, Row, Table } from "reactstrap";
import AppointmentChart from "./charts/appointmentChart";
import Pagination from "../../common/pagination";

const ClientDashboard = (props) => {
    ChangeTitle(props.t("Dashboard"));

    const [ fetchCount, setFetchCount ] = useState(10);
    const [ offset, setOffset ] = useState(0);
    const [ total, setTotal ] = useState(82);
    
    const series = [
        {
            name: props.t("Appointments"),
            data: [ 16, 12, 17, 18, 11, 12, 18 ]
        },
        /*{
            name: props.t("Doctors"),
            data: [ 2, 2, 2, 2, 1, 2, 2 ]
        },*/
    ]

    const xaxis = {
        type: "datetime",
        categories: [
            "2023-11-07",
            "2023-11-08",
            "2023-11-09",
            "2023-11-10",
            "2023-11-11",
            "2023-11-12",
            "2023-11-13",
        ]
    }

    return (
        <>
            <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs
                        title={props.t("Dashboards")}
                        breadcrumbItem={props.t("Dashboard")}
                    />
                    
                    <Row>
                        <Col md="6">
                            <Card className="mini-stats-wid">
                                <CardBody>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted fw-medium">
                                            {props.t("Upcoming Appointment")}
                                        </p>
                                        <h4 className="mb-0">2023-11-28 10:30</h4>
                                    </div>
                                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span className="avatar-title rounded-circle bg-primary">
                                        <i className={ `bx font-size-24 bx-calendar-event` }></i>
                                        </span>
                                    </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="mini-stats-wid">
                                <CardBody>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted fw-medium">
                                            {props.t("Request Information")}
                                        </p>
                                            <Button color="primary" className="btn-sm">{props.t("Request Information")}</Button>
                                    </div>
                                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span className="avatar-title rounded-circle bg-primary">
                                        <i className={ `bx font-size-24 bx-info-circle` }></i>
                                        </span>
                                    </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>                        
                    </Row>
                    <Row>
                        {/* <Col md="6">
                            <Card>
                                <CardBody>
                                    <CardTitle>{props.t("Appointments")}</CardTitle>
                                    <AppointmentChart height={"350px"} series={series} xaxis={xaxis} />
                                </CardBody>
                            </Card>
                        </Col> */}
                        <Col md="12">
                            <Card>
                                <CardBody>
                                <CardTitle>{props.t("Upcoming Appointments")}</CardTitle>

                                <Table className="align-middle table-nowrap">
                                    <thead>
                                        <tr>
                                            <th>{props.t("Doctor")}</th>
                                            <th>{props.t("Date")}</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-items-baseline">
                                            <td>Brett Anderson</td>
                                            <td>2023-11-28 10:30</td>
                                            <td>
                                                <a href="#" className="btn btn-primary btn-rounded btn-sm">{props.t("Details")}</a>
                                            </td>
                                        </tr>
                                        <tr className="align-items-baseline">
                                            <td>Brett Anderson</td>
                                            <td>2023-12-12 14:15</td>
                                            <td>
                                                <a href="#" className="btn btn-primary btn-rounded btn-sm">{props.t("Details")}</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            </React.Fragment>
        </>
    )
}

ClientDashboard.propTypes = {
    t: PropTypes.any
};
  
export default withTranslation()(ClientDashboard);
  
