import React from 'react'
import { fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './../pages/signUp/index';

describe('Test for Sign In Component', () => {
    it('Should sign in the user when form has been submited', async () => {

      const { getByTestId } = render(<SignUp />);

      const fieldNode = await waitFor(() => getByTestId('form-signup'));

      const [fullname, email, password] = ['Thiago','thiago@gmail.com', '123abc']


    fireEvent.change(
        fieldNode,
        {
          target: {
            fullname,
            email,
            password
          },
        },
    );
     
      expect(fieldNode.email).toEqual(email)
      expect(fieldNode.email).toContain('@')
      expect(fieldNode.email).toContain('.com')
  
      expect(fieldNode.password).toEqual(password)

      const btnNode = await waitFor(() => getByTestId('btn-signup'));

      fireEvent.click(btnNode);
      
      expect(await waitFor(() => getByTestId('sucess')))

    });
  });

describe('Test for Sign In Component', () => {
  it('Should not sign when user when form has been submited', async () => {
    const { getByTestId } = render(<SignUp />);

      const fieldNode = await waitFor(() => getByTestId('form-signup'));

      const [email, password] = ['thiago@gma', '123ac']


    fireEvent.change(
        fieldNode,
        {
          target: {
            email,
            password,
          },
        },
    );
  
      expect(fieldNode.password).toEqual(password)

      const btnNode = await waitFor(() => getByTestId('btn-signup'));


      fireEvent.click(btnNode);
      
      expect(await waitFor(() => getByTestId('fail')))
    });
  })
