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
  UserCredential,
} from "firebase/auth";
import { firebaseConfig } from "lib/config/firebase";
import { initializeApp } from "firebase/app";
import { User } from "lib/types/user/user.types";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Server
export const createUserService = async (user: any): Promise<User> => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/create",
      data: {
        data: user,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUserWithGoogleService = async (user: any): Promise<User> => {
  try {
    const response = await request({
      method: "POST",
      url: "users/v1/create/google",
      data: {
        data: user,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const readUserByAuthIdService = async (
  authId: string
): Promise<User> => {
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
export const registerWithEmailService = async (data: any): Promise<User> => {
  let googleUser: any;
  try {
    const response: UserCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    googleUser = {
      user: response.user,
      name: data.name,
      email: response.user.email,
      authId: response.user.uid,
      invite: data.invite,
    };

    const user: User = await createUserService(googleUser);
    return user;
  } catch (error) {
    await deleteUserByIdService(googleUser.user);
    throw error;
  }
};

export const loginWithEmailService = async (data: {
  email: string;
  password: string;
}): Promise<User> => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const { uid } = response.user;

    const user: User = await readUserByAuthIdService(uid);
    return user;
  } catch (error) {
    throw error;
  }
};

export const googleAuthService = async (
  invite?: string | undefined | null
): Promise<User> => {
  let googleUser: any;
  try {
    const provider = new GoogleAuthProvider();

    const response: UserCredential = await signInWithPopup(auth, provider);

    googleUser = {
      user: response.user,
      name: response.user.displayName,
      email: response.user.email,
      image: response.user.photoURL,
      authId: response.user.uid,
      invite: invite ?? null,
    };

    const user: User = await createUserWithGoogleService(googleUser);
    return user;
  } catch (error) {
    await deleteUserByIdService(googleUser.user);
    throw error;
  }
};

export const getUserSessionService = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(null);
        return;
      }

      try {
        const response: User = await readUserByAuthIdService(user.uid);

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });

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
