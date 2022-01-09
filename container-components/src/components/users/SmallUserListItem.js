export const SmallUserListItem = ({ user }) => {
    const { name, age } = user;
    return (
        <p>Name: {name}, Age: {age} years</p>
    )
};