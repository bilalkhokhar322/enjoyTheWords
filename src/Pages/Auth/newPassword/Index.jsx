import React from "react";
import { Button, Col, Form, FormGroup, Row, Spinner } from "reactstrap";
import MainInput from "../../../Shared/Input/MainInput";
import { useDispatch, useSelector } from "react-redux";
import mainLogo from "../../../Assets/gallery/ShazamLoog.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../../Redux/features/User/userApi";
import { toast } from "react-toastify";

const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const handleResetPassword = (values) => {
    if (values.newPassword === values.confirmNewPassword) {
      const data = {
        apiEndpoint: "/admin/resetPassword",
        requestData: JSON.stringify(values),
      };
      dispatch(resetPassword(data)).then((res) => {
        if (res.type === "resetPassword/fulfilled") {
          toast.success(res?.payload?.message);
          navigate("/dashboard");
        } else {
          toast.error(res?.payload?.data?.message);
        }
      });
    } else {
      toast.error("Passwords do NOT match");
    }
  };

  const Validation = Yup.object().shape({
    token: Yup.string().required("token is required"),
    newPassword: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmNewPassword: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const { errors, touched, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
      token: "",
    },
    validationSchema: Validation,
    onSubmit(values) {
      handleResetPassword(values);
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
                    <h2 className="text-white">Reset Password</h2>
                  </div>
                </center>
                <div className="form">
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <FormGroup>
                      <MainInput
                        Label="New Password"
                        className="rounded-3 fw-bold"
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={values?.newPassword}
                        onChange={handleChange}
                        placeholder="New Password"
                      />
                      <p className="text-danger">
                        {errors.newPassword && touched.newPassword
                          ? errors.newPassword
                          : ""}
                      </p>
                    </FormGroup>
                    <FormGroup>
                      <MainInput
                        Label="Confirm Password"
                        className="rounded-3 fw-bold"
                        type="password"
                        name="confirmNewPassword"
                        id="confirmNewPassword"
                        value={values?.confirmNewPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                      <p className="text-danger">
                        {errors.confirmNewPassword && touched.confirmNewPassword
                          ? errors.confirmNewPassword
                          : ""}
                      </p>
                    </FormGroup>
                    <FormGroup>
                      <MainInput
                        Label="Enter Your Code"
                        className="rounded-3 fw-bold"
                        type="text" // Change type to text
                        inputMode="numeric" // Set input mode to numeric
                        pattern="[0-9]*" // Set pattern to allow only numeric input
                        name="token"
                        value={values?.token}
                        onChange={handleChange}
                        placeholder="Enter Your Code"
                      />
                      <p className="text-danger">
                        {errors.token && touched.token ? errors.token : ""}
                      </p>
                    </FormGroup>
                    <div className="text-end mt-5">
                      <Button type="submit" className="bg-info border-0 w-100">
                        {loading === "pending" ? <Spinner /> : "Set Password"}
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

export default NewPassword;
