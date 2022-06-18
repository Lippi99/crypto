import Image from "next/image";
import React from "react";
import { css } from "../../../stitches.config";
import { Box } from "../Box";
import { Flex } from "../Flex";

interface Cryptos {
  data: {
    coins: [
      {
        name: string;
        symbol: string;
        uuid: string;
        price: string;
        iconUrl: string;
        change: string;
      }
    ];
  };
}

interface CryptosProps {
  cryptos: Cryptos;
}

export const Table = ({ cryptos }: CryptosProps) => {
  const rows = css({
    variants: {
      variant: {
        table: {
          maxWidth: "1200px",
          width: "100%",
          background: "$grayDarker",
          marginLeft: "auto",
          marginRight: "auto",
          borderCollapse: "collapse",
          borderRadius: "25px",
        },
        tableRow: {
          borderBottom: "1px solid $grayDark",
        },
        firstColumn: {
          color: "$light",
          textAlign: "center",
          paddingTop: "$5",
          paddingLeft: "$1",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
        secondColumn: {
          color: "$purple",
          textAlign: "center",
          paddingTop: "$5",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
        thirdColumn: {
          color: "$light",
          paddingTop: "$5",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
        fourthColumnGreen: {
          color: "$greenLighter",
          fontWeight: "bolder",
          paddingTop: "$5",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
        fourthColumnRed: {
          color: "$danger",
          fontWeight: "bolder",
          paddingTop: "$5",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
      },
    },
  });

  return (
    <table className={rows({ variant: "table" })}>
      <tbody>
        {cryptos.data?.coins?.slice(0, 5).map((crypto) => {
          const { name, price, uuid, symbol, iconUrl, change } = crypto;

          const fullPrice = Number(price).toFixed(2);
          const variablePrice = Number(change);

          return (
            <tr key={uuid} className={rows({ variant: "tableRow" })}>
              <td className={rows({ variant: "firstColumn" })}>
                <Flex align="center" justify="center">
                  <Image
                    title={name}
                    src={iconUrl}
                    alt={name}
                    width={30}
                    height={30}
                    objectFit="cover"
                  />
                  <Box css={{ marginLeft: "$3" }}>{symbol}</Box>
                </Flex>
              </td>
              <td className={rows({ variant: "secondColumn" })}>
                <Flex align="center" justify="center">
                  {name}
                </Flex>
              </td>
              <td className={rows({ variant: "thirdColumn" })}>
                <Flex
                  align="center"
                  justify="center"
                  css={{ marginRight: "$6" }}
                >
                  {"$"} {fullPrice}
                </Flex>
              </td>
              <td
                className={rows({
                  variant:
                    variablePrice > 0 ? "fourthColumnGreen" : "fourthColumnRed",
                })}
              >
                <Flex
                  align="center"
                  justify="center"
                  css={{ marginRight: "$6" }}
                >
                  {variablePrice > 0
                    ? `+${variablePrice}%`
                    : `${variablePrice}%`}
                </Flex>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
