import { auth } from "../firebase/firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import api from "./api"

let recaptchaVerifier = null;

export const sendOtp = async (phoneNumber) => {
  try {

    if (!recaptchaVerifier) {
      recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      await recaptchaVerifier.render();
    }

    const formattedPhone = `+91${phoneNumber}`;

    console.log("Sending OTP to:", formattedPhone);

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      formattedPhone,
      recaptchaVerifier
    );

    console.log("OTP SENT SUCCESS");

    return confirmationResult;

  } catch (error) {

    console.error("Firebase Error Code:", error.code);
    console.error("Firebase Error:", error.message);

    throw error;
  }
};

export const studentLogin = async (idToken) => {
  try {

    const response = await api.post("/student/auth/login", {
      idToken,
      deviceType: "web",
    });

    return response.data;

  } catch (error) {

    console.error(error);

    throw error;

  }
};