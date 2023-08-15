import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';

import './index.css';
import App from './App';
import { AppProvider } from './Context/AppContext';
import { AuthProvider } from './Context/AuthContext';
import { UsersProvider } from './Context/UsersContext';
import { PostsProvider } from './Context/PostsContext';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsersProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
