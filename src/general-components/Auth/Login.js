import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Form, Alert, Badge} from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    // console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    // console.log(otp)
    if (!otp) return;
    try {
      await result.confirm(otp);
      navigate("/userProfile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={'container'}>
      <div className="p-4 box w-50 border mt-3">

        <h4><Badge className="mb-3 fw-light">Авторизация</Badge></h4>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
                className={"w-75"}
                defaultCountry={"RU"}
                value={number}
                onChange={setNumber}
                placeholder="Введите номер телефона"
            />
            <div className={'mt-3'} id="recaptcha-container" />
          </Form.Group>

          <div className="button-right">
            <Link to="/">
              <Button size={"sm"} variant="secondary">На главную</Button>
            </Link>

            <Button size={"sm"} type="submit" className={'mx-1'}>
              Далее
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/login">
              <Button size={"sm"} variant="secondary">Назад</Button>
            </Link>

            <Button size={"sm"} type="submit" className={'mx-1'}>
              Отправить
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
