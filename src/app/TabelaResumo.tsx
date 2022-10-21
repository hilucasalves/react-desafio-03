import { IDespesaCategoria } from './useDespesas';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { formataValor } from './util';

interface ITabelaResumoProps {
  despesasCategoria: IDespesaCategoria[];
}

export default function TabelaResumo(props: ITabelaResumoProps) {
  return (
    <TableContainer component="div">
      <Table aria-label="Tabela de Despesas">
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.despesasCategoria.map(despesaCategoria => (
            <TableRow key={despesaCategoria.categoria}>
              <TableCell>{despesaCategoria.categoria}</TableCell>
              <TableCell align="right">
                {formataValor(despesaCategoria.despesaTotal)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
