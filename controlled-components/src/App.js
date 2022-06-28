import { UncontrolledForm } from './components/UncontrolledForm';

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
    return (
        <>
            <Text message="UncontrolledForm"></Text>
            <UncontrolledForm />
        </>
    );
}

export default App;
