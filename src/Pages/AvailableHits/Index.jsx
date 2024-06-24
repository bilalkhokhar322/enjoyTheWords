import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Form, FormGroup, Input, Row, Spinner } from "reactstrap";
import HeadingText from "../../Shared/MainHeading/Index";
const AvailableHitsUsers = () => {
  const formValidation = Yup.object().shape({
    count: Yup.string().required("Please enter the list number"),
  });
  const { values, handleSubmit, errors, handleChange, touched, setFieldValue } =
    useFormik({
      initialValues: {
        count: 0,
      },
      validationSchema: formValidation,
      onSubmit(values) {},
    });

  return (
    <>
      <HeadingText className={"text-white"} Text={"Control User List"} />
      <Col md={12} className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg={5} md={8} className="">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                <Input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  name="count"
                  onChange={handleChange}
                  value={values.count}
                />
                {errors.count && touched.count && (
                  <div className="fs-5 error text-danger">{errors.count}</div>
                )}
              </FormGroup>
              <Button type="submit" className="bg-info border-0 w-100">
                {"Submit"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default AvailableHitsUsers;
