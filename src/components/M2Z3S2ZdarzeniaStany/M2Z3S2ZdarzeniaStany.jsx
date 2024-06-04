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
