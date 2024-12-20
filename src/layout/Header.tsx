import { Button } from "components/common/Button";

const Header = () => {
  const btnStyle = {
    width: "w-154",
    height: "h-50",
    color: "navy",
    border: "border-1 border-navy",
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full font-bold bg-white p-30">
        <div className="flex flex-row justify-between w-1400">
          <div>About me</div>
          <div>Career</div>
          <div>Projects</div>
          <div>About</div>
        </div>
      </div>
      <div className="mx-30">
        <Button desc="download" style={btnStyle} />
      </div>
    </div>
  );
};

export default Header;
