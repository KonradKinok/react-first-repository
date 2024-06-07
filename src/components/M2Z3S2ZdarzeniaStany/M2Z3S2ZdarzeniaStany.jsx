import { Component } from "react";
import PropTypes from "prop-types";

// Moduł 2 - Zajęcia 3 - Zdarzenia i stany
// Section2 Article2: Licznik
export class Counter extends Component {
    static defaultProps = {
        step: 1,
    };
    static propTypes = {
        step: PropTypes.number,
    };

    handleIncrement = evt => {
        console.log("Increment button was clicked!", evt);// działa
        console.log("this.props: ", this.props.step);// działa number props

        this.step++;
    };

    handleDecrement = evt => {
        console.log("Decrement button was clicked!", evt);// działa
        console.log("this.props: ", this.props);// działa --object 
        this.step--;
    };
    // handleIncrement = () => {
    //     this.setState((state, props) => ({
    //         value: state.value + props.step,
    //     }));
    // };

    // handleDecrement = () => {
    //     this.setState((state, props) => ({
    //         value: state.value - props.step,
    //     }));
    // };
    render() {
        const { step } = this.props;

        return (
            <div>
                <span>{step}</span>
                <button type="button" onClick={this.handleIncrement}>
                    Increment by {step}
                </button>
                <button type="button" onClick={this.handleDecrement}>
                    Decrement by {step}
                </button>
            </div>
        );
    }
}

// Moduł 2 - Zajęcia 3 - Zdarzenia i stany
// Section3 Article3: Zmiana stanu komponentu
export class Toggle extends Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    };

    render() {
        const { isOpen } = this.state;
        const { children } = this.props;

        return (
            <div>
                <h2>Moduł 2 - Zajęcia 3 - Zdarzenia i stany Section3 Article3: Zmiana stanu komponentu</h2>
                <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
                {isOpen && children}
            </div>
        );
    }
}
// Moduł 2 - Zajęcia 3 - Zdarzenia i stany
// Section3 Article7: Zmiana stanu rodzica
// Przycisk otrzyma funkcję changeMessage (nazwa właściwości props),
// która zostanie wywołana podczas zdarzenia onClick
const ButtonControl = ({ changeMessage, label }) => (
    <button type="button" onClick={changeMessage}>
        {label + 1}
    </button>
);

export class ButtonClass extends Component {
    state = {
        message: new Date().toLocaleTimeString(),
    };

    // Metoda, którą będziemy przekazywać do przycisku
    updateMessage = evt => {
        console.log(evt);// Dostępny obiekt zdarzenia w odwołaniu onClick

        this.setState({
            message: new Date().toLocaleTimeString(),
        });
    };

    render() {
        return (
            <>
                <h2>Moduł 2 - Zajęcia 3 - Zdarzenia i stany Section3 Article7: Zmiana stanu rodzica</h2>
                <span>{this.state.message}</span>
                <ButtonControl label="Change messages" changeMessage={this.updateMessage} />
            </>
        );
    }
}