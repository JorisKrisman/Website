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

const EditDoctor = (props) => {
    ChangeTitle(props.t("Edit Doctor"));

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
        },
        validationSchema: Yup.object({
            first_name: Yup.string(),
            prefix: Yup.string(),
            last_name: Yup.string(),
            date_of_birth: Yup.date(),
            address: Yup.string(),
            house_number: Yup.string(),
            postal_code: Yup.string(),
            city: Yup.string(),
            country: Yup.string(),
            phone_number: Yup.string(),
            phone_number_mobile: Yup.string(),
            email: Yup.string(),
            citizenship_number: Yup.string(),
            insurance: Yup.string(),
            insurance_number: Yup.string(),
            gender: Yup.string(),
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
                        title={props.t("Doctors")}
                        breadcrumbItem={props.t("Edit Doctor")}
                    />

                    <Card>
                        <CardBody>
                            <CardTitle>{props.t("Edit Doctor")}</CardTitle>

                            <Form className="needs-validation" onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("First Name")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("First Name")}
                                                name="first_name"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.first_name && validation.errors.first_name ? true : false}
                                            />
                                            { validation.touched.first_name && validation.errors.first_name ? 
                                            <FormFeedback type="invalid">{ validation.errors.first_name }</FormFeedback> : null }
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
                                            <Label>{props.t("Last Name")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Last Name")}
                                                name="last_name"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.last_name && validation.errors.last_name ? true : false}
                                            />
                                            { validation.touched.last_name && validation.errors.last_name ? 
                                            <FormFeedback type="invalid">{ validation.errors.last_name }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Date of Birth")}</Label>
                                            <Input
                                                type="date"
                                                placeholder={props.t("Date of Birth")}
                                                name="date_of_birth"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.date_of_birth && validation.errors.date_of_birth ? true : false}
                                            />
                                            { validation.touched.date_of_birth && validation.errors.date_of_birth ? 
                                            <FormFeedback type="invalid">{ validation.errors.date_of_birth }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
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
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Gender")}</Label>
                                            <Input
                                                type="select"
                                                placeholder={props.t("Gender")}
                                                name="gender"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.gender && validation.errors.gender ? true : false}
                                            >
                                                <option></option>
                                                <option value={"male"}>{props.t("Male")}</option>
                                                <option value={"female"}>{props.t("Female")}</option>
                                            </Input>
                                            { validation.touched.gender && validation.errors.gender ? 
                                            <FormFeedback type="invalid">{ validation.errors.gender }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{props.t("Insurance")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Insurance")}
                                                name="insurance"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.insurance && validation.errors.insurance ? true : false}
                                            />
                                            { validation.touched.insurance && validation.errors.insurance ? 
                                            <FormFeedback type="invalid">{ validation.errors.insurance }</FormFeedback> : null }
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
                                            <Label>{props.t("Email Address")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Email Address")}
                                                name="email"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.email && validation.errors.email ? true : false}
                                            />
                                            { validation.touched.email && validation.errors.email ? 
                                            <FormFeedback type="invalid">{ validation.errors.email }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Phone Number")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Phone Number")}
                                                name="phone_number"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.phone_number && validation.errors.phone_number ? true : false}
                                            />
                                            { validation.touched.phone_number && validation.errors.phone_number ? 
                                            <FormFeedback type="invalid">{ validation.errors.phone_number }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Mobile Phone Number")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Mobile Phone Number")}
                                                name="phone_number_mobile"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.phone_number_mobile && validation.errors.phone_number_mobile ? true : false}
                                            />
                                            { validation.touched.phone_number_mobile && validation.errors.phone_number_mobile ? 
                                            <FormFeedback type="invalid">{ validation.errors.phone_number_mobile }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="8">
                                        <FormGroup>
                                            <Label>{props.t("Address")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Address")}
                                                name="address"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.address && validation.errors.address ? true : false}
                                            />
                                            { validation.touched.address && validation.errors.address ? 
                                            <FormFeedback type="invalid">{ validation.errors.address }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("House Number")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("House Number")}
                                                name="house_number"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.house_number && validation.errors.house_number ? true : false}
                                            />
                                            { validation.touched.house_number && validation.errors.house_number ? 
                                            <FormFeedback type="invalid">{ validation.errors.house_number }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Zipcode")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Zipcode")}
                                                name="postal_code"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.postal_code && validation.errors.postal_code ? true : false}
                                            />
                                            { validation.touched.postal_code && validation.errors.postal_code ? 
                                            <FormFeedback type="invalid">{ validation.errors.postal_code }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Settlement")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Settlement")}
                                                name="city"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.city && validation.errors.city ? true : false}
                                            />
                                            { validation.touched.city && validation.errors.city ? 
                                            <FormFeedback type="invalid">{ validation.errors.city }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{props.t("Country")}</Label>
                                            <Input
                                                type="text"
                                                placeholder={props.t("Country")}
                                                name="country"
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                invalid={validation.touched.country && validation.errors.country ? true : false}
                                            />
                                            { validation.touched.country && validation.errors.country ? 
                                            <FormFeedback type="invalid">{ validation.errors.country }</FormFeedback> : null }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label>{props.t("Working Days")}</Label>

                                    <Col>
                                        <FormGroup>
                                            <Label>{props.t("Monday")}</Label>
                                            <br />
                                            <Input 
                                                type="checkbox"
                                                
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>{props.t("Tuesday")}</Label>
                                            <br />
                                            <Input 
                                                type="checkbox"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>{props.t("Wednesday")}</Label>
                                            <br />
                                            <Input 
                                                type="checkbox"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>{props.t("Thursday")}</Label>
                                            <br />
                                            <Input 
                                                type="checkbox"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>{props.t("Friday")}</Label>
                                            <br />
                                            <Input 
                                                type="checkbox"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>{props.t("Saturday")}</Label>
                                            <br />
                                            <Input 
                                                type="checkbox"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>{props.t("Sunday")}</Label>
                                            <br />
                                            <Input 
                                                type="checkbox"
                                            />
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

EditDoctor.propTypes = {
    t: PropTypes.any
};
  
export default withTranslation()(EditDoctor);