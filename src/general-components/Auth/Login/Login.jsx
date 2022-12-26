import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Form, Alert} from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../../context/AuthContext";
import "./Login.css";

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
    <div className={'Login'}>

        <h3 className={"title"}>
          Авторизация
        </h3>
        <p className="small">
          Просто введите свой телефон, затем вам прийдет смс с кодом,
          вам нужно будет ввести этот код в следующем открывшемся окне.
        </p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className={"PhoneInput-container"}>
            <PhoneInput
                defaultCountry={"RU"}
                value={number}
                onChange={setNumber}
                placeholder="Введите номер телефона"
                className={"phone-input"}
            />
          </Form.Group>

          <div id="recaptcha-container" />

          <div className="buttons-container">
            <Link to="/">
              <button className={"but-light"}>На главную</button>
            </Link>

            <button type="submit" className={'but-green mx-2'}>
              Далее
            </button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
            <Form.Control
                className={"code"}
                type="otp"
                placeholder="Введите код из смс"
                onChange={(e) => setOtp(e.target.value)}
            />

            <button className={"but-green px-5"} type="submit">
              Отправить
            </button>
        </Form>
    </div>
  );
};

export default Login;
