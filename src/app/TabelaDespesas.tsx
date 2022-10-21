import { IDespesa } from './backend';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { formataValor } from './util';

interface ITabelaDespesasProps {
  despesas: IDespesa[];
}

export default function TabelaDespessas(props: ITabelaDespesasProps) {
  return (
    <TableContainer component="div">
      <Table aria-label="Tabela de Despesas">
        <TableHead>
          <TableRow>
            <TableCell>Despesa</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Dia</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.despesas.map(despesa => (
            <TableRow key={despesa.id}>
              <TableCell>{despesa.descricao}</TableCell>
              <TableCell>{despesa.categoria}</TableCell>
              <TableCell>{despesa.dia}</TableCell>
              <TableCell align="right">{formataValor(despesa.valor)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
