/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styles from './styles';
import { theme } from '../../styles';

const { ipcRenderer } = require('electron');

interface pingRes {
  isAlive: boolean;
  host: string;
}

export function PingerPage() {
  const [host, setHost] = useState<string>('');
  const [pingRes, setPingRes] = useState<pingRes>({ isAlive: false, host: '' });

  const hostInputHandler = (e: any) => {
    setHost(e.target.value);
  };

  const pingButtonHandler = () => {
    ipcRenderer.send('ping-req', host);
    ipcRenderer.on('ping-res', (event, arg) => {
      setPingRes(JSON.parse(arg));
      console.log(pingRes);
    });
  };

  return (
    <Box css={styles.pingerPage}>
      <Typography variant="h6" color="textPrimary" sx={{ mb: '20px' }}>
        Ping any host
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          id="filled-basic"
          label="Host"
          variant="filled"
          sx={{ width: '400px', mr: '20px' }}
          InputLabelProps={{ style: { color: theme.palette.text.primary } }}
          size="small"
          onChange={hostInputHandler}
        />
        <Button variant="contained" size="medium" onClick={pingButtonHandler}>
          Ping
        </Button>
        <Typography variant="subtitle1" color="textPrimary" sx={{ ml: '20px' }}>
          {pingRes.host} is {pingRes.isAlive ? 'active' : 'dead'}
        </Typography>
      </Box>
    </Box>
  );
}
