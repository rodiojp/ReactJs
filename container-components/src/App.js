import { CurrentUserLoader } from './components/users/CurrentUserLoader';
import { UserLoader } from './components/users/UserLoader';
import { UserInfo } from './components/users/UserInfo';

const userIds = ["234", "345",]
function App() {
    return (
        <>
            <CurrentUserLoader>
                <UserInfo />
            </CurrentUserLoader>
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
