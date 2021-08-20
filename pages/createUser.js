import Head from "next/head";
import Image from "next/image";

export default function CreateUser() {
  return (
    <>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who's Is Watching?</span>
        </div>

        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=73a9df4b7bd1b330db1e903e08575ec1"
          />
          <div className="create-user__input-group">
            <label>Name</label>

            <input type="text" className="create-user__inputText" />

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
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </>
  );
}
