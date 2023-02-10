import GlobalStyles from "@mui/material/GlobalStyles";

const GlobalCustomStyle = () => (
  <GlobalStyles
    styles={{
      body: { margin: 0, padding: 0, height: "100vh", overflow: "hidden" },
      img: {
        maxWidth: "100%",
      },
      "*": {
        boxSizing: "border-box",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 400,
      },
      a: {
        textDecoration: "none",
      },
      "#__next": {
        height: "100vh",
        overflow: "hidden",
      },
    }}
  />
);

export default GlobalCustomStyle;
