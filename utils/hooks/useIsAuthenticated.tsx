import { useState, useEffect } from "react";

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(localStorage.getItem("IS_AUTH"))
  );

  useEffect(() => {
    // TODO: Understanding cookie/session etc from supabase
    const isAuth = localStorage.getItem("IS_AUTH");
    setIsAuthenticated(!!isAuth);
  }, [localStorage.getItem("IS_AUTH")]);

  // TODO : Ugly !!!
  return isAuthenticated;
};

export default useIsAuthenticated;
