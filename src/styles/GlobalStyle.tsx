import { css, Global } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'HallymGothic-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2')
      format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: 'HallymGothic-Regular', -apple-system, Roboto, Oxygen-Sans, Ubuntu, Cantarell,
      'Helvetica Neue', sans-serif;
  }

  body,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  :root {
    font-size: 62.5%;
  }
`;
export default function GlobalStyle() {
  return <Global styles={globalStyles} />;
}
