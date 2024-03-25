import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Auth/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AuthProvider>
      <App />
    </AuthProvider>
);


