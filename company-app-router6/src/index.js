import React from 'react';
import ReactDOM from 'react-dom/client';
import BasePage from './pages/BasePage';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter >
<BasePage></BasePage>
</BrowserRouter>
);

