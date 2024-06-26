import { Component } from "react";
import PropTypes from "prop-types";
import css from "./FormularzeM2Z4S1A1.css"
// Moduł 2 - Zajęcia 4 - Formularze
export class LoginForm extends Component {
    handleSubmit = evt => {
        evt.preventDefault();

        const form = evt.currentTarget;
        const login = form.elements.login.value;
        const password = form.elements.password.value;

        console.log(login, password);

        this.props.onSubmit({ login, password });

        form.reset();
    };

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        );
    }
}

// Article 3: Skomplikowane formularze
// Dla poprawy czytelności kodu można przenieść stan początkowy formularza poza ciało klasy.
// Możemy tak zrobić, jeżeli wartości nie są obliczane dynamicznie.
const Gender = {
    MALE: "male",
    FEMALE: "female",
};

const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age: "",
};
export class SignUpForm extends Component {
    state = {
        ...INITIAL_STATE,
    };

    // Dla wszystkich elementów wykorzystamy jedną funkcję obsługującą zmianę stanu ('handler').
    // Inputy będziemy rozróżniać za pomocą atrybutu `name`
    handleChange = evt => {
        const { name, value, type, checked } = evt.target;
        this.setState({ [name]: type === "checkbox" ? checked : value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { login, email, password, agreed } = this.state;

        console.log(
            `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
        );

        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };


    render() {
        const { login, email, password, agreed, gender, age } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        placeholder="Enter login"
                        name="login"
                        value={login}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Agree to terms
                    <input
                        type="checkbox"
                        name="agreed"
                        checked={agreed}
                        onChange={this.handleChange}
                    />
                </label>
                <section>
                    <h2>Choose your gender</h2>
                    <label>
                        Male
                        <input
                            type="radio"
                            checked={gender === Gender.MALE}
                            name="gender"
                            value={Gender.MALE}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Female
                        <input
                            type="radio"
                            checked={gender === Gender.FEMALE}
                            name="gender"
                            value={Gender.FEMALE}
                            onChange={this.handleChange}
                        />
                    </label>
                </section>
                <label>
                    Choose your age
                    <select name="age" value={age} onChange={this.handleChange}>
                        <option value="" disabled>
                            ...
                        </option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36+">36+</option>
                    </select>
                </label>
                <button type="submit" disabled={!agreed}>
                    Sign up as {login}
                </button>
            </form>
        );
    }
}

