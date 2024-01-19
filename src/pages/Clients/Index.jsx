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

const ClientsList = (props) => {
    const [ clients, setClients ] = useState();
    const [ total, setTotal ] = useState(2);
    const [ fetchCount, setFetchCount ] = useState(10);
    const [ offset, setOffset ] = useState(1);
    const [ searchTerm, setSearchTerm ] = useState();

    ChangeTitle(props.t("Client List"))

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value !== "" ? e.target.value : null);
    }

    const handleArchived = (e) => {
        setArchived(e.target.checked);
    }

    useEffect(() => {
        setTimeout(() => {
            setClients([
                {
                    uuid: "192489621586151512171",
                    name: "Quinn Hegeman",
                    dob: "2004-11-20",
                    archived: false
                },
                {
                    uuid: "192489621586156727512171",
                    name: "John Doe",
                    dob: "1980-05-22",
                    archived: true
                },
            ])
        }, 1000)
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs
                        title={props.t("Clients")}
                        breadcrumbItem={props.t("Client List")}
                    />

                    <Card>
                        <CardBody>
                            <Row className="mb-2">
                                <Col md={6}>
                                    <CardTitle>{props.t("Client List")}</CardTitle>
                                </Col>
                                <Col>
                                <Row>
                                    <Col md={3}>
                                    <FormGroup>
                                        <Label for="searchTerm">
                                            {props.t("Archived")}
                                        </Label>
                                        <br />
                                        <Input type="checkbox" placeholder={props.t("Archived")} name="archived" onChange={handleArchived} />
                                    </FormGroup>
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
                                        <th>{props.t("Date of Birth")}</th>
                                        <th>{props.t("Archived")}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { clients != null ? 
                                        <>
                                            { clients.map((client, i) => (
                                                <tr className="align-items-baseline" key={`client_${i}`}>
                                                    <td>{client.name}</td>
                                                    <td>{client.dob}</td>
                                                    <td>
                                                        {client.archived ? 
                                                        <Badge color="danger" className="badge-soft" pill>{props.t("Yes")}</Badge> :
                                                        <Badge color="success" className="badge-soft" pill>{props.t("No")}</Badge>
                                                        }
                                                    </td>
                                                    <td>
                                                        <a href={`/administrator/clients/${client.uuid}`} className="btn btn-rounded btn-sm btn-primary">Details</a>
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
                                    <a href="/administrator/clients/create" className="btn btn-lg btn-success">{props.t("Create Client")}</a>
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

ClientsList.propTypes = {
    t: PropTypes.any
};
  
export default withTranslation()(ClientsList);
  