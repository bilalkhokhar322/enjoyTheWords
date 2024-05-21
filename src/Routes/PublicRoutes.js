import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useLayoutEffect } from "react";

export function PublicRoute({ Component, props }) {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, props.role, user]);

  return <Component {...props} />;
}
