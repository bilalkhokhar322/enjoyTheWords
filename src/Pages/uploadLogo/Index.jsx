import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import uploadImageIcon from "../../Assets/gallery/uploadLogo.png";
import { useDispatch } from "react-redux";
import { UpLoadLogo } from "../../Redux/features/User/userApi";
import { toast } from "react-toastify";

const UploadLogo = () => {
  const [LogoImage, setLogoImage] = useState(null);
  const dispatch = useDispatch();

  const validation = Yup.object().shape({
    logo: Yup.string().required("Image is required"), //
  });

  const handleLogoUpload = (values) => {
    const formData = new FormData();
    formData.append("logo", values.logo); // //

    const logo = {
      apiEndpoint: "/admin/logoupdate",
      requestData: formData,
    };
    dispatch(UpLoadLogo(logo)).then((res) => {
      if (res.type === "UpLoadLogo/fulfilled") {
        toast.success("Logo uploaded successfully");
      }
    });
  };

  const { handleSubmit, values, errors, setFieldValue } = useFormik({
    initialValues: {
      logo: null, //
    },
    validationSchema: validation,
    onSubmit: (values) => {
      handleLogoUpload(values);
    },
  });

  const handleFileChange = (event) => {
    setFieldValue("logo", event.target.files[0]); //
    const logo = event.target.files[0]; //
    setLogoImage(URL.createObjectURL(logo)); //
  };
  return (
    <>
      <Col md={12} className="h-100">
        <div id="Upload" className="ImageUpload">
          <div className="content text-center">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup className="Group">
                <Label htmlFor="upload" className="upLoad">
                  <center>
                    <div
                      className="image"
                      style={{
                        width: "150px",
                        height: "150px",
                        backgroundImage: `url(${LogoImage || uploadImageIcon})`, // Corrected syntax
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        // backgroundPosition: "center center",
                      }}
                    ></div>
                  </center>
                  <Input
                    id="upload"
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="d-none"
                  />
                </Label>
                <Button
                  className="bg-transparent"
                  onClick={handleSubmit}
                  type="submit"
                  disabled={values.logo === null}
                >
                  Upload
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </Col>
    </>
  );
};

export default UploadLogo;
