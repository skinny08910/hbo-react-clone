import Link from "next/link";
import { useStateContext } from "../../HBOProvider";

const Account = (props) => {
  const globalState = useStateContext();

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  return (
    <div
      className={`account ${
        globalState.accountModalOpen ? "account--active" : ""
      }`}
    >
      <div className="account__details ">
        <div className="account__title"></div>
        <div className="account__watch-list">
          {loopComp(
            <div className="account__watch-video">
              <img src="https://c.shld.net/rpx/i/s/pi/mp/10160405/prod_9273366732?src=http%3A%2F%2Flyimage.club%2Fimages%2FimageC%2FALVB01HUGZ9G6.jpg&d=7f28b98f885bebaa7ec40fff3dcf191ffe53f6a0&" />

              <div className="account__watch-overlay">
                <div className="account__watch-buttons">
                  <div className="account__watch-circle">
                    <i className="fas fa-play" />
                  </div>

                  <div className="account__watch-circle">
                    <i className="fas fa-times" />
                  </div>
                </div>
              </div>
            </div>,
            6
          )}
        </div>
      </div>

      <div className="account__menu">
        <ul className="account__main">
          <li>
            <Link href="/">
              <a className="active">My List</a>
            </Link>
          </li>
        </ul>

        <div className="side-nav__divider"></div>

        <ul className="account__main">
          <li>
            <Link href="/">
              <a>Account</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sign Out</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
