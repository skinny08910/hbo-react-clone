import Head from "next/head";
import { useStateContext } from "../components/HBOProvider";
import ls from "local-storage";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import Login from "../components/UI/Login/Login";

const LoginPage = () => {
  const globalState = useStateContext();
  const router = useRouter();

  console.log(globalState);
  return <Login />;
};

export default LoginPage;
