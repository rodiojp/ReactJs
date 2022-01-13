import { CurrentUserLoader } from './components/users/CurrentUserLoader';
import { UserLoader } from './components/users/UserLoader';
import { UserInfo } from './components/users/UserInfo';
import { ResourceLoader } from './components/ResourceLoader';
import { ProductInfo } from './components/products/ProductInfo';
import { DataSource } from './components/DataSource';
import axios from 'axios';

const userIds = ["234", "345",]
const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;
}
function App() {
    return (
        <>
            <h1>DataSource - getDataFunc(getServerData(axios.get("user/345"))) - UserInfo</h1>
            <DataSource getDataFunc={getServerData("user/345")} resourceName="user">
                <UserInfo />
            </DataSource>
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
