import Button from "components/atoms/Button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="text-center">
      <Button
        fontSize={{ base: "text-base", lg: "text-lg" }}
        border="border"
        hover={{ hover: ["hover:bg-black", "hover:text-red-100"] }}
      >
        text
      </Button>
    </div>
  );
};

export default Home;
