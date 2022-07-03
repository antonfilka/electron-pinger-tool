import { css } from '@emotion/react';
import { theme } from '../../styles';

const header = css({
  width: '100vw',
  height: '60px',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.363)',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '15px 0',
});

const tabs = css({
  marginLeft: '20px',
  display: 'flex',
  alignItems: 'center',
});

const styles = { header, tabs };

export default styles;
