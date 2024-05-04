import * as React from 'react';
import Botao from './components/Input/botao';
import Senha from './components/Input/senha';
import Login from './components/Input/login';

export default function App() {
  return (
    <>
        <img id='img' src="components/img/Logo_Visiona_branco.png" alt="" />
          <Login />
          <Senha />
          <Botao />
    </>
  );
}