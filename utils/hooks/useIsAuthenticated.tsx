import { useState, useEffect } from "react";
import { stringToBoolean } from "../functions/stringToBoolean";

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    stringToBoolean(localStorage.getItem("IS_AUTH"))
  );

  useEffect(() => {
    // TODO: Understanding cookie/session etc from supabase
    const isAuth = localStorage.getItem("IS_AUTH");
    setIsAuthenticated(!!isAuth);
  }, [isAuthenticated, localStorage.getItem("IS_AUTH")]);

  // TODO : Ugly !!!
  return isAuthenticated;
};

export default useIsAuthenticated;
