import { useState } from 'react';
import TabelaDespessas from './TabelaDespesas';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { formataValor } from './util';
import { useHistory, useParams } from 'react-router-dom';
import SelecaoAnoMes from './SelecaoAnoMes';
import TabelaResumo from './TabelaResumo';
import useDespesas from './useDespesas';

export default function TelaDespesa() {
  const { anoMes } = useParams<{ anoMes: string }>();
  const history = useHistory();
  const [aba, setAba] = useState(0);

  const { despesas, despesaTotal, despesasPorCategoria } = useDespesas(anoMes);

  return (
    <Container>
      <Box display="flex" padding="16px">
        <Box flex="1">
          <SelecaoAnoMes anoMes={anoMes} onchangeAnoMes={onChangeAnoMes} />
        </Box>
        <Box>
          <span>
            Despesa Total: <strong>R$ {formataValor(despesaTotal)}</strong>
          </span>
        </Box>
      </Box>
      <Tabs centered value={aba} onChange={(e, novaAba) => setAba(novaAba)}>
        <Tab label="Resumo" />
        <Tab label="Detalhes" />
      </Tabs>
      {aba === 0 && <TabelaResumo despesasCategoria={despesasPorCategoria} />}
      {aba === 1 && <TabelaDespessas despesas={despesas} />}
    </Container>
  );

  function onChangeAnoMes(novoAnoMes: string) {
    history.push(`/despesas/${novoAnoMes}`);
  }
}
