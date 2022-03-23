import React from "react";
import { createStitches, globalCss } from "@stitches/core";

const globalStyles = globalCss({
  //css reset eric Meyer

  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video":
    {
      margin: "0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
    },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section":
    {
      display: "block",
    },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
    // @ts-ignore
    content: "none",
  },
  table: {
    borderSpacing: "0",
  },
});

const { css } = createStitches({
  ...globalStyles,
  theme: {
    colors: {
      lightPurple: "#b5a8ff",
      basePurple: "#7c4dff",
      darkPurple: "#5c2dff",

      gray100: "hsl(206,22%,99%)",
      gray200: "hsl(206,12%,97%)",
      gray300: "hsl(206,11%,92%)",
      gray400: "hsl(206,10%,84%)",
      gray500: "hsl(206,10%,76%)",
      gray600: "hsl(206,10%,44%)",
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
    },
    size: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
    },
    radii: {
      round: "9999px",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
    },
  },
});

const buttonStiches = css({
  appearance: "none",
  border: "none",
  borderRadius: "$round",
  backgroundColor: "transparent",
  marginRight: 10,

  variants: {
    // MODO 1 -  VARIANT
    variant: {
      size: {
        1: {
          height: "$5",
          fontSize: "$1",
        },
        2: {
          height: "$7",
          fontSize: "$2",
        },
      },

      gray: {
        backgroundColor: "$gray500",
        "&:hover": {
          backgroundColor: "$gray400",
        },
      },
      purple: {
        backgroundColor: "$basePurple",
        "&:hover": {
          backgroundColor: "$darkPurple",
        },
      },
    },
    // MODO 2 -  CUSTOM_VARIANTS
    outlined: {
      true: {
        border: "1px solid",
        background: "transparent",
      },
    },
  },

  compoundVariants: [
    {
      variant: "gray",
      outlined: true,
      css: {
        borderColor: "$gray600",
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: "$basePurple",
        color: "$darkPurple",
        "&:hover": {
          color: "white",
        },
      },
    },
  ],

  // MODO 3 -  DEFAULT_VARIANTS
  //   defaultVariants: {
  //     variant: "$gray400",
  //     size: "$2",
  //   },
});

() => (
  <button className={buttonStiches({ variant: "purple" })}>
    Button variant purple
  </button>
);

export default buttonStiches;
