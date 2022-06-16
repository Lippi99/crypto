import React from "react";
import { css } from "../../../stitches.config";

interface Cryptos {
  Data: [
    {
      CoinInfo: {
        Name: string;
        FullName: string;
        Id: string;
      };
      DISPLAY: {
        USD: {
          PRICE: string;
        };
      };
    }
  ];
}

interface CryptosProps {
  cryptos: Cryptos;
}

export const Table = ({ cryptos }: CryptosProps) => {
  const rows = css({
    variants: {
      variant: {
        table: {
          maxWidth: "800px",
          width: "100%",
          background: "#1A1B23",
          padding: "$5",
          marginLeft: "auto",
          marginRight: "auto",
          borderCollapse: "collapse",
          borderRadius: "25px",
        },
        tableRow: {
          borderBottom: "1px solid #2B2C3B",
        },
        firstColumn: {
          color: "#ffffff",
          textAlign: "center",
          paddingTop: "$5",
          paddingLeft: "$1",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
        secondColumn: {
          color: "#B982FF",

          paddingTop: "$5",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
        thirdColumn: {
          color: "#ffffff",

          paddingTop: "$5",
          paddingBottom: "$5",
          fontFamily: "Inter",
        },
      },
    },
  });

  return (
    <table className={rows({ variant: "table" })}>
      {cryptos.Data?.map((crypto) => {
        const { CoinInfo, DISPLAY } = crypto;

        return (
          <tr key={CoinInfo.Id} className={rows({ variant: "tableRow" })}>
            <td className={rows({ variant: "firstColumn" })}>
              {CoinInfo.FullName}
            </td>
            <td className={rows({ variant: "secondColumn" })}>
              {CoinInfo.Name}
            </td>
            <td className={rows({ variant: "thirdColumn" })}>
              {DISPLAY.USD.PRICE}
            </td>
          </tr>
        );
      })}
    </table>
  );
};
