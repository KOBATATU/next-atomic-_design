import Flex from "components/Layout/Flex";
import LinkCard, { LinkCardType } from "components/organisms/LinkCard";

const LinkCards: Array<LinkCardType> = [
  {
    link: "https://nextjs.org/docs",
    title: "Documentation",
    content: "Find in-depth information about Next.js features and API.",
  },
  {
    link: "https://nextjs.org/learn",
    title: "Learn",
    content: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    link: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples",
    content: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    link: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    content: "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

const LinkCardContainer = () => {
  return (
    <Flex
      justifyContent="justify-center"
      alignItems="items-center"
      flexWrap="flex-wrap"
      maxWidth="max-w-768px"
    >
      {LinkCards.map((card) => (
        <LinkCard
          link={card.link}
          title={card.title}
          content={card.content}
          key={card.title}
        />
      ))}
    </Flex>
  );
};

export default LinkCardContainer;
