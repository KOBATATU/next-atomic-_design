import Button from "components/atoms/Button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="sm:text-center">
      <Button
        fontSize={{ base: "text-base", sm: "text-2xl", md: "text-4xl" }}
        textColor="text-red-500"
        hover={{ hover: ["hover:bg-black", "hover:text-red-100"] }}
      >
        text
      </Button>
    </div>
  );
};

export default Home;
