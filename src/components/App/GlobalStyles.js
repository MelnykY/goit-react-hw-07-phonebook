import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  ${'' /* background-image: url(../../img/bg.webp);
  background-repeat: no-repeat;
  background-size: cover; */}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
button {
    cursor: pointer;
}
`;
