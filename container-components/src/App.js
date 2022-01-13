import { CurrentUserLoader } from './components/users/CurrentUserLoader';
import { UserLoader } from './components/users/UserLoader';
import { UserInfo } from './components/users/UserInfo';
import { ResourceLoader } from './components/ResourceLoader';
import { ProductInfo } from './components/products/ProductInfo';
import { DataSource } from './components/DataSource';
import axios from 'axios';

const userIds = ["234", "345",];
const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;
};
const Text = ({ message }) => <h1>{message}</h1>;
const getLocalStorageData = key => () => {
    return localStorage.getItem(key) || ""
};
console.log(getLocalStorageData("message")());

function App() {
    return (
        <>
            <Text message={getLocalStorageData("message")()}></Text>
            <DataSource getDataFunc={getLocalStorageData("message")} resourceName="message">
                <Text />
            </DataSource>
            <Text message='DataSource - getDataFunc(getServerData(axios.get("user/345"))) - UserInfo'></Text>
            <DataSource getDataFunc={getServerData("user/345")} resourceName="user">
                <UserInfo />
            </DataSource>
            <Text message='ResourceLoader - ProductInfo "product/2345"'></Text>
            <ResourceLoader resourceUrl="product/2345" resourceName="product">
                <ProductInfo />
            </ResourceLoader>

            <Text message='ResourceLoader - UserInfo "user/234"'></Text>
            <ResourceLoader resourceUrl="user/234" resourceName="user">
                <UserInfo />
            </ResourceLoader>

            <Text message='CurrentUserLoader - UserInfo "currentUser"'></Text>
            <CurrentUserLoader>
                <UserInfo />
            </CurrentUserLoader>

            <Text message='userIds.map(UserLoader - UserInfo "user/["234", "345",]")'></Text>
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
