import Text from "components/atoms/Text/input";
import Box from "components/Layout/Box";
import Flex from "components/Layout/Flex";
import Link from "next/link";
import { useAuthContext } from "pages/contexts/AuthContexts";
const Header = () => {
  const { authUser, isLoading } = useAuthContext();

  return (
    <Box height="h-80px" padding="p-16px" borderBottom="border-b">
      <Flex justifyContent="justify-between" paddingX="px-16px" height="h-100%">
        <Flex
          alignItems="items-center"
          height="h-100%"
          fontSize={{ base: "text-base", sm: "text-2xl" }}
        >
          <Box>
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </Box>
          <Box marginLeft="ml-8px">
            <Link href="/">
              <a className="text-white">second</a>
            </Link>
          </Box>
        </Flex>
        <Flex height="h-100%" alignItems="items-center">
          {(() => {
            if (authUser) {
              return (
                <Text as="p" fontSize={{ base: "text-base", sm: "text-2xl" }}>
                  {authUser?.userName}
                </Text>
              );
            } else {
              return (
                <Text as="p" fontSize={{ base: "text-base", sm: "text-2xl" }}>
                  認証不可
                </Text>
              );
            }
          })()}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
