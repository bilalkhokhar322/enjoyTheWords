import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Form, FormGroup, Input, Row, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  availableHits,
  getPreviousHits,
} from "../../Redux/features/User/userApi";
import HeadingText from "../../Shared/MainHeading/Index";
const AvailableHitsUsers = () => {
  const [availableHitsNum, setAvailableHitsNum] = useState();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const HandleHitsUsers = (values) => {
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

  const AvailableHitsCount = () => {
    const data = {
      apiEndpoint: "admin/getPreviousHits",
      requestData: JSON.stringify(values),
    };
    dispatch(getPreviousHits(data)).then((res) => {
      if (res.type === "getPreviousHits/fulfilled") {
        setAvailableHitsNum(res?.payload?.data?.usercount);
      }
    });
  };

  const formValidation = Yup.object().shape({
    count: Yup.string().required("Please enter the list number"),
  });
  const { values, handleSubmit, errors, handleChange, touched, setFieldValue } =
    useFormik({
      initialValues: {
        count: availableHitsNum ? availableHitsNum : 0,
      },
      validationSchema: formValidation,
      // enableReinitialize: true,
      onSubmit(values) {
        HandleHitsUsers(values);
      },
    });

  useEffect(() => {
    AvailableHitsCount();
    if (availableHitsNum !== undefined) {
      setFieldValue("count", availableHitsNum);
    }
  }, [availableHitsNum]);
  console.log(typeof availableHitsNum);
  console.log(values);
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
                {loading === "pending" ? <Spinner /> : "Submit"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default AvailableHitsUsers;
