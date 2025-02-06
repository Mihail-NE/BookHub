import { useState, useEffect } from "react";
import { auth, db } from "../../shared/services/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { formatTimestamp } from "../../shared/utils/formatTimestamp";
import ProfilePhoto from "./ProfilePhoto";

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userDoc = doc(db, "users", auth.currentUser.uid);
                const docSnap = await getDoc(userDoc);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                }
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-6 mb-8 gap-8 mobile:flex-col ">
                    {auth.currentUser.photoURL ? (
                        <div className="relative group">
                            <img
                                src={auth.currentUser.photoURL}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                    ) : (
                        <ProfilePhoto />
                    )}

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            {auth.currentUser?.displayName}
                        </h2>
                        <p className="text-gray-800">
                            {auth.currentUser?.email}
                        </p>
                    </div>
                </div>

                {userData && (
                    <div className="border-t pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-500">
                                    Дата регистрации
                                </p>
                                <p className="font-medium">
                                    {formatTimestamp(userData.createdAt)}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-500">Статус</p>
                                <p className="font-medium text-green-600">
                                    {userData.status || "Активный"}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Profile;
