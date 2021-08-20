import Account from "../Account/Account";
import SearchModal from "../SearchModal/SeachModal";

const Header = (props) => {
  return (
    <header className="top-header">
      <div className="top-header__left-side">
        <div className="top-header__menu-btn">
          <i className="fas fa-bars" />
        </div>

        <div className="top-header__search-btn">
          <i className="fas fa-search" />
        </div>
      </div>

      <div className="top-header__logo"></div>

      <div className="top-header__account">
        <img
          className="top-header__user-img"
          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=73a9df4b7bd1b330db1e903e08575ec1"
        />
        <div className="top-header__user-name">Bryant</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  );
};

export default Header;
