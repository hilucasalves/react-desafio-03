import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { criaSessao, IUsuario } from './backend';

interface ITelaLoginProps {
  onLogin: (usuario: IUsuario) => void;
}

export function TelaLogin(props: ITelaLoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <h1>Despesas</h1>
        <p>Digite e-mail e senha para entrar.</p>
        <TextField
          type="email"
          required
          fullWidth
          margin="normal"
          variant="outlined"
          label="E-mail"
          value={email}
          error={!!erro}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          required
          fullWidth
          margin="normal"
          variant="outlined"
          label="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          error={!!erro}
          helperText={erro}
        />
        <Box textAlign="right" marginTop="16px">
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </Box>
      </form>
    </Container>
  );

  function onSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    setErro('');
    criaSessao(email, senha).then(props.onLogin, () => {
      setErro('E-mail inexistente ou senha incorreta.');
    });
  }
}
