import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {NavLink} from "react-router-dom";

export const ProfilePic = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        <>
            {isAuthenticated && (
                <NavLink to="/profile">
                    <img
                        src={user.picture}
                        alt={"Profile picture for " + user.nickname}
                        className="profile__avatar"
                    />
                </NavLink>
            )}
        </>
    );
};
