import request from "services/request";
import {
  getAuth,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

type DataForLogin = {
  email: string;
  password: string;
};

const auth = getAuth();

export const googleAuthService = async () => {
  try {
    const provider = new GoogleAuthProvider();

    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error durante el inicio de sesión:", error);
  }
};

export const verifyGoogleAuthService = async () => {
  try {
    const signInInformation = await getRedirectResult(auth);

    if (!signInInformation) {
      return null;
    }

    const userFormatted = {
      name: signInInformation.user.displayName,
      email: signInInformation.user.email,
      image: signInInformation.user.photoURL,
      authId: signInInformation.user.uid,
    };

    loginUserService(userFormatted);
  } catch (error) {
    throw error;
  }
};

// Auth provider
export const registerWithEmailService = async (data: any) => {
  try {
    await createUserWithEmailAndPassword(auth, data.email, data.password);

    // const registerInformation = await createUserWithEmailAndPassword(
    //   auth,
    //   data.email,
    //   data.password
    // );

    // const userFormatted = {
    //   name: registerInformation.user.displayName,
    //   email: registerInformation.user.email,
    //   image: registerInformation.user.photoURL,
    //   authId: registerInformation.user.uid,
    // };

    // const response = await registerUserService(userFormatted);

    // return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginWithEmailService = async (data: DataForLogin) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);

    return true;
  } catch (error) {
    throw error;
  }
};

// Server
export const registerUserService = async (user: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/register",
      data: {
        data: user,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUserService = async (user: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/login",
      data: {
        data: user,
      },
    });

    console.log(response);
  } catch (error) {
    throw error;
  }
};
