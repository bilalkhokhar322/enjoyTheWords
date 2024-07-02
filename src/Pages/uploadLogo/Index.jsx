import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import uploadImageIcon from "../../Assets/gallery/uploadLogo.png";
const UploadLogo = () => {
  const validation = Yup.object().shape({
    logo: Yup.string().required("Image is required"),
  });

  const { handleSubmit, values, errors, setFieldValue } = useFormik({
    initialValues: {
      logo: null,
    },
    validationSchema: validation,
    onSubmit: (values) => {},
  });

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
                        backgroundImage: `url(${uploadImageIcon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                      }}
                    ></div>
                  </center>
                  <Input
                    id="upload"
                    type="file"
                    name="image"
                    onChange={""}
                    className="d-none"
                  />
                </Label>
                <Button
                  className="bg-transparent"
                  onClick={handleSubmit}
                  type="submit"
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
