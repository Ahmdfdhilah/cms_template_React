import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
          <Routes>

          </Routes>
    </BrowserRouter>
  </AuthProvider>
);
