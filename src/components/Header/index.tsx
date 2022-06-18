import { Flex } from "../Flex";
import { Link } from "../Link";
import { Text } from "../Text";
import NextLink from "next/link";
import NextImage from "next/image";
import { Button } from "../Button";
import { Box } from "../Box";
import { Burger } from "../Burger";

export const Header = () => {
  return (
    <Flex
      as="header"
      justify="between"
      align="center"
      css={{
        paddingLeft: "$7",
        paddingRight: "$7",
        paddingBottom: "$6",
      }}
    >
      <NextLink href="/">
        <Box css={{ "@bp5": { display: "none" } }}>
          <Link>
            <NextImage
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              objectFit="contain"
            />
          </Link>
        </Box>
      </NextLink>
      <Flex as="nav">
        <Burger />
        <Flex css={{ "@bp5": { display: "none" } }}>
          <NextLink href="/buy">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Buy / Sell</Text>
            </Link>
          </NextLink>
          <NextLink href="grow">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Grow</Text>
            </Link>
          </NextLink>
          <NextLink href="markets">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Markets</Text>
            </Link>
          </NextLink>
          <NextLink href="business">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Business</Text>
            </Link>
          </NextLink>
          <NextLink href="support">
            <Link variant="white">
              <Text>Support</Text>
            </Link>
          </NextLink>
        </Flex>
      </Flex>
      <Box css={{ "@bp5": { display: "none" } }}>
        <Button
          css={{ width: "90px", padding: "$2", mr: "$3" }}
          variant="black"
        >
          Sign in
        </Button>
        <Button
          css={{ width: "90px", padding: "$2" }}
          variant="gradientBluePurple"
        >
          Sign up
        </Button>
      </Box>
    </Flex>
  );
};
