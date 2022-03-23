import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Search from '../Search';
import './index.css';

const FixedHeader = styled(Box)(() => ({
    width: '100%',
    height: 70,
    position: 'fixed',
    top: 0,
    fontSize: 22,
    borderBottom: '1px solid #ddd',
    lineHeight: '70px',
}));

const Index = ({ withSearch }: any) => {
    return (
        <React.Fragment>
            <FixedHeader>
                <Grid container>
                    <Grid item>
                        <div className="name">
                            <strong>Best</strong>
                            <span>Search</span>
                        </div>
                        <div className="logo">BS</div>
                    </Grid>
                    <Grid item xs={8}>
                        {withSearch && <Search />}
                    </Grid>
                </Grid>
            </FixedHeader>
        </React.Fragment>
    );
};

export default Index;