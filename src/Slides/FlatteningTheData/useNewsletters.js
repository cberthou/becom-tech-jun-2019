import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsletters as nl } from './service/newsletters.json';

const useNewsletters = () => {
    const newsletters = useSelector(state => state.newsletters);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const newsletters = await Promise.resolve(nl);
            dispatch({ type: 'newsletters.store', newsletters });
        } ;

        fetchData();
    }, [ dispatch ]);

    return newsletters;
};

export default useNewsletters;
