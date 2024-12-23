import { useEffect, useState } from "react";
import { NormalButton, DefaultProfile } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const {
    logout,
    loginWithRedirect,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const [token, setToken] = useState("");
  console.log(token);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (!isAuthenticated || token) return;
        const fetchedToken = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });
        setToken(fetchedToken);
      } catch (error) {
        console.error("Error al obtener el token de acceso:", error);
      }
    };

    fetchToken();
  }, [isAuthenticated, getAccessTokenSilently, token]);

  const AuthButtons = () =>
    isAuthenticated ? (
      <div className="flex items-center gap-2">
        <DefaultProfile picUrl={user.picture} />
        <NormalButton danger actionLabel="Logout" action={logout} />
      </div>
    ) : (
      <NormalButton primary actionLabel="Login" action={loginWithRedirect} />
    );

  return (
    <nav className="flex items-center justify-between px-3 drop-shadow-lg bg-white h-14 rounded-xl border border-dark100">
      <div>
        <span className="font-bold text-xl text-goodBlue">SApp</span>
      </div>
      <div>
        <AuthButtons />
      </div>
    </nav>
  );
};

export default NavBar;
