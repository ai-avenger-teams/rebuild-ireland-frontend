import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
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
  if (!userAuth) return;

  const userDocRef = doc(firebaseDB, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { email, displayName, name } = userAuth;

    const createdAt = new Date();

    const newUser = {
      createdAt,
      email,
      name: displayName || name,
      userName: displayName,
      promptHistory: [],
      responseHistory: [],
      photoURL: userAuth.photoURL,
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

onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log("User ID:", uid);

    // Now you can use this UID to get user data from Firestore
  } else {
    // No user is signed in
    console.log("No user is signed in.");
  }
});

export const getAllUsers = async () => {
  try {
    const usersCollectionRef = collection(firebaseDB, "users");
    const usersSnapshot = await getDocs(usersCollectionRef);
    console.log(usersSnapshot);

    const usersList = usersSnapshot.docs.map((doc) => doc.data());

    console.log("All Users:", usersList);
    return usersList;
  } catch (error) {
    console.error("Error getting users:", error);
  }
};

export const saveMessageToResponses = async (message) => {
  try {
    const responsesCollectionRef = collection(firebaseDB, "responses");
    const docRef = await addDoc(responsesCollectionRef, { message });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding message: ", error);
  }
};
