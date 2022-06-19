import Head from "next/head";
import { Box } from "../components/Box";
import { Flex } from "../components/Flex";
import { Header } from "../components/Header";
import NextImage from "next/image";
import { css, keyframes } from "../../stitches.config";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { Grid } from "../components/Grid";
import { Table } from "../components/Table";
import LoadingSpin from "react-loading-spin";
import { useFetch } from "../hooks/useFetch";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const config = {
    headers: {
      "X-RapidAPI-Key": "4406ccacc0msh520c1230d23c4d3p1f49f3jsn5f70dd24d631",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const {
    data: cryptos,
    error,
    isFetching,
  } = useFetch("https://coinranking1.p.rapidapi.com/coins", config);

  const title = css({
    variants: {
      variant: {
        main: {
          fontSize: "$9",
          color: "$light",
          fontWeight: "bolder",
          fontFamily: "Inter",
          "@bp5": {
            fontSize: "$8",
          },
        },
        secondary: {
          fontSize: "$7",
          color: "White",
          fontWeight: "bolder",
          fontFamily: "Inter",
        },
      },
    },
  });

  const paragraph = css({
    variants: {
      variant: {
        main: {
          fontSize: "$1",
          color: "$grayLight",
          fontFamily: "Inter",
          marginTop: "$3",
          marginBottom: "$4",
          lineHeight: 1.5,
        },
      },
    },
  });

  const footer = css({
    variants: {
      variant: {
        footer: {
          maxWidth: "1200px",
          width: "100%",
          paddingTop: "$9",
          paddingBottom: "$4",
          margin: "0 auto",
          position: "relative",
          opacity: 0.8,
        },
      },
    },
  });

  const animation = keyframes({
    " 0%": {
      opacity: 0,
      transform: "scale(1.3)",
    },
    "100%": {
      opacity: 1,
      transform: "(1)",
    },
  });

  const background = css({
    variants: {
      variant: {
        zoom: {
          animation: `${animation} 10000ms ease-out`,
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Crypto</title>
        <meta name="description" content="Crypto website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
        {error && toast.error(error?.message as any)}
        <ToastContainer />
        <Box
          css={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <NextImage
            className={background({ variant: "zoom" })}
            objectFit="cover"
            src="/bg-img.svg"
            priority
            layout="fill"
            alt="background"
          />
        </Box>
        <Section
          css={{
            maxWidth: "1145px",
            margin: "0 auto",
          }}
        >
          <Flex
            direction="column"
            justify="between"
            align="center"
            css={{ marginBottom: "$9", "@bp5": { textAlign: "center" } }}
          >
            <h1 className={title({ variant: "main" })}>
              We make crypto <br /> clear and simple
            </h1>
            <p className={paragraph({ variant: "main" })}>
              Buy, sell, and grow your crypto with CoinFlip,
              the platform dedicated <br /> to every trader at every level.
            </p>
            <Button
              css={{ width: "120px", padding: "$2" }}
              variant="gradientBluePurple"
            >
              Get Started
            </Button>
          </Flex>

          <Grid
            columns={3}
            gap={3}
            justify="between"
            css={{ "@bp5": { gridTemplateColumns: "1fr" } }}
          >
            <Box
              css={{
                background: "$grayDarker",
                borderRadius: "20px",
                textAlign: "center",
                marginTop: "$7",
                paddingTop: "$4",
                paddingBottom: "$7",
                paddingLeft: "$8",
                paddingRight: "$8",
                zIndex: -5,
              }}
            >
              <NextImage
                src="/arrow-left-right.svg"
                width={70}
                height={70}
                alt="arrow left right"
                objectFit="contain"
              />
              <h2 className={title({ variant: "secondary" })}>Trade Desk</h2>
              <p className={paragraph({ variant: "main" })}>
                Invest in crypto anytime, anywhere with our safe, secure, and
                easy to use online platform
              </p>
              <Button variant="purple">Get Started &#8594;</Button>
            </Box>

            <Box
              css={{
                background: "$grayDarker",
                borderRadius: "20px",
                textAlign: "center",
                marginTop: "$7",
                paddingTop: "$4",
                paddingBottom: "$7",
                paddingLeft: "$8",
                paddingRight: "$8",
                zIndex: -5,
              }}
            >
              <NextImage
                src="/coin-flip-atm.svg"
                width={70}
                height={70}
                quality={90}
                alt="coin flip"
                objectFit="contain"
              />
              <h2 className={title({ variant: "secondary" })}>CoinFlip ATMs</h2>
              <p className={paragraph({ variant: "main" })}>
                We have thousands of ATMs located across the U.S. where you can
                easily convert cash to crypto
              </p>
              <Button variant="purple">Find an ATM &#8594;</Button>
            </Box>

            <Box
              css={{
                background: "$grayDarker",
                borderRadius: "20px",
                textAlign: "center",
                marginTop: "$7",
                paddingTop: "$4",
                paddingBottom: "$7",
                paddingLeft: "$3",
                paddingRight: "$3",
                zIndex: -5,
              }}
            >
              <NextImage
                src="/coin-flip-wallet.svg"
                width={70}
                height={70}
                quality={90}
                alt="coin flip wallet"
                objectFit="contain"
              />
              <h2 className={title({ variant: "secondary" })}>
                CoinFlip Wallet
              </h2>
              <p className={paragraph({ variant: "main" })}>
                Store your growing investments in our non-custodial wallet that
                gives you access to a full suite of DeFi services in one place
              </p>

              <Button variant="purple">Download the App &#8594;</Button>
            </Box>
          </Grid>
        </Section>

        <Section css={{ position: "relative" }}>
          <Box
            css={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: -9,
            }}
          >
            <NextImage
              objectFit="cover"
              width={670}
              height={500}
              src="/swirl.svg"
              quality={100}
              alt="swirl image"
            />
          </Box>

          <Box css={{ textAlign: "center" }}>
            <h2 className={title({ variant: "secondary" })}>
              A crypto investment platform <br /> that invests in you
            </h2>
            <p className={paragraph({ variant: "main" })}>
              We invest more resources than any other platrom in making sure
              great <br /> support from real people is a click away, whenever
              you need it.
            </p>
            <Button
              css={{ width: "120px", padding: "$2" }}
              variant="gradientBluePurple"
            >
              Get Started
            </Button>
          </Box>
        </Section>

        <Section css={{ position: "relative" }}>
          <Flex justify="center">
            <Box
              css={{
                position: "absolute",
                left: "16%",
                bottom: "48%",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                boxShadow: `         
                0 0 80px 80px #D0A22C,
                0 0 90px 80px #82392C
            `,
                zIndex: -999,
                "@bp5": {
                  display: "none",
                },
              }}
            ></Box>
            <Box
              css={{
                position: "absolute",
                left: "15%",
                top: "50px",
                "@bp5": {
                  display: "none",
                },
              }}
            >
              <NextImage
                width={150}
                height={160}
                alt="field icon"
                src="/field.svg"
                objectFit="contain"
              />
            </Box>
            <Box
              css={{
                position: "absolute",
                left: "13%",
                bottom: "30%",
                zIndex: -999,
                "@bp5": {
                  display: "none",
                },
              }}
            >
              <NextImage
                width={100}
                height={120}
                alt="sphere icon"
                src="/sphere.svg"
                objectFit="contain"
              />
            </Box>
            <Flex justify="center">
              <Box css={{ textAlign: "center" }}>
                <h2 className={title({ variant: "secondary" })}>
                  24/7 access to full service customer support
                </h2>
                <p className={paragraph({ variant: "main" })}>
                  We invest more resources than any other platform in making
                  sure great support from real people is <br /> a click away,
                  whenever you need it.
                </p>
                <Button
                  css={{ width: "120px", padding: "$2", mr: "$3" }}
                  variant="black"
                >
                  Get Started
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Section>

        <Section css={{ position: "relative" }}>
          <Box
            css={{
              position: "absolute",
              left: 0,
              top: "40%",
              zIndex: -999,
              transform: "rotate(180deg)",
            }}
          >
            <NextImage
              src="/swirl.svg"
              objectFit="cover"
              width={670}
              height={500}
              quality={100}
              alt="swirl image"
            />
          </Box>
          <Box
            css={{
              position: "absolute",
              right: "30%",
              top: "10%",
              zIndex: -999,
              borderRadius: "50%",
              backgroundColor: "#fff",
              boxShadow: "0 0 100px 90px #2C4982" /* outer cyan */,
            }}
          ></Box>
          <Box css={{ textAlign: "center" }}>
            <h2 className={title({ variant: "secondary" })}>
              Buy and sell with the lowest <br /> fees in the industry
            </h2>
            <p className={paragraph({ variant: "main" })}>
              Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using
              bank <br /> transfers or your credit/debit card.
            </p>
            <Button variant="purple">Learn more &#8594;</Button>
          </Box>
          <Flex css={{ marginTop: "$9" }} justify="center">
            {isFetching ? <LoadingSpin /> : <Table cryptos={cryptos} />}
          </Flex>
        </Section>

        <Section>
          <Flex
            justify="between"
            css={{
              maxWidth: "1200px",
              width: "100%",
              margin: "0 auto",
              position: "relative",

              "@bp5": {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Box
              css={{
                position: "absolute",
                right: "10%",
                bottom: "50%",
                borderRadius: "50%",
                boxShadow: `0 0 100px 90px #00C2FF,
                0 0 100px 90px #FF29C3
                `,
                "@bp5": { display: "none" },
              }}
            ></Box>
            <Box css={{ "@bp5": { textAlign: "center" } }}>
              <h2 className={title({ variant: "secondary" })}>
                Take your first step <br /> into safe, secure crypto investing
              </h2>
              <p className={paragraph({ variant: "main" })}>
                Separated they live in Bookmarks right at the coast of the
                famous <br />
                Semantics, large language ocean Separated they live in Bookmarks
                right at the coast.
              </p>
              <Button
                css={{
                  width: "120px",
                  padding: "$2",
                }}
                variant="gradientBluePurple"
              >
                Get Started
              </Button>
            </Box>
            <Box
              css={{
                "@bp5": {
                  display: "none",
                },
              }}
            >
              <NextImage
                src="/bag.svg"
                width={200}
                alt="bag icon"
                height={200}
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Section>

        <footer
          className={footer({
            variant: "footer",
          })}
        >
          <Box
            css={{
              position: "absolute",
              left: "20%",
              bottom: "30%",
              borderRadius: "50%",
              boxShadow: `0 0 100px 2px #18FF9E,
                0 0 300px 90px #17FFE3
              `,
              "@bp5": { display: "none" },
            }}
          ></Box>
          <Flex
            justify="between"
            align="center"
            css={{ "@bp5": { flexDirection: "column", textAlign: "center" } }}
          >
            <Box>
              <NextImage
                src="/logo.svg"
                alt="logo"
                width={200}
                height={60}
                objectFit="contain"
              />
              <p className={paragraph({ variant: "main" })}>
                CoinFlip, the world is leading bitcoin ATM operator, makes{" "}
                <br /> it so flippin is easy to buy and sell bitcoin via cash,
                card, <br /> or bank transfer. <br /> Sign up to get the latest
                in CoinFlip news, discounts, and more.
              </p>
              <Button
                css={{
                  width: "300px",
                  padding: "$2",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                variant="borderGradient"
              >
                Email Address
              </Button>
              <p className={paragraph({ variant: "main" })}>
                © 2022 Felipe Lippi
              </p>
            </Box>
            <Box css={{ "@bp5": { display: "none" } }}>
              <p className={paragraph({ variant: "main" })}>Company</p>
              <p className={paragraph({ variant: "main" })}>About</p>
              <p className={paragraph({ variant: "main" })}>Careers</p>
              <p className={paragraph({ variant: "main" })}>Press</p>
              <p className={paragraph({ variant: "main" })}>News</p>
              <p className={paragraph({ variant: "main" })}>Merch</p>
            </Box>
            <Box
              css={{
                "@bp5": {
                  width: "100%",
                  paddingLeft: "$4",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                },
              }}
            >
              <p className={paragraph({ variant: "main" })}>
                Privacy Policy and Terms of Service
              </p>
              <p className={paragraph({ variant: "main" })}>
                CoinFlip Privacy Policy
              </p>
              <p className={paragraph({ variant: "main" })}>
                CoinFlip Biometrics Privacy Policy
              </p>
              <p className={paragraph({ variant: "main" })}>
                CoinFlip Financial Privacy Notice
              </p>
              <p className={paragraph({ variant: "main" })}>
                CoinFlip Terms of Service
              </p>
              <p className={paragraph({ variant: "main" })}>
                CoinFlip Trade Desk Terms of Service
              </p>
            </Box>
          </Flex>
        </footer>
      </Box>
    </>
  );
};
export default Home;
