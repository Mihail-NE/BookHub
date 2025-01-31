import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const createOrUpdateUser = async (user) => {
    const userRef = doc(db, "users", user.uid);

    await setDoc(
        userRef,
        {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            lastLogin: new Date(),
        },
        { merge: true }
    );
};

export const getUserData = async (userId) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
};
