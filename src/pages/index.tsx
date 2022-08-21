import Button from "components/atoms/Button";
import InputText from "components/atoms/InputText";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="sm:text-center">
      <Link href="/あ">
        <Button>ボタン</Button>
      </Link>

      <InputText placeholder="aa" />
    </div>
  );
};

export default Home;
