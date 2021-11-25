import React, {Component} from 'react';
import Error from '../Error/Error';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      phone: '',
      language: 'язык',
      isAgree: true,
      isValidUserName: true,
      isValidEmail: true,
      isValidPhone: true,
      allInputIsValid: false
    }
  }

  onInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    
  }

  isValid = (value, name) => {
    let reg = /^[A-Za-zА-Яа-я -]+$/;
    this.setState({[name]: reg.test(value)});
  }

  onSubmitForm = (e) => {
    const {userName, email, phone, language, isAgree} = this.state;
    
    e.preventDefault();
    // if(!this.allInputIsValid) return;
    this.isValid(userName, 'isValidUserName');


  }

  render () {
    const {userName, email, phone, language, isAgree} = this.state;
    const {isValidUserName, isValidEmail, isValidPhone} = this.validate;

    return (
      <form className='registration-form' onSubmit={this.onSubmitForm}>
        <h2>Регистрация</h2>
        <div className='registration-form-login'>
          <span>Уже есть аккаунт?</span>
          <a href='#0'>Войти</a>
        </div>
        <fieldset>
          <label htmlFor='userName'>Имя</label>
          <input id='userName'
                  type='text'
                  name='userName' 
                  value={userName}
                  placeholder='Введите Ваше имя'
                  onChange={this.onInputChange}/>
        </fieldset>
        {!isValidUserName && <Error/>}
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input id='email'
                  type='email'
                  name='email' 
                  value={email}
                  placeholder='Введите Ваш emil'
                  onChange={this.onInputChange}/>
        </fieldset>
        {!isValidEmail && <Error/>}
        <fieldset>
          <label htmlFor='phone'>Номер телефона</label>
          <input id='phone'
                  type='number'
                  name='phone' 
                  value={phone}
                  placeholder='Введите номер телефона'
                  onChange={this.onInputChange}/>
        </fieldset>
        {!isValidPhone && <Error/>}
        <fieldset>
          <label htmlFor='language'>Язык</label>
          <select id='language'
                  value={language}
                  name='language'
                  onChange={this.onInputChange}>
            <option value='язык'>Язык</option>
            <option value='русский'>Русский</option>
            <option value='английский'>Английский</option>
            <option value='китайский'>Китайский</option>
            <option value='испанский'>Испанский</option>        
          </select>
        </fieldset>
        <fieldset>
          <input id='isAgree'
                  type='checkbox'
                  name='isAgree'
                  checked={isAgree}
                  onChange={this.onInputChange}/>
          <label htmlFor='isAgree'>Принимаю
            <a href='#0'>условия</a>
            использования
          </label>
        </fieldset>
        <button type='submit' className={`registration-form-button ${this.allInputIsValid && 'active'}`}>Зарегистрироваться</button>
      </form>
    )
  }
}