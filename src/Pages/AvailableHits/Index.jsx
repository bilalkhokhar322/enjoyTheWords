import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { availableHits } from "../../Redux/features/User/userApi";
import HeadingText from "../../Shared/MainHeading/Index";
const AvailableHitsUsers = () => {
  const [availableHitsNum, setAvailableHitsNum] = useState();
  const dispatch = useDispatch();

  const HandleHitsUsers = () => {
    const data = {
      apiEndpoint: "/admin/availableHits",
      requestData: JSON.stringify(values),
    };
    dispatch(availableHits(data)).then((res) => {
      if (res.type === "availableHits/fulfilled") {
        toast.success(res?.payload?.message);
      }
    });
  };

  const formValidation = Yup.object().shape({
    count: Yup.string().required("Please enter the list number"),
  });
  const { values, handleSubmit, errors, handleChange, touched, setFieldValue } =
    useFormik({
      initialValues: {
        count: availableHitsNum ? availableHitsNum : "",
      },
      validationSchema: formValidation,
      onSubmit(values) {
        setAvailableHitsNum(values?.count);
        HandleHitsUsers(values);
      },
    });

  console.log(availableHitsNum);
  return (
    <>
      <HeadingText className={"text-white"} Text={"Control User List"} />
      <Col md={12} className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg={5} md={8} className="">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                <Input
                  type="text" // Change type to text
                  inputMode="numeric" // Set input mode to numeric
                  pattern="[0-9]*" // Set pattern to allow only numeric input
                  name="count"
                  onChange={handleChange}
                  value={availableHitsNum ? availableHitsNum : values.count}
                />
                {errors.count && touched.count && (
                  <div className="fs-5 error text-danger">{errors.count}</div>
                )}
              </FormGroup>
              <Button type="submit" className="bg-info border-0 w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default AvailableHitsUsers;
