import { useEffect, useState } from "react";
import { NormalButton, DefaultProfile } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";
import { LuUserRoundPlus } from "react-icons/lu";

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
        <NormalButton
          danger
          actionLabel="Logout"
          actiononClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        />
      </div>
    ) : (
      <>
        <NormalButton actionLabel="Login" action={loginWithRedirect} />
        <NormalButton
          icon={<LuUserRoundPlus />}
          primary
          actionLabel="Register"
          action={() => {
            const signupUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENTID}&redirect_uri=${window.location.origin}&response_type=token&scope=openid&screen_hint=signup`;
            window.location.href = signupUrl;
          }}
        />
      </>
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
