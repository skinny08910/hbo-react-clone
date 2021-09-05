import Head from "next/head";
import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "../../Hooks/useMounted";

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls("users") !== null ? ls("users") : [];
  let { hasMounted } = useMounted();

  useEffect(() => {
    users;

    if (users < 1) {
      setLoadingUsers(false);
    }

    console.log("load effect", users);
  }, []);

  console.log("declared users", users);

  const selectUser = (id) => {
    ls("activeUID", id);
    router.push("/");
  };

  const showUers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            className="login-user__user-box"
            key={user.id}
          >
            <img
              className="login-user__user-img"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=73a9df4b7bd1b330db1e903e08575ec1"
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push("/");
  };

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>

      <div className="login-user__form">{hasMounted ? showUers() : ""}</div>

      <div className="login-user__button">
        <button className="login-user__kid" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default Login;
