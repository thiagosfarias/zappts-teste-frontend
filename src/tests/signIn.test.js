import React from 'react'
import { fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from './../pages/signIn/index';

describe('Test for Sign In Component', () => {
    it('Should sign in the user when form has been submited', async () => {

      const { getByTestId } = render(<SignIn />);

      const fieldNode = await waitFor(() => getByTestId('form-signin'));

      const [email, password] = ['thiago@gmail.com', '123abc']


    fireEvent.change(
        fieldNode,
        {
          target: {
            email,
            password,
          },
        },
    );

      expect(fieldNode.email).toEqual(email)
      expect(fieldNode.email).toContain('@')
      expect(fieldNode.email).toContain('.com')
  
      expect(fieldNode.password).toEqual(password)

      const btnNode = await waitFor(() => getByTestId('btn-signin'));



      fireEvent.click(btnNode);
      
      expect(await waitFor(() => getByText('Credentials Valid')))


    });
  });

describe('Test for Sign In Component', () => {
  it('Should not sign when user when form has been submited', async () => {
    
  })
})


  