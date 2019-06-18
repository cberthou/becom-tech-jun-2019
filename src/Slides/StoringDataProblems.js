import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import JSX from '../Components/Highlight/JSX';

const responsibleComponent = `const ResponsibleComponent = () => {
    const [data, setData] = useState({});
    useEffect(() =>
        fetchData()
            .then(setData)
    );
    
    return (
        <ChildComponentWithData data={data} />
    );
}`;

const multipleCalls = `const MultipleRenderOfSameComponent = () => (
    <Wrapper>
        <ResponsibleComponent />
        <ResponsibleComponent />
        <ResponsibleComponent />
    </Wrapper>
)`;

export default function StoringDataProblems() {
    return (
        <Slide>
            <Slide>
                <h3>Storing data in modern front-end applications</h3>
            </Slide>
            <Slide>
                <div>
                    <h4>Component Oriented Conception</h4>
                    <p>Each component is responsible for its data</p>
                    <JSX code={responsibleComponent} />
                </div>
            </Slide>
            <Slide>
                <div>
                    <h4>Problem</h4>
                    <p>We need to centralize the data store to avoid requests duplication</p>
                    <JSX code={multipleCalls} />
                </div>
            </Slide>
        </Slide>
    )
}
