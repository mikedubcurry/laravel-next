import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { apiClient, csrf } from "@/lib/apiClient";
import { useRouter } from "next/router";
import cookie from "cookie";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        // redirect to dashboard
        const { user, token } = await res.data.data;
        setUser(user);
        setToken(token);
        router.push("/dashboard");
      } else {
        throw new Error(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () =>
    fetch("http://localhost/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      if (res.status === 200) {
        setUser(false);
        router.push("/login");
      }
      throw new Error(await res.text());
    });

  const register = async (name, email, password) =>
    fetch("http://localhost/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(async (res) => {
      if (res.status === 201) {
        const user = await res.json();
        setUser(user);
        return user;
      }
      throw new Error(await res.text());
    });

  const fetchUser = async () => {
    try {
      await csrf();
      const response = await axios.get("/api/auth/user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        setUser(null);
        setToken(null);
        return;
      }
      const { user } = response.data.data;
      setUser(user);
    } catch (e) {
      console.log("ERROR: ", e);
      setUser(false);
    }
  };

  useEffect(() => {
    if (["/login", "/register"].includes(router.pathname)) {
      return;
    }
    fetchUser();

    return () => fetchUser();
  }, []);

  return {
    user,
    login,
    logout,
    register,
  };
}
