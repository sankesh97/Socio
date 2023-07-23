import { v4 as uuid } from 'uuid';
import { Response } from 'miragejs';
import { formatDate } from '../utils/authUtils';
const sign = require('jwt-encode');

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, userName, password}
 * */

export const signupHandler = function (schema, request) {
  const { userName, password, ...rest } = JSON.parse(request.requestBody);
  try {
    // check if userName already exists
    const foundUser = schema.users.findBy({ userName: userName });
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ['Unprocessable Entity. userName Already Exists.'],
        }
      );
    }
    const _id = uuid();

    const newUser = {
      _id,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      userName,
      password,
      ...rest,
      followers: [],
      following: [],
      bookmarks: [],
    };
    const createdUser = schema.users.create(newUser);
    const encodedToken = sign(
      { _id, userName },
      process.env.REACT_APP_JWT_SECRET
    );
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {userName, password}
 * */

export const loginHandler = function (schema, request) {
  const { userName, password } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ userName: userName });
    if (!foundUser) {
      return new Response(
        404,
        {},
        {
          errors: [
            'The userName you entered is not Registered. Not Found error',
          ],
        }
      );
    }
    if (password === foundUser.password) {
      const encodedToken = sign(
        { _id: foundUser._id, userName },
        process.env.REACT_APP_JWT_SECRET
      );
      return new Response(200, {}, { foundUser, encodedToken });
    }
    return new Response(
      401,
      {},
      {
        errors: [
          'The credentials you entered are invalid. Unauthorized access error.',
        ],
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
