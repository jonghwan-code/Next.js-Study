import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>NEXT.JS</span> Practice
      </h1>
      <p className={headerStyles.description}>
        This is practice place for NEXT
      </p>
    </div>
  );
};

export default Header;
