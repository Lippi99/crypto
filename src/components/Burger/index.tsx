import { Box } from "../Box";
import { Flex } from "../Flex";
import { Link } from "../Link";
import NextImage from "next/image";
import NextLink from "next/link";
import { slide as Menu } from "react-burger-menu";
import { Text } from "../Text";
import { Button } from "../Button";

export const Burger = () => {
  const burgerStyle = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      left: "0",
      top: "0",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      paddingLeft: "1rem",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  return (
    <Box css={{ display: "none", "@bp5": { display: "flex" } }}>
      <Menu styles={burgerStyle as any}>
        <Flex direction="column">
          <Link>
            <NextImage
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              objectFit="contain"
            />
          </Link>
          <NextLink href="/">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Buy / Sell</Text>
            </Link>
          </NextLink>
          <NextLink href="/">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Grow</Text>
            </Link>
          </NextLink>
          <NextLink href="/">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Markets</Text>
            </Link>
          </NextLink>
          <NextLink href="/">
            <Link variant="white" css={{ mr: "$6" }}>
              <Text>Business</Text>
            </Link>
          </NextLink>
          <NextLink href="/">
            <Link variant="white">
              <Text>Support</Text>
            </Link>
          </NextLink>
          <Box css={{ display: "block", marginTop: "$6" }}>
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
      </Menu>
    </Box>
  );
};
