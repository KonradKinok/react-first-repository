import "./Alert_M1Z2S2.css";

const Alert = ({ variant, outlined, elevated, children }) => {
    const classNames = ["alert", variant];

    if (outlined) classNames.push("is-outlined");
    if (elevated) classNames.push("is-elevated");

    return <p className={classNames.join(" ")}>{children}</p>;
};

export const App_M1Z1S2_VanillaCss = () => {
    return (
        <>
            <h1>Moduł 1 - Zajęcia 2 - Stylizacja</h1>
            <h2>Section2 Article1: Vanilla CSS</h2>
            <Alert variant="info">
                -Would you like to browse our recommended products?
            </Alert>
            <Alert variant="error" outlined>
                There was an error during your last transaction
            </Alert>
            <Alert variant="success" elevated>
                Payment received, thank you for your purchase
            </Alert>
            <Alert variant="warning" outlined elevated>
                Please update your profile contact information
            </Alert>
        </>
    );
};