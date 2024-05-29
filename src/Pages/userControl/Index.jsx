import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Form, FormGroup, Input } from "reactstrap";

const UserControl = () => {
  const formValidation = Yup.object().shape({
    listNum: Yup.string().required("Please enter the list number"),
  });
  const { values, handleSubmit, errors, handleChange, touched, setFieldValue } =
    useFormik({
      initialValues: {
        listNum: "",
      },
      validationSchema: formValidation,
      onSubmit(values) {
        console.log(values);
      },
    });

  return (
    <>
      <Col md={8}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Input
              type="text" // Change type to text
              inputMode="numeric" // Set input mode to numeric
              pattern="[0-9]*" // Set pattern to allow only numeric input
              name="listNum"
              onChange={handleChange}
              value={values.listNum}
            />
            {errors.listNum && touched.listNum && (
              <div className="fs-5 error text-danger">{errors.listNum}</div>
            )}
          </FormGroup>
          <Button type="submit" className="bg-info border-0 w-100">
            Create account
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default UserControl;
