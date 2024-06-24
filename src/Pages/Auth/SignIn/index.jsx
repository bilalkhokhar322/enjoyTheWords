import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import MainInput from "../../../Shared/Input/MainInput";
import mainLogo from "../../../Assets/gallery/ShazamLoog.png";
import { login } from "../../../Redux/features/User/userApi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const handleLoginSubmit = (values) => {
    const data = {
      apiEndpoint: "/admin/login",
      requestData: JSON.stringify(values),
    };

    dispatch(login(data)).then((res) => {
      if (res.type === "login/fulfilled") {
        navigate("/dashboard");
      }
    });
  };

  const formValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("password is required"),
  });

  const { touched, handleSubmit, values, handleChange, errors, setFieldValue } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidation,
      onSubmit(values) {
        handleLoginSubmit(values);
      },
    });

  return (
    <div id="SignIn" className=" h-100 ">
      <Row className="h-100">
        <Col md={12} className="formCol">
          <Row className="justify-content-center align-items-center h-100">
            <Col md={5} className="">
              <center>
                <div className="image">
                  <img className="image-fluid w-auto" src={mainLogo} alt="" />
                </div>
                <div className="">
                  <h2 className="text-white mb-5 mt-3">Sign In</h2>
                </div>
              </center>
              <div className="form">
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <FormGroup>
                    <MainInput
                      Label="Email address"
                      className="rounded-3 fw-bold"
                      type="email"
                      name="email"
                      id="email"
                      value={values?.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                    <p className="text-danger">
                      {errors.email && touched.email ? errors.email : ""}
                    </p>
                  </FormGroup>
                  <FormGroup>
                    <MainInput
                      Label="Password"
                      className="rounded-3 fw-bold"
                      type="password"
                      name="password"
                      id="password"
                      value={values?.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                    />
                    <p className="text-danger">
                      {errors.password && touched.password
                        ? errors.password
                        : ""}
                    </p>
                  </FormGroup>
                  <div className="text-end">
                    <Link to="/forgotPassword" className="text-white">
                      Forgot Password
                    </Link>
                  </div>
                  <div className="text-end mt-5">
                    <Button type="submit" className="bg-info border-0 w-100">
                      {"Sign In"}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
