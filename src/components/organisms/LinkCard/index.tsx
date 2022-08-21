import Text from "components/atoms/Text/input";

export type LinkCardType = {
  link: string;
  title: string;
  content: string;
};

const LinkCard = (props: LinkCardType) => {
  const { link, title, content } = props;
  return (
    <a
      href={link}
      className="m-4 p-6 text-left text-inherit no-underline max-w-xs border-2 border-slate-800	"
    >
      <Text as="h2" fontSize="text-2xl" marginBottom="mb-8px">
        {title} &rarr;
      </Text>
      <Text
        as="p"
        margin="m-0px"
        fontSize="text-base"
        lineHeight="leading-normal"
      >
        {content}
      </Text>
    </a>
  );
};

export default LinkCard;
