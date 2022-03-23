import React, { useEffect } from 'react';
import { OutlinedInput, Button, Grid } from '@mui/material';
import { Search } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { keywordAction, loadingAction, resultAction } from '../../redux/actions';
import request from '../../utils/request';

const getDataList = (keyword?: string) => (async (dispatch: any, getState: any) => {
    dispatch(keywordAction(keyword?.replaceAll('+', ' ')));
    dispatch(loadingAction(true));
    const res = await request('/interview/keyword_search', {
        method: 'POST',
        data: {
            login_token: 'INTERVIEW_SIMPLY2021',
            search_phrase: keyword
        }
    });

    if (res.data.status === 'OK') {
        dispatch(loadingAction(false));
        dispatch(resultAction(res.data.data.product_trends));
    }
});

const SearchInput = styled(OutlinedInput)(() => ({
    height: 40,
    width: '100%'
}));

const Index = ({ justifyContent }: any) => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const keyword = useSelector((state: any) => state.searchReducer.keyword);

    const handleClick = (e: any) => {
        if (e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
            navigate(`/search/${keyword?.replaceAll(' ', '+') ?? ''}`);
            dispatch(getDataList(keyword));
        }
    };

    const handleChange = (e: any) => {
        dispatch(keywordAction(e.target.value));
    };

    useEffect(() => {
        if ('keyword' in params) {
            dispatch(getDataList(params?.keyword));
        }
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={2} justifyContent={justifyContent}>
                <Grid item xs={8}>
                    <SearchInput value={keyword} onChange={handleChange} onKeyDown={handleClick} placeholder="Search for new products in 10k+ stores." />
                </Grid>
                <Grid item>
                    <Button variant="outlined" size="large" onClick={handleClick}><Search /></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Index;