import { css } from "@emotion/react";
import { theme } from "../../styles";

const homePage = css({
  width: "100vw",
  maxHeight: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 0",
  backgroundColor: theme.palette.secondary.main,
});

const styles = { homePage };

export default styles;
