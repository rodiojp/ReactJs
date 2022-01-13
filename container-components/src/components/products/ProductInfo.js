export const ProductInfo = ({ product }) => {
    const { name, price, description, rating } = product || {};
    return product ? (
        <>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>Avarage Rating: {rating}</p>
        </>
    ) : <p>Loading...</p>
};