import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../config/firebase";

export async function getUserData(user) {
  try {
    const userRef = doc(firebaseDB, "users", user.uid);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error retrieving user data:", error);
  }
}

export async function getAllUserDocuments() {
  try {
    const userCollectionRef = collection(firebaseDB, "users");
    const querySnapshot = await getDocs(userCollectionRef);

    const users = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      users.push(data);
    });

    return users;
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
}

export async function updateFireBase(data, category, prop, user) {
  const userRef = doc(firebaseDB, "users", user.uid);

  const userData = await getUserData(user);

  if (userData) {
    try {
      [category][prop] = data;

      updateDoc(userRef, userData);
    } catch (err) {
      console.log(err);
    }
  }
}

export async function signUpUserWithEmailAndPassword(
  username,
  email,
  password
) {
  try {
    const userCreds = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { user } = userCreds;

    await createUserDocumentFromAuth(user, username);
  } catch (err) {
    console.log(err);
  }
}

async function createUserDocumentFromAuth(userAuth, userName) {
  if (!userAuth) return;

  const userDocument = await getUserData(userAuth);

  if (!userDocument) {
    const { email, uid } = userAuth;

    const createdAt = new Date();

    if (!email) return;

    const newUser = {
      id: uid,
      createdAt,
      email,
      name: userName,
      promptHistory: [],
    };

    try {
      const userDocRef = doc(firebaseDB, "users", userAuth.uid);
      await setDoc(userDocRef, newUser);
    } catch (err) {
      console.log(err);
    }
  }
}

export const createUserDocumentFromGoogleAuth = async (userAuth) => {
  console.log(userAuth);
  if (!userAuth) return;

  const userDocRef = doc(firebaseDB, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  console.log(userDocRef);

  if (!userSnapShot.exists()) {
    const { email, displayName, name } = userAuth;

    const createdAt = new Date();

    const newUser = {
      createdAt,
      email,
      name: displayName || name,
      userName: displayName,
      promptHistory: [],
    };

    try {
      await setDoc(userDocRef, newUser);
    } catch (err) {
      console.log(`error creating user`, err.message);
    }
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(firebaseAuth, provider);
    const user = result.user;

    createUserDocumentFromGoogleAuth(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
  }
};
