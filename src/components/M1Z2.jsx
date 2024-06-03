// Moduł 1 - Zajęcia 2 - Stylizacja
const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    color: "white",
};

const getBgColor = variant => {
    switch (variant) {
        case "info":
            return "blue";
        case "success":
            return "green";
        case "error":
            return "red";
        case "warning":
            return "orange";
        default:
            throw new Error(`Unsupported variant prop value - ${variant}`);
    }
};

export const Alert = ({ variant, children }) => {
    return (
        <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
            {children}
        </p >
    );
};

export const M1Z2_Stylizacja = () => {
    return (
        <>
            <h1>Moduł 1 - Zajęcia 2 - Stylizacja</h1>
            <Alert variant="info">
                Would you like to browse our recommended products?
            </Alert>
            <Alert variant="error">
                There was an error during your last transaction
            </Alert>
            <Alert variant="success">
                Payment received, thank you for your purchase
            </Alert>
            <Alert variant="warning">
                Please update your profile contact information
            </Alert>
        </>
    );
};

