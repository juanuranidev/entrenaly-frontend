import request from "services/request";
import {
  getAuth,
  signOut,
  deleteUser,
  getRedirectResult,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "lib/config/firebase";

type DataForLogin = {
  email: string;
  password: string;
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Auth provider
export const registerWithEmailService = async (data: any) => {
  let userCreated;
  try {
    const registerInformation = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    userCreated = registerInformation.user;

    const userFormatted = {
      name: data.name,
      email: userCreated.email,
      authId: userCreated.uid,
      invite: data.invite,
    };

    const response = await registerUserService(userFormatted);

    return response;
  } catch (error) {
    await deleteUserByIdService(userCreated);
    throw error;
  }
};

export const loginWithEmailService = async (data: DataForLogin) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    // alert(response.user.uid);
    const user = await getUserByAuthIdService(response.user.uid);
    alert(user.name);

    return user;
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

export const googleAuthService = async (invite: string | undefined) => {
  try {
    const provider = new GoogleAuthProvider();

    const response: any = await signInWithPopup(auth, provider);
    console.log(response);
    const userFormatted = {
      name: response.user.displayName,
      email: response.user.email,
      image: response.user.photoURL,
      authId: response.user.uid,
      invite: invite ?? null,
    };
    console.log({ userFormatted });

    const user = await gooogleAuthService(userFormatted);

    return user;
  } catch (error) {
    console.error("Error durante el inicio de sesión:", error);
  }
};

export const verifyGoogleAuthService = async (invite: string | null) => {
  let userInformation;
  try {
    const signInInformation = await getRedirectResult(auth);
    if (!signInInformation) {
      return null;
    }

    userInformation = signInInformation.user;
    const userFormatted = {
      name: userInformation.displayName,
      email: userInformation.email,
      image: userInformation.photoURL,
      authId: userInformation.uid,
      invite: invite ?? null,
    };

    const response = await gooogleAuthService(userFormatted);
    console.log("RESPONSE GOOGLE AUTH", response);
    return response;
  } catch (error) {
    await deleteUserByIdService(userInformation);

    throw error;
  }
};

export const getUserSessionService = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(null);
        return;
      }

      try {
        const response = await getUserByAuthIdService(user.uid);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });

    // Retornar la función de limpieza del efecto
    return unsubscribe;
  });
};

export const deleteUserByIdService = async (user: any) => {
  try {
    const response = await deleteUser(user);
    console.log({ response });
    return response;
  } catch (error) {
    throw error;
  }
};

// Server
export const registerUserService = async (user: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/post",
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
      url: "users/v1/post/google",
      data: {
        data: user,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserByAuthIdService = async (authId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: `users/v1/get/authId`,
      params: {
        authId: authId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: `users/v1/get`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
