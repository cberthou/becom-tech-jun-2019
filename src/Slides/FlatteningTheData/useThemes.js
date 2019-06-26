import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themes as tm } from './service/newsletters.json';

const useThemes = () => {
    const themes = useSelector(state => state.themes);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const themes = await Promise.resolve(tm);
            dispatch({ type: 'themes.store', themes });
        } ;

        fetchData();
    }, [ dispatch ]);

    return themes;
};

export default useThemes;
