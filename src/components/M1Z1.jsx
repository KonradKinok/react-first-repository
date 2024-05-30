import PropTypes from "prop-types";
// Moduł 1 - Zajęcia 1 - Wprowadzenie do React
const Product = ({ imgUrl, name, price }) => (
    <div >
        <img src={imgUrl} alt={name} width="240" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <button type="button">Add to cart</button>
    </div>
);

Product.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export const M1Z1 = () => (
    <div >
        <h1>Best selling products</h1>
        <div style={{ display: "flex" }}>
            <Product
                imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
                name="Tacos With Lime"
                price={10.99}
            />
            <Product
                imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                name="Fries and Burger"
                price={14.29}
            />
        </div>
    </div>
);

const Profile = ({ name, email }) => (
    <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
    </div>
);

const Panel = ({ title, children }) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
);

export const M1Z1a = () => (
    <div>
        <Panel title="User profile">
            <Profile name="Mango" email="mango@mail.com" />
        </Panel>
    </div>
);

// Section7 Article1: Zbiory
const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
    return (
        <ul>
            {books.map(book => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul>
    );
};

export const M1Z1S1 = () => {
    return (
        <div>
            <h3>List of books: </h3>
            <BookList books={favouriteBooks} />
        </div>
    );
};