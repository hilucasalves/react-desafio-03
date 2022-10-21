import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface ISelecaoAnoMesProps {
  anoMes: string;
  onchangeAnoMes: (anoMes: string) => void;
}

export default function SelecaoAnoMes(props: ISelecaoAnoMesProps) {
  const [ano, mes] = props.anoMes.split('-');

  return (
    <div>
      <FormControl>
        <InputLabel>Ano</InputLabel>
        <Select
          value={ano}
          onChange={evt => props.onchangeAnoMes(evt.target.value + '-' + mes)}
        >
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Mês</InputLabel>
        <Select
          value={mes}
          onChange={evt => props.onchangeAnoMes(ano + '-' + evt.target.value)}
        >
          <MenuItem value="01">01</MenuItem>
          <MenuItem value="02">02</MenuItem>
          <MenuItem value="03">03</MenuItem>
          <MenuItem value="04">04</MenuItem>
          <MenuItem value="05">05</MenuItem>
          <MenuItem value="06">06</MenuItem>
          <MenuItem value="07">07</MenuItem>
          <MenuItem value="08">08</MenuItem>
          <MenuItem value="09">09</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="11">11</MenuItem>
          <MenuItem value="12">12</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
