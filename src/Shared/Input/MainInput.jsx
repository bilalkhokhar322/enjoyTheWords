import React, { useState } from "react";
import { Input, Label } from "reactstrap";
import { eye, eyeSlash } from "../../Assets/icons/index";

const MainInput = (props) => {
  const [showPassword, setShowPassword] = useState(true);

  const eyeIcon = showPassword ? eyeSlash : eye;

  return (
    <div id="mainInput">
      <div className="Div position-relative">
        <Label className="text-white">{props.Label}</Label>

        <Input
          className="rounded-3 fw-bold "
          type={showPassword ? props.type : "text"}
          name={props.name}
          id={props.id}
          value={props.values}
          onChange={props.onChange}
          placeholder={props.placeholder}
          pattern={props.pattern}
          inputMode={props.inputMode}
        />
        {props.type === "password" && (
          <span
            className="position-absolute translate-middle-y px-3"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              top: "70%",
              right: "0",
            }}
          >
            <i>{eyeIcon}</i>
          </span>
        )}
      </div>
    </div>
  );
};

export default MainInput;
