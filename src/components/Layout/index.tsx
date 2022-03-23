import React from 'react';
import Header from '../Header';
import Search from '../Search';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Grid)(() => ({
    marginTop: 70
}));

const Index = ({ children, withSearch }: any) => {
    return (
        <React.Fragment>
            <Header withSearch={withSearch} />
            <Container>
                {children}
            </Container>
        </React.Fragment>
    );
};

export default Index;