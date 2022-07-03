import { css } from '@emotion/react';

const mainLayout = css({
  position: 'relative',
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const main = css({
  display: 'flex',
  position: 'relative',
  height: 'max-content',
  flexGrow: 1,
  justifyContent: 'center',
});

const footer = css({
  width: '100%',
});

const upButton = css({
  position: 'fixed',
  zIndex: 1000,
  bottom: '110px',
  right: '30px',
  height: '40px',
  width: '40px',
});

const styles = {
  mainLayout,
  main,
  footer,
  upButton,
};

export default styles;
