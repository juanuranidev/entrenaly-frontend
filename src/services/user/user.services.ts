import request from "services/request";
import {
  getAuth,
  signOut,
  UserCredential,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "lib/config/firebase";
import { initializeApp } from "firebase/app";
import { User } from "lib/types/user/user.types";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Server
export const createUserService = async (user: any): Promise<User> => {
  const response = await request({
    method: "POST",
    url: "users/v1/create",
    data: {
      data: user,
    },
  });

  return response.data;
};

export const createUserWithGoogleService = async (user: any): Promise<User> => {
  const response = await request({
    method: "POST",
    url: "users/v1/create/google",
    data: {
      data: user,
    },
  });
  return response.data;
};

export const readUserByAuthIdService = async (
  authId: string
): Promise<User> => {
  const response = await request({
    method: "GET",
    url: `users/v1/read/authId`,
    params: {
      authId: authId,
    },
  });

  return response.data;
};

export const readUserService = async () => {
  const response = await request({
    method: "GET",
    url: `users/v1/read`,
  });

  return response.data;
};

// Auth provider
export const registerWithEmailService = async (data: any): Promise<User> => {
  const response: UserCredential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  const googleUser = {
    user: response.user,
    name: data.name,
    email: response.user.email,
    authId: response.user.uid,
    invite: data.invite,
  };

  const user: User = await createUserService(googleUser);
  return user;
};

export const loginWithEmailService = async (data: {
  email: string;
  password: string;
}): Promise<User> => {
  const response = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );
  const { uid } = response.user;

  const user: User = await readUserByAuthIdService(uid);
  return user;
};

export const googleAuthService = async (
  invite?: string | undefined | null
): Promise<User> => {
  const provider = new GoogleAuthProvider();

  const response: UserCredential = await signInWithPopup(auth, provider);

  const googleUser = {
    user: response.user,
    name: response.user.displayName,
    email: response.user.email,
    image: response.user.photoURL,
    authId: response.user.uid,
    invite: invite ?? null,
  };

  const user: User = await createUserWithGoogleService(googleUser);
  return user;
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

export const signOutService = async () => {
  await signOut(auth);
};
