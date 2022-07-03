import { css } from "@emotion/react";
import { theme } from "../../styles";

const pingerPage = css({
  width: "100vw",
  maxHeight: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "50px 50px",
  backgroundColor: theme.palette.secondary.main,
});

const styles = { pingerPage };

export default styles;
