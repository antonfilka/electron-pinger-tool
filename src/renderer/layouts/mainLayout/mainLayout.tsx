/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { Footer, Header } from '../../modules';
import { HashRouter } from 'react-router-dom';
import { MainRouter } from '../../routers';
import styles from './styles';

export function MainLayout() {
  return (
    <div css={styles.mainLayout}>
      <HashRouter>
        <Header />
        <main css={styles.main}>
          <MainRouter />
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}
