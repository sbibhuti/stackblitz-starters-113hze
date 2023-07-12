import React from 'react';
import './style.css';
import { Layout } from 'antd';
import Routes_URL from './components/Routes_URL';
import {
  BrowserRouter
} from "react-router-dom";

export default function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <BrowserRouter>
        <Routes_URL/>
    </BrowserRouter>
  );
}
