import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  width: 100%;
  padding: 9px 0px 7px 8px;
  font-size: 12px;
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  height: 35px;
`;

const Input = ({
  placeholder,
  requeired = true,
  value,
  onChange,
  type = "text",
}) => (
  <Container
    placeholder={placeholder}
    required={requeired}
    value={value}
    onChange={onChange}
    type={type}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
