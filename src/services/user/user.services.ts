import request from "services/request";
import {
  getAuth,
  signOut,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
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

    const response = await gooogleAuthService(userFormatted);

    return response;
  } catch (error) {
    throw error;
  }
};

// Auth provider
export const registerWithEmailService = async (data: any) => {
  try {
    const registerInformation = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const userFormatted = {
      name: data.name,
      email: registerInformation.user.email,
      authId: registerInformation.user.uid,
    };

    const response = await registerUserService(userFormatted);

    return response;
  } catch (error) {
    throw error;
  }
};

export const loginWithEmailService = async (data: DataForLogin) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);

    const response = await loginUserService(data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const signOutService = async () => {
  try {
    await signOut(auth);
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

    return response;
  } catch (error) {
    throw error;
  }
};

export const gooogleAuthService = async (user: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/google/auth",
      data: {
        data: user,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
