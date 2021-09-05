import Head from "next/head";
import { useStateContext } from "../components/HBOProvider";
import ls from "local-storage";
import { v4 } from "uuid";
import { useRouter } from "next/router";

export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();

  const saveUswr = () => {
    let users = [],
      user;

    if (ls("users") < 1) {
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
      };
      users.push(user);
      ls("users", users);
      router.push("/login");

      console.log("users", users);
      console.log("lsusers", ls("users"));
    } else {
      users = ls("users");
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
      };
      users.push(user);
      ls("users", users);
      console.log("users", users);
      console.log("lsusers", ls("users"));

      router.push("/login");
    }
  };

  console.log(globalState);

  return (
    <>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who Is Watching?</span>
        </div>

        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src={globalState.defaultUserImg}
            alt="Profile img"
          />

          <div className="create-user__input-group">
            <label>Name</label>

            <input
              value={globalState.user}
              onChange={globalState.createUserAction}
              type="text"
              className="create-user__inputText"
            />

            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(0,212,255,1) 100%",
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: "rgb(12,36,0)",
                  background:
                    "linear-gradient(135deg, rgba(12,36,0,1) 11%, rgba(0,212,255,1) 100%",
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: "rgb(36,0,0)",
                  background:
                    "linear-gradient(135deg, rgba(36,0,0,1) 34%, rgba(0,212,255,1) 100%",
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: "rgb(125,125,125)",
                  background:
                    "linear-gradient(135deg, rgba(125,125,125,1) 34%, rgba(0,212,255,1) 100%",
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: "rgb(36,67,157)",
                  background:
                    "linear-gradient(135deg, rgba(36,67,157,1) 34%, rgba(255,0,0,1) 100%",
                }}
              />
            </div>
          </div>
        </div>

        <div className="create-user__button">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save" onClick={saveUswr}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
