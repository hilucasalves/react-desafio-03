export function formataValor(valor: number): string {
  return valor.toFixed(2).replace('.', ',');
}
