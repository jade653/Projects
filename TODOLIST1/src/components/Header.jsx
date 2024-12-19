import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 😺</h3> {/* 이모지 : Window + .*/}
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
