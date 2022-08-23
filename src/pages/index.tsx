import Box from "components/Layout/Box";
import Footer from "components/organisms/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import Text from "components/atoms/Text/input";
import LinkCardContainer from "pages/containers/LinkCardContainer";
import Flex from "components/Layout/Flex";
import Layout from "components/template/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex
        paddingY="py-64px"
        flexDirection="flex-col"
        justifyContent="justify-start"
        alignItems="items-center"
      >
        <Text
          as="h1"
          margin="m-0px"
          lineHeight="leading-normal"
          fontSize="text-7xl"
          textAlign="text-center"
        >
          Welcome to{" "}
          <a
            href="https://nextjs.org"
            className="no-underline text-blue-500 hover:underline"
          >
            Next.js!
          </a>
        </Text>
        <Text
          as="p"
          marginY="my-64px"
          lineHeight="leading-normal"
          fontSize="text-2xl"
        >
          Get started by editing{" "}
          <Text
            as="code"
            fontSize={{ md: "text-base" }}
            padding="p-8px"
            border="w-border-0px"
            textColor="orange"
          >
            pages/index.tsx
          </Text>
        </Text>
        <LinkCardContainer />
      </Flex>
    </Layout>
  );
};

export default Home;
