import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../../buttons/login-button.mjs";
import { LogoutButton } from "../../buttons/logout-button.mjs";
import { SignupButton } from "../../buttons/signup-button.mjs";

export const MobileNavBarButtons = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="mobile-nav-bar__buttons">
            {!isAuthenticated && (
                <>
                    <SignupButton />
                    <LoginButton />
                </>
            )}
            {isAuthenticated && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    );
};