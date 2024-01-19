import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-coda-caption: 'Coda Caption';
--font-abril-fatface: 'Abril Fatface';
--font-carter-one: 'Carter One';

/* font sizes */
--font-size-xs: 12px;
--font-size-31xl: 50px;

/* Colors */
--color-gainsboro: #d8d8d8;
--color-white: #fff;
--color-black: #000;

/* Border radiuses */
--br-30xl: 49px;

}
`;
}
