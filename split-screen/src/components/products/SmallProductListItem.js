export const SmallProductListItem = ({ product }) => {
    const { name, price } = product;
    return (
        <h3>Name: {name} - {price}</h3>
    );
};