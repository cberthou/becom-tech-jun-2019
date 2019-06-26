import nl from './newsletters.json';

export const fetchNewsletters = () => async dispatch => {
    const newsletters = await Promise.resolve(nl);
    dispatch({ type: 'newsletters.store', newsletters });
}
