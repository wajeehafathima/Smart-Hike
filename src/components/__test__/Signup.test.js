import SignUp from '../Signup';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Link, MemoryRouter } from "react-router-dom";

const Mocksignup = () => {
    return(
    <BrowserRouter>
        <SignUp/>
    </BrowserRouter>
    )
}

test('renders signup form', async () =>{
    render(<Mocksignup/>);
    const signupForm = screen.getByTestId('signup-form');
    expect(signupForm).toBeInTheDocument();
});

test('renders basic email field', async () =>{
    render(<Mocksignup/>);
    const basicEmail = screen.getByTestId('signup-basic-email');
    expect(basicEmail).toBeInTheDocument();
});

test('renders basic password', async () =>{
    render(<Mocksignup/>);
    const basicPassword = screen.getByTestId('signup-basic-password');
    expect(basicPassword).toBeInTheDocument();
});

test('renders signup button', async () =>{
    render(<Mocksignup/>);
    const signupButton = screen.getByTestId('signup-button');
    expect(signupButton).toBeInTheDocument();
});

test('renders signup button', async () =>{
    render(<Mocksignup/>);
    const signUpLink = screen.getByTestId('link-to-login');
    expect(signUpLink).toBeInTheDocument();
});

test('should be able to type in email', async() =>{
    render(<Mocksignup/>);
    
    const inputEmail = screen.getByPlaceholderText(/Email address/i);
    const inputPassword = screen.getByPlaceholderText(/Password/i);
    const signupButton = screen.getByTestId('signup-button');
    
    expect(signupButton).toBeInTheDocument();
    
    fireEvent.change(inputEmail,{ target: { value: "aneesh.thakur@gmail.com" } })
    fireEvent.change(inputPassword,{ target: { value: "aneesh123" } })
    
    expect(inputEmail.value).toBe("aneesh.thakur@gmail.com");
    expect(inputPassword.value).toBe("aneesh123");
    
    fireEvent.click(signupButton);
    console.log(inputEmail);
});
