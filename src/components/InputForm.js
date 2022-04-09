import {Component} from 'react';
import { InputItem } from "./inputForm.styled";

export class InputForm extends Component {
    state = {
        name: "",
        number: ""
    };
    onInput = (evt) => {
        evt.preventDefault();
        this.setState ({ [evt.currentTarget.name]: evt.currentTarget.value });
    }
    render() {
        return (
            <form><label>Name
                <InputItem
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={ this.state.name}
                    onChange={this.onInput}
                /></label>
                <label>Number<InputItem
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={ this.state.number}
                    onChange={this.onInput}
                /></label>
                <button type="submit" onClick={evt => {
                    // if (input:invalid) return;
                        this.setState({ name: "", number: "" });
                        this.props.SubmitHandle(evt, this.state);
                } }>Add contact</button>
            </form>
        )
    }
}