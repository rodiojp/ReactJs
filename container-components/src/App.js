import { CurrentUserLoader } from './components/users/CurrentUserLoader';
import { UserLoader } from './components/users/UserLoader';
import { UserInfo } from './components/users/UserInfo';
import { ResourceLoader } from './components/ResourceLoader';
import { ProductInfo } from './components/products/ProductInfo';

const userIds = ["234", "345",]
function App() {
    return (
        <>
            <h1>ResourceLoader - ProductInfo "product/2345"</h1>
            <ResourceLoader resourceUrl="product/2345" resourceName="product">
                <ProductInfo />
            </ResourceLoader>

            <h1>ResourceLoader - UserInfo "user/234"</h1>
            <ResourceLoader resourceUrl="user/234" resourceName="user">
                <UserInfo />
            </ResourceLoader>

            <h1>CurrentUserLoader - UserInfo "currentUser"</h1>
            <CurrentUserLoader>
                <UserInfo />
            </CurrentUserLoader>

            <h1>userIds.map(UserLoader - UserInfo "user/["234", "345",]")</h1>
            {
                userIds.map(
                    (id) =>
                        <UserLoader key={id} userId={id}>
                            <UserInfo />
                        </UserLoader>
                )
            }
        </>
    );
}

export default App;
