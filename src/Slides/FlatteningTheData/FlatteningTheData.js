import React from 'react';
import Slide from '../../Components/RevealComponents/Slide';
import JSX from '../../Components/Highlight/JSX';
import FlattenDataExample from './FlattenDataExample';

const loadingData = `export const fetchNewsletters = () => async dispatch => {
    const { layout, themes, newsletters } = await getNewsletters();
    dispatch({ type: 'newsletters.store', newsletters });
    dispatch({ type: 'layout.store', layout });
    dispatch({ type: 'themes.store', themes });
};`;

const dataModel = `{
    "layout": {
        "id": "string"
        "themes": "[string]"
    },
    "themes": {
        [id:"string"]: {
            "id": "string",
            "title":"string",
            "newsletters": "[string]"
        }
    },
    "newsletters": {
        [id:"string"]: {
            "id": "string",
            "title":"string",
        }
    }
}`;


const splitHook =`const useLayout = () => {
    const layout = useSelector(state => state.layout);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const layout = await fetchLayout();
            dispatch({ type: 'layout.store', layout });
        } ;

        fetchData();
    }, [ dispatch ]);

    return layout;
};`;

const componentWithCustomHook = `const FlattenDataExample = () => {
    const layout = useLayout();
    const themes = layout.themes || [];
    return (
        <div>
            { themes.map((theme) => <Theme theme={theme} key={theme} />) }
        </div>
    );
};`;

export default function FlatteningTheData() {
    return (
        <Slide>
            <Slide>
                <h3>Flattening the data</h3>
            </Slide>
            <Slide>
                <div>
                    <h4>Loading data</h4>
                    <JSX code={loadingData} />
                </div>
            </Slide>
            <Slide>
                <p>Data Model</p>
                <JSX code={dataModel} />
            </Slide>
            <Slide>
                <div>
                    <h4>Splitting Hooks</h4>
                    <JSX code={splitHook}/>
                </div>
            </Slide>
            <Slide>
                <div>
                    <h4>Using the hook in a component</h4>
                    <JSX code={componentWithCustomHook} />
                </div>
            </Slide>
            <Slide>
                <FlattenDataExample />
            </Slide>
        </Slide>
    )
}
