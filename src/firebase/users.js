import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { serverTimestamp } from "firebase/firestore";

export const createOrUpdateUser = async (user) => {
    try {
        const userRef = doc(db, "users", user.uid);
        await setDoc(
            userRef,
            {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                lastLogin: serverTimestamp(),
            },
            { merge: true }
        );
    } catch (error) {
        console.error("Ошибка при создании/обновлении пользователя:", error);
        throw error;
    }
};

export const getUserData = async (userId) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
};
