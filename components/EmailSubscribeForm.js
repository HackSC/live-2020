import React, { useState, useRef } from "react";
import styled from "styled-components";

import Button from "./Button";
import TextInput from "./TextInput";

// Encode -- used to turn JSON object into encoded URI
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const EmailSubscribeForm = () => {
  const [subscribed, setSubscribed] = useState(false);
  const emailRef = useRef(null);

  const submitEmail = async e => {
    e.preventDefault();

    if (subscribed || emailRef.current.value.trim() === "") {
      return;
    }

    const serializedBody = encode({
      "form-name": "email-subscribe",
      "bot-field": "",
      email: emailRef.current.value
    });

    await fetch(e.target.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: serializedBody
    });

    setSubscribed(true);
  };

  return (
    <>
      <EmailForm
        name="email-subscribe"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={submitEmail}
      >
        <TextInput
          name="email"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
        <EmailButton type="submit">Stay Up to Date</EmailButton>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="email-subscribe" />
      </EmailForm>

      <FormContext>
        Subscribe to be notified of HackSC 2020 events, including when our
        application opens.
      </FormContext>

      {subscribed && (
        <FormSuccess>Your e-mail has been successfully submitted!</FormSuccess>
      )}
    </>
  );
};

const EmailForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const EmailButton = styled(Button)`
  margin-left: 16px;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    margin-top: 16px;
    margin-left: 0;
  `}
`;

const FormSuccess = styled.p`
  color: #86dcea;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  animation-name: fade;
  animation-duration: 0.5s;
`;

const FormContext = styled.p`
  color: #757575;
  font-size: 14px;
`;

export default EmailSubscribeForm;
