import { LargePersonListItem } from './components/people/LargePersonListItem';
import { SmallPersonListItem } from './components/people/SmallPersonListItem';
import { SmallProductListItem } from './components/products/SmallProductListItem';
import { LargeProductListItem } from './components/products/LargeProductListItem';
import { RegularList } from './components/RegularList';
import { NumberedList } from './components/NumberedList';
import { SplitScreen } from './components/SplitScreen';
import { Modal } from './components/Modal';

const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
}, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
}, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
}, {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
}, {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
}];

const LeftHandComponent = ({ name }) => {
    return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>
};

const RightHandComponent = ({ message }) => {
    return <p style={{ backgroundColor: 'red' }}>{message}</p>
};

function App() {
    return (
        <>
            <Modal>
                <LargeProductListItem product={products[0]} />
            </Modal>
            <SplitScreen leftWeight={1} rightWeight={3}>
                <LeftHandComponent name='John' />
                <RightHandComponent message='Hello World!' />
            </SplitScreen>
            <RegularList
                items={people}
                resourceName='person'
                itemComponent={SmallPersonListItem} />
            <NumberedList
                items={people}
                resourceName='person'
                itemComponent={LargePersonListItem} />
            <RegularList
                items={products}
                resourceName='product'
                itemComponent={SmallProductListItem} />
            <NumberedList
                items={products}
                resourceName='product'
                itemComponent={LargeProductListItem} />

        </>
    );
}

export default App;
