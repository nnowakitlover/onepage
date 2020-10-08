import React, { Component } from 'react';
import '../../styles/FormMail.css';

class FormMail extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleChange = (e) => {
    //     console.log(e.target.name);
    //     console.log(e.target.value);

        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
            
        })
    }

    // onNameChange(e){
    //     this.setState({name: e.target.value})
    // }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className='formMail'>
                <form id="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST"> 
                    <label htmlFor="name">
                        <input type="text" id="name" name="name" placeholder="Imię i Nazwisko" value={this.state.name} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="email">
                        <input type="email" id="email" aria-describedby="emailHelp" name="email" placeholder="Twój adres e-mail" value={this.state.email} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="message">
                        <textarea type="message" id="message" name="message" placeholder="Wiadomość..." value={this.state.message} onChange={this.handleChange}/>
                    </label>
                    <button type="submit" className="btn">Wyślij</button>
                </form>
            </div>
        )
    }
}

export default FormMail;