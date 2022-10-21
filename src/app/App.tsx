import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { finalizaSessao, IUsuario, obtemUsuario } from './backend';
import TelaDespesas from './TelaDespesas';
import { TelaLogin } from './TelaLogin';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function App() {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);

  useEffect(() => {
    obtemUsuario().then(setUsuario, () => setUsuario(null));
  }, []);

  if (usuario) {
    return (
      <div>
        <Box
          padding="16px 32px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box marginRight="8px">Olá {usuario.nome}</Box>
          <Button onClick={sair}>Sair</Button>
        </Box>
        <BrowserRouter>
          <Switch>
            <Route path="/despesas/:anoMes">
              <TelaDespesas />
            </Route>
            <Redirect to="/despesas/2021-06" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
    return <TelaLogin onLogin={setUsuario} />;
  }

  function sair() {
    finalizaSessao().then(() => setUsuario(null));
  }
}

export default App;
