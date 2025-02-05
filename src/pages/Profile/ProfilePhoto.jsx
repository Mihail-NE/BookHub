import { PlusIcon } from "@heroicons/react/24/outline";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from "../../shared/services/firebase/config";
import { updateProfile } from "firebase/auth";
import { createOrUpdateUser } from "../../shared/services/firebase/users";

const ProfilePhoto = () => {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const storage = getStorage();
            const fileRef = ref(
                storage,
                `profile-photos/${auth.currentUser.uid}`
            );
            const metadata = {
                contentType: file.type,
                "Access-Control-Allow-Origin": "*",
            };
            await uploadBytes(fileRef, file, metadata);
            const photoURL = await getDownloadURL(fileRef);
            const currentUser = auth.currentUser;
            await updateProfile(currentUser, {
                photoURL: photoURL,
            });
            await createOrUpdateUser(currentUser);
        } catch (error) {
            console.error("Ошибка загрузки:", error);
        }
    };

    return (
        <div className="relative">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="photo-upload"
            />
            <label
                htmlFor="photo-upload"
                className="flex items-center justify-center size-24 rounded-full bg-slate-100 cursor-pointer hover:border hover:border-slate-300 transition-all duration-200"
            >
                <PlusIcon className="h-8 w-8 text-slate-800" />
            </label>
        </div>
    );
};

export default ProfilePhoto;
