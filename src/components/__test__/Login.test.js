import Login from '../Login';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Link, MemoryRouter } from "react-router-dom";

const MockLogin = () => {
    return(
    <BrowserRouter>
        <Login/>
    </BrowserRouter>
    )
}

test('renders login form', async () =>{
    render(<MockLogin/>);
    const loginForm = screen.getByTestId('login-form');
    expect(loginForm).toBeInTheDocument();
});

test('renders basic email field', async () =>{
    render(<MockLogin/>);
    const basicEmail = screen.getByTestId('login-basic-email');
    expect(basicEmail).toBeInTheDocument();
});

test('renders basic password', async () =>{
    render(<MockLogin/>);
    const basicPassword = screen.getByTestId('login-basic-password');
    expect(basicPassword).toBeInTheDocument();
});

test('renders login button', async () =>{
    render(<MockLogin/>);
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
});

test('renders login form', async () =>{
    render(<MockLogin/>);
    const googleLogin = screen.getByTestId('google-login-button');
    expect(googleLogin).toBeInTheDocument();
});

test('renders login button', async () =>{
    render(<MockLogin/>);
    const signUpLink = screen.getByTestId('link-to-signup');
    expect(signUpLink).toBeInTheDocument();
});

test('should be able to type in email', async() =>{
    render(<MockLogin/>);
    
    const inputEmail = screen.getByPlaceholderText(/Email address/i);
    const inputPassword = screen.getByPlaceholderText(/Password/i);
    const loginButton = screen.getByTestId('login-button');
    
    expect(loginButton).toBeInTheDocument();
    
    fireEvent.change(inputEmail,{ target: { value: "aneesh.thakur@gmail.com" } })
    fireEvent.change(inputPassword,{ target: { value: "aneesh123" } })
    
    expect(inputEmail.value).toBe("aneesh.thakur@gmail.com");
    expect(inputPassword.value).toBe("aneesh123");
    
    fireEvent.click(loginButton);
    console.log(inputEmail);
});

  