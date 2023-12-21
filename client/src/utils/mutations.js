import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
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
mutation saveBook($input: SaveBookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        authors
        bookId
        description
        image
        link
        title
      }
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