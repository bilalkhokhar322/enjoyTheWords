import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Input, Label } from "reactstrap";
import uploadImageIcon from "../../Assets/gallery/upload.webp";

const UploadLogo = () => {
  const [LogoImage, setLogoImage] = useState(null); // Corrected useState initialization

  const validation = Yup.object().shape({
    file: Yup.string().required("Image is required"),
  });

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      file: null,
    },
    validationSchema: validation,
    onSubmit(value) {},
  });

  const handleFileChange = (event) => {
    setLogoImage(event.target.files[0]);
  };

  return (
    <>
      <Col md={12} className="h-100">
        <div id="Upload" className="ImageUpload">
          <div className="content text-center">
            <Label htmlFor="upload" className="upLoad ">
              <div className="image">
                <img
                  className=""
                  src={LogoImage ? LogoImage : uploadImageIcon}
                  alt=""
                />{" "}
              </div>
            </Label>
            <Input
              id="upload"
              type="file"
              onChange={handleFileChange} // added onChange event handler
              className="d-none"
            />
            <Button className="bg-transparent" onClick={handleSubmit} type="submit">
              Upload
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default UploadLogo;
