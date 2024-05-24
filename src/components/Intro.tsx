import decoImg from "asset/images/decoration.png";
import profile from "asset/images/profile.png";
import { Button } from "components/common/Button";

export const Intro = () => {
  const btnStyle = {
    width: "w-154",
    height: "h-50",
    color: "navy",
  };

  return (
    <div className="flex flex-col w-full pt-64 max-w-1400">
      {/* section 1 */}
      <div className="flex justify-between w-full">
        <img src={decoImg} className="h-41" alt="decoration" />
        <Button desc="download" style={btnStyle} />
      </div>

      {/* section 2 */}
      <div className="flex flex-col items-center justify-center mt-160">
        <img src={profile} alt="profile" />
        <h2 className="mt-64 mb-32 text-desc text-20">name</h2>
        <h3 className="mb-32 text-title text-36">Junior Frontend Developer</h3>
        <p className="text-desc">
          I have a passion for software. I enjoy creating tools that make life
          easier for people.
        </p>
      </div>
    </div>
  );
};
