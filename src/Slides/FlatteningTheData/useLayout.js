import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layout as lt } from './service/newsletters.json';

const useLayout = () => {
    const layout = useSelector(state => state.layout);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const layout = await Promise.resolve(lt);
            dispatch({ type: 'layout.store', layout });
        } ;

        fetchData();
    }, [ dispatch ]);

    return layout;
};

export default useLayout;
