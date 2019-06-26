import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsletters } from './service/newsletters';

const useNewsletters = () => {
    const newsletters = useSelector(state => state.newsletters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNewsletters());
    }, [ dispatch ]);

    return newsletters;
};

export default useNewsletters;
