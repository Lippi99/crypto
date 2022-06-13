import { Flex } from "../Flex";
import { Link } from "../Link";
import { Text } from "../Text";
import NextLink from "next/link";
import NextImage from "next/image";
import { Button } from "../Button";
export const Header = () => {
  return (
    <Flex
      as="header"
      justify="between"
      align="center"
      css={{
        paddingLeft: "$9",
        paddingRight: "$9",
        paddingBottom: "$4",
      }}
    >
      <NextLink href="/">
        <Link>
          <NextImage
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </Link>
      </NextLink>
      <Flex as="nav">
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
      <Flex>
        <Button
          css={{ width: "90px", padding: "$2", mr: "$6" }}
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
      </Flex>
    </Flex>
  );
};
