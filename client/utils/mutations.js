import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: SaveBook!) {
        saveBook(input: $input) {
            _id
        }
    }
`;

export const REMOVE_BOOK = gql `
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
        }
    }
`;