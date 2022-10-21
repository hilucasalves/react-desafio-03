import { useEffect, useMemo, useState } from 'react';
import { carregaDespesas, IDespesa } from './backend';

export interface IDespesaCategoria {
  categoria: string;
  despesaTotal: number;
}

export default function useDespesas(anoMes: string) {
  const [despesas, setDespesas] = useState<IDespesa[]>([]);
  useEffect(() => {
    carregaDespesas(anoMes).then(setDespesas);
  }, [anoMes]);

  return useMemo(() => {
    return {
      despesas,
      despesaTotal: calculaTotal(despesas),
      despesasPorCategoria: calculaTotalPorCategoria(despesas),
    };
  }, [despesas]);
}

function calculaTotal(despesas: IDespesa[]): number {
  let total = 0;
  for (const despesa of despesas) {
    total += despesa.valor;
  }
  return total;
}

function calculaTotalPorCategoria(despesas: IDespesa[]): IDespesaCategoria[] {
  const resultado: IDespesaCategoria[] = [];

  for (const despesa of despesas) {
    const item = resultado.find(item => item.categoria === despesa.categoria);

    if (item) {
      item.despesaTotal += despesa.valor;
    } else {
      resultado.push({
        categoria: despesa.categoria,
        despesaTotal: despesa.valor,
      });
    }
  }
  resultado.sort((v1, v2) => v2.despesaTotal - v1.despesaTotal);
  return resultado;
}
