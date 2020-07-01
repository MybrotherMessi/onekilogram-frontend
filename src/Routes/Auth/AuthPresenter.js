import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Helmet from "react-helmet";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox};
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 25px 0px 25px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.lightBlueColor};
  cursor: pointer;
  font-weight: 600;
`;

const Form = styled(Box)`
  margin-bottom: 10px;
  padding: 25px 0px;
  form {
    width: 100%;
    padding: 0px 40px;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
      :first-child {
        margin-top: 15px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({
  action,
  userName,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit,
  secret,
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" && (
        <>
          <Helmet>
            <title>Log In | Onekilogram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={"Email"} {...email} type="email" />
            <Button text={"Log in"} />
          </form>
        </>
      )}{" "}
      {action === "signUp" && (
        <>
          <Helmet>
            <title>Sign Up | Onekilogram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={"First name"} {...firstName} />
            <Input placeholder={"Last name"} {...lastName} />
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Username"} {...userName} />
            <Button text={"Sign up"} />
          </form>
        </>
      )}{" "}
      {action === "confirm" && (
        <>
          <Helmet>
            <title>Confirm Secret | Onekilogram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder="Paste your secret" required {...secret} />
            <Button text={"Confirm"} />
          </form>
        </>
      )}
    </Form>
    {action !== "confirm" && (
      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    )}
  </Wrapper>
);
