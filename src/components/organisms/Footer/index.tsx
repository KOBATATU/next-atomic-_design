import Text from "components/atoms/Text/input";
import Flex from "components/Layout/Flex";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <Flex
        justifyContent="justify-center"
        alignItems="items-center"
        paddingY="py-32px"
      >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          Powered by{" "}
          <Text as="span" marginLeft="ml-4px" height="h-16px">
            <Image
              src="/public/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </Text>
        </a>
      </Flex>
    </footer>
  );
};

export default Footer;
