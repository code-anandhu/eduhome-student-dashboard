import { auth } from "../firebase/firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export const sendOtp = async (phoneNumber) => {
  try {
    const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    const formattedPhone = `+91${phoneNumber}`;

    console.log("Sending OTP to:", formattedPhone);

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      formattedPhone,
      appVerifier
    );

    console.log("OTP SENT SUCCESS");
    console.log(confirmationResult);

    return confirmationResult;

  } catch (error) {
    console.error("Firebase Error Code:", error.code);
    console.error("Firebase Error:", error.message);
    throw error;
  }
};