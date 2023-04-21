import React, { useEffect, useState } from "react";

const Profile = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const result = JSON.parse(localStorage.getItem("user"));
        setUser(result);
    }, [])
 

    return <div className="profile-container">
        <div className="profile-header">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">Email:- {user.email}</p>
        </div>
       
    </div>
}

export default Profile;