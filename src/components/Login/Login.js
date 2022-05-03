
import { useFormik } from 'formik';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css'

const initialValues = {
    username: '',
    password: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {
    // eslint-disable-next-line no-useless-escape
    const nameRegex = /^[a-zA-Z\-]+$/
    let errors = {}
    if(!values.username) {
        errors.username = 'This field is required!'
    } else if (!nameRegex.test(values.username)) {
        errors.username = 'Username can not contain special characters!'
    }

    if(!values.password) {
        errors.password = 'This field is required!'
    }

    return errors
}
export default function Login() {
    const [isOpen, setIsOpen] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const formik = useFormik({
        initialValues, 
        onSubmit,
        validate
    })

    function toggleModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)   
    }

    function togglePassword() {
        setPasswordShown(!passwordShown)
    }

    return (
        <div className='container wrapper'>
            <div id="login-button" onClick={toggleModal} style={{display: isOpen ? 'none' : 'block'}}>
                <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt="" />
            </div>

            <div id='login-wrapper' style={{display: isOpen ? 'block' : 'none'}}>
                <br/>   
                <h1>Login</h1>
                <span className='close-btn' onClick={closeModal} style={{zIndex: '1000'}}>
                    <img  src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" alt="" />
                </span>

                <form onSubmit={formik.handleSubmit} style={{marginBottom: '24px', marginTop: '10px'}}>
                    <div className='form-control'>
                        <input 
                        type="text" 
                        name='username' 
                        placeholder='Username' 
                        onChange={formik.handleChange} 
                        value={formik.values.username} />
                        {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
                    </div>
                    <div className='form-control'>
                        <input 
                        type={passwordShown ? 'text' : 'password'} 
                        name='password' 
                        placeholder='Password' 
                        onChange={formik.handleChange} 
                        value={formik.values.password} />
                        
                        <div className='toggle-eye' onClick={togglePassword}>
                            {!passwordShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </div>

                        {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}

                    </div>


                    <button className='style-button' type='submit'>Login</button>

                    <div id='remember-container'>
                        <input type="checkbox" id='checkbox-2-1' className='checkbox' />
                        <span id='remember'>Remember me</span>
                    </div>

                </form>
            </div>
        </div>
    );
}