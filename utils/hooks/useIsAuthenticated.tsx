import { useState, useEffect } from "react";

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    // TODO: Understanding cookie/session etc from supabase
    const isAuth = localStorage.getItem("IS_AUTH");
    setIsAuthenticated(!!isAuth);
  }, []);

  // TODO : Ugly !!!
  return isAuthenticated;
};

export default useIsAuthenticated;
