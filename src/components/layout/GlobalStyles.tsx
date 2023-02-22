import GlobalStyles from "@mui/material/GlobalStyles";

const GlobalCustomStyle = () => (
  <GlobalStyles
    styles={{
      body: { margin: 0, padding: 0 },
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
    }}
  />
);

export default GlobalCustomStyle;
