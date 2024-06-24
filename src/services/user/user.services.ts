import request from "services/request";
import {
  getAuth,
  signOut,
  deleteUser,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "lib/config/firebase";

type DataForLogin = {
  email: string;
  password: string;
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Server
export const createUserService = async (user: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/create",
      data: {
        data: user,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const createUserWithGoogleService = async (user: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/create/google",
      data: {
        data: user,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const readUserByAuthIdService = async (authId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: `users/v1/read/authId`,
      params: {
        authId: authId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const readUserService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: `users/v1/read`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

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

    const response = await createUserService(userFormatted);

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
    const user = await readUserByAuthIdService(response.user.uid);

    return user;
  } catch (error) {
    throw error;
  }
};

export const googleAuthService = async (invite: string | undefined) => {
  try {
    const provider = new GoogleAuthProvider();

    const response: any = await signInWithPopup(auth, provider);

    const userFormatted = {
      name: response.user.displayName,
      email: response.user.email,
      image: response.user.photoURL,
      authId: response.user.uid,
      invite: invite ?? null,
    };

    const user = await createUserWithGoogleService(userFormatted);

    return user;
  } catch (error) {
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
        const response = await readUserByAuthIdService(user.uid);

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
    return await deleteUser(user);
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
