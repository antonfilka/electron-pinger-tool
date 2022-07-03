import { css } from "@emotion/react";
import { theme } from "../../styles";

const footer = css({
  width: "100vw",
  height: "2px",
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.363)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 0",
});

const styles = { footer };

export default styles;
