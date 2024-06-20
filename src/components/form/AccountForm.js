import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';
import useForm from '../../hooks/useForm';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import { useTheme } from '../../contexts/themeContext';

const AccountForm = () => {
    const { isFormOpen, toggleForm } = useContext(commonContext);
    const { inputValues, handleInputValues, handleFormSubmit } = useForm();
    const { theme } = useTheme();

    const formRef = useRef();

    useOutsideClose(formRef, () => {
        toggleForm(false);
    });

    useScrollDisable(isFormOpen);

    const [isSignupVisible, setIsSignupVisible] = useState(false);

    // Signup-form visibility toggling
    const handleIsSignupVisible = () => {
        setIsSignupVisible(prevState => !prevState);
    };

    const formStyles = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
    };

    const inputStyles = {
        backgroundColor: theme === 'light' ? '#f9f9f9' : '#555555',
        color: theme === 'light' ? '#000000' : '#ffffff',
    };

    const buttonStyles = {
        backgroundColor: theme === 'light' ? '#007bff' : '#1e90ff',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        margin: '5px 0',
    };

    const toggleButtonStyles = {
        ...buttonStyles,
        backgroundColor: theme === 'light' ? '#6c757d' : '#5a6268',
    };

    return (
        <>
            {isFormOpen && (
                <div className="backdrop">
                    <div className="modal_centered">
                        <form
                            id="account_form"
                            ref={formRef}
                            onSubmit={handleFormSubmit}
                            style={formStyles}
                        >
                            {/* Inline CSS for placeholder colors */}
                            <style>
                                {`
                  .input_field::placeholder {
                    color: ${theme === 'light' ? '#000000' : '#ffffff'};
                    opacity: 0.7;
                  }
                  .backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                  .modal_centered {
                    background-color: ${theme === 'light' ? '#ffffff' : '#333333'};
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  }
                `}
                            </style>

                            {/*===== Form-Header =====*/}
                            <div className="form_head">
                                <h2>{isSignupVisible ? 'Signup' : 'Login'}</h2>
                                <p>
                                    {isSignupVisible ? 'Already have an account?' : 'New to i-tunes?'}
                                    &nbsp;&nbsp;
                                    <button
                                        type="button"
                                        onClick={handleIsSignupVisible}
                                        style={toggleButtonStyles}
                                    >
                                        {isSignupVisible ? 'Login' : 'Create an account'}
                                    </button>
                                </p>
                            </div>

                            {/*===== Form-Body =====*/}
                            <div className="form_body">
                                {isSignupVisible && (
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            name="username"
                                            className="input_field"
                                            value={inputValues.username || ''}
                                            onChange={handleInputValues}
                                            required
                                            style={inputStyles}
                                            placeholder="Username"
                                        />
                                        <label className="input_label">Username</label>
                                    </div>
                                )}

                                <div className="input_box">
                                    <input
                                        type="email"
                                        name="mail"
                                        className="input_field"
                                        value={inputValues.mail || ''}
                                        onChange={handleInputValues}
                                        required
                                        style={inputStyles}
                                        placeholder="Email Address"
                                    />
                                    {/* <label className="input_label">Email</label> */}
                                </div>

                                <div className="input_box">
                                    <input
                                        type="password"
                                        name="password"
                                        className="input_field"
                                        value={inputValues.password || ''}
                                        onChange={handleInputValues}
                                        required
                                        style={inputStyles}
                                        placeholder="Password"
                                    />
                                    {/* <label className="input_label">Password</label> */}
                                </div>

                                {isSignupVisible && (
                                    <div className="input_box">
                                        <input
                                            type="password"
                                            name="conf_password"
                                            className="input_field"
                                            value={inputValues.conf_password || ''}
                                            onChange={handleInputValues}
                                            required
                                            style={inputStyles}
                                            placeholder="Confirm Password"
                                        />
                                        {/* <label className="input_label">Confirm Password</label> */}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn login_btn"
                                    style={buttonStyles}
                                >
                                    {isSignupVisible ? 'Signup' : 'Login'}
                                </button>
                            </div>

                            {/*===== Form-Footer =====*/}
                            <div className="form_foot">
                                <p>or login with</p>
                                <div className="login_options">
                                    <Link to="/" style={{ ...buttonStyles, backgroundColor: '#3b5998' }}>Facebook</Link>
                                    <Link to="/" style={{ ...buttonStyles, backgroundColor: '#db4437' }}>Google</Link>
                                    <Link to="/" style={{ ...buttonStyles, backgroundColor: '#1da1f2' }}>Twitter</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccountForm;

