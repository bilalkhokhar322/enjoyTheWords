import React from "react";
import { Button, Col, Form, FormGroup, Row, Spinner } from "reactstrap";
import MainInput from "../../../Shared/Input/MainInput";
import { useDispatch, useSelector } from "react-redux";
import mainLogo from "../../../Assets/gallery/ShazamLoog.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../../Redux/features/User/userApi";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const handleForgotPassword = (values) => {
    const data = {
      apiEndpoint: "/admin/forgetPassword",
      requestData: JSON.stringify(values),
    };
    dispatch(forgetPassword(data)).then((res) => {
      if (res.type === "forgetPassword/fulfilled") {
        toast.success(res?.payload?.message);
        navigate("/new-password");
      } else {
        toast.error(res?.payload?.data?.message);
      }
    });
  };

  const Validation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const { errors, touched, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Validation,
    onSubmit(values) {
      handleForgotPassword(values);
    },
  });

  return (
    <>
      <div id="Forgot" className=" h-100 ">
        <Row className="h-100">
          <Col md={12} className="formCol">
            <Row className="justify-content-center align-items-center h-100">
              <Col md={5} className="">
                <center>
                  <div className="image">
                    <img className="image-fluid w-auto" src={mainLogo} alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-white mb-5 mt-3">Forgot Password</h2>
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
                    <div className="text-end mt-5">
                      <Button type="submit" className="bg-info border-0 w-100">
                        {loading === "pending" ? <Spinner /> : "Submit"}
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ForgotPassword;
