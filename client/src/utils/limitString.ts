const limitString = (str: string, n: number, sym?: string) => {
  if (!n && !sym) return str
  const symb = sym || '...'
  return str.substr(0, n - symb.length) + symb
}

export default limitString
