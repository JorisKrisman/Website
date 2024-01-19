import PropTypes from "prop-types";
import { ChangeTitle } from "../../helpers/title_helper";
import React from "react";
import * as Yup from "yup";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import i18n
import { withTranslation } from "react-i18next";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { useFormik } from "formik";

const EditAppointment = (props) => {
    ChangeTitle(props.t("Edit Appointment"));

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
        },
        validationSchema: Yup.object({
            first_name_client: Yup.string().required(props.t("This field is required")), //
            prefix: Yup.string(), //
            last_name_client: Yup.string().required(props.t("This field is required")), //
            insurance_number: Yup.string().required(props.t("This field is requried")), //
            date_of_consult: Yup.date().required(props.t("This field is required")), //
            name_doctor: Yup.string().required(props.t("This field is required")),
        }),
        onChange: (values) => {
            console.log(values)
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                    <Breadcrumbs
                        title={props.t("Appointments")}
                        breadcrumbItem={props.t("Edit Appointment")}
                    />

                    <Card>
                        <CardBody>
                            <CardTitle>{props.t("Edit Appointment")}</CardTitle>

                            <Form className="needs-validation" onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("First Name Appointment")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("First Name Appointment")}
                                                name="first_name_client"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.first_name_client && validation.errors.first_name_client ? true : false}
                                            />
                                            { validation.touched.first_name_client && validation.errors.first_name_client ? 
                                            <FormFeedback type="invalid">{ validation.errors.first_name_client }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Prefix")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Prefix")}
                                                name="prefix"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.prefix && validation.errors.prefix ? true : false}
                                            />
                                            { validation.touched.prefix && validation.errors.prefix ? 
                                            <FormFeedback type="invalid">{ validation.errors.prefix }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Last Name Appointment")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Last Name Appointment")}
                                                name="last_name_client"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.last_name_client && validation.errors.last_name_client ? true : false}
                                            />
                                            { validation.touched.last_name_client && validation.errors.last_name_client ? 
                                            <FormFeedback type="invalid">{ validation.errors.last_name_client }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{props.t("Citizenship Number")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Citizenship Number")}
                                                name="citizenship_number"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.citizenship_number && validation.errors.citizenship_number ? true : false}
                                            />
                                            { validation.touched.citizenship_number && validation.errors.citizenship_number ? 
                                            <FormFeedback type="invalid">{ validation.errors.citizenship_number }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{props.t("Insurance Number")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Insurance Number")}
                                                name="insurance_number"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.insurance_number && validation.errors.insurance_number ? true : false}
                                            />
                                            { validation.touched.insurance_number && validation.errors.insurance_number ? 
                                            <FormFeedback type="invalid">{ validation.errors.insurance_number }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Name Doctor")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Name Doctor")}
                                                name="name_doctor"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.name_doctor && validation.errors.name_doctor ? true : false}
                                            />
                                            { validation.touched.name_doctor && validation.errors.name_doctor ? 
                                            <FormFeedback type="invalid">{ validation.errors.name_doctor }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Date of Consult")}</Label>
                                            <Input
                                                type="date"
                                                placeholder={props.t("Date of consult")}
                                                name="date_of_consult"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.date_of_consult && validation.errors.date_of_consult ? true : false}
                                            />
                                            { validation.touched.date_of_consult && validation.errors.date_of_consult ? 
                                            <FormFeedback type="invalid">{ validation.errors.date_of_consult }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>                
                                <Row>
                                    <Col>
                                        <Button type="submit" className="btn btn-primary">
                                            { props.t("Save") }
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

EditAppointment.propTypes = {
    t: PropTypes.any
};
  
export default withTranslation()(EditAppointment);