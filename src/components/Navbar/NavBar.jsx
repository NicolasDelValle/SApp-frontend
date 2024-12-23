import React from "react";
import { NormalButton, DefaultProfile } from "../../components";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { logout, loginWithRedirect, user, isAuthenticated, isLoading } =
    useAuth0();
  console.log(user);

  return (
    <nav className="flex items-center justify-between px-3 drop-shadow-lg bg-white h-14 rounded-xl border border-dark100">
      <div>
        <span className="font-bold text-xl text-goodBlue">SApp</span>
      </div>
      <div>
        {isAuthenticated ? (
          <div className="flex items-center justify-between gap-2">
            <DefaultProfile picUrl={user.picture} />
            <NormalButton danger actionLabel="Logout" action={() => logout()} />
          </div>
        ) : (
          <NormalButton
            primary
            actionLabel="Login"
            action={() => loginWithRedirect()}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
