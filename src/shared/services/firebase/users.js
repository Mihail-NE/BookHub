import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./config";
import { serverTimestamp } from "firebase/firestore";

export const createOrUpdateUser = async (user) => {
    if (!user) return;

    try {
        const userRef = doc(db, "users", user.uid);
        const userData = {
            email: user.email,
            displayName: user.displayName || null,
            photoURL: user.photoURL || null,
            lastLogin: serverTimestamp(),
            createdAt: serverTimestamp(),
        };

        await setDoc(userRef, userData, { merge: true });
        console.log("Пользователь успешно создан/обновлен");
    } catch (error) {
        console.error("Ошибка при создании/обновлении пользователя:", error);
        throw error;
    }
};

export const getUserData = async (userId) => {
    if (!userId) return null;

    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return userSnap.data();
        } else {
            console.log("Пользователь не найден");
            return null;
        }
    } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
        throw error;
    }
};
