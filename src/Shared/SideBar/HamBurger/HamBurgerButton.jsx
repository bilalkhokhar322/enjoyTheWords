const HamBurgerButton = ({ toggle, onClick }) => {
  console.log(toggle);
  console.log(onClick);
  return (
    <div className="">
      <button
        className={toggle ? "hamburger-btn open" : "hamburger-btn"}
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamBurgerButton;
