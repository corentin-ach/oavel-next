import Icon from '@/assets/icon.asset';
import { AppBar, Toolbar, Grid, Box } from '@mui/material';
import React, { ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <AppBar position="fixed">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ bgcolor: 'background.default' }}>
          <Grid container alignItems="center">
            <Grid item xs={2} sm={4} md={4} />
            <Grid
              item
              xs={2}
              sm={6}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon />
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <></>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
