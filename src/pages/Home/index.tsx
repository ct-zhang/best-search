import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from '../../components/Layout';
import Search from '../../components/Search';

const Title = styled(Grid)(() => ({
    textAlign: 'center',
    fontSize: 40,
    margin: '140px 0px 70px 0px'
}));

const Index = () => {
    return (
        <Layout>
            <Title>
                Search Trends
            </Title>
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <Search justifyContent="center" />
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Index;