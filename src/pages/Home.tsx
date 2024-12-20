import { Intro } from "components/Intro";
import Header from "layout/Header";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <Intro />
    </div>
  );
};
