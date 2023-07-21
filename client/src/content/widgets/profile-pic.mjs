import {useAuth0} from "@auth0/auth0-react";
import React from "react";

export const ProfilePic = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        <>
            {isAuthenticated && (
                <a href="/profile">
                    <img
                        src={user.picture}
                        alt={"Profile picture for " + user.nickname}
                        className="profile__avatar"
                    />
                </a>
            )}
        </>
    );
};
