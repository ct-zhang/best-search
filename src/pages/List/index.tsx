import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Skeleton, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from '../../components/Layout';

const MySkeleton = styled(Skeleton)(() => ({
    width: '95%',
    height: '95%',
    aspectRatio: '1/1'
}));

const MyBox = styled(Box)(() => ({
    maxWidth: 1280,
    margin: '0px auto',
    marginTop: 140
}));

const Index = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.searchReducer.data);
    const loading = useSelector((state: any) => state.searchReducer.loading);

    return (
        <Layout withSearch>
            <MyBox>
                <Grid container spacing={2}>
                    {loading ? new Array(4).fill('').map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index.toString()}>
                            <MySkeleton variant="rectangular" />
                        </Grid>
                    )) : data?.map((item: any) =>
                        <Grid item xs={12} sm={6} md={3} key={item.updated_at}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {`Growth: ${item.growth}`}
                                    </Typography>
                                    <Typography variant="h5" component="em" color="#ddd">
                                        省略chart图...
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {item.update_dt}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </MyBox>
        </Layout>
    );
};

export default Index;