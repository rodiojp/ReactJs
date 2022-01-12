import { CurrentUserLoader } from './components/users/CurrentUserLoader';
import { UserLoader } from './components/users/UserLoader';
import { UserInfo } from './components/users/UserInfo';


function App() {
    return (
        <>
            <CurrentUserLoader>
                <UserInfo />
            </CurrentUserLoader>
            <UserLoader userId = "234">
                <UserInfo />
            </UserLoader>
        </>
    );
}

export default App;
