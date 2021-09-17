import './issues-string.sass'

const IssuesString: React.FC = () => {
  const limitString = (str: string, n: number, sym?: string) => {
    if (!n && !sym) return str
    const symb = sym || '...'
    return str.substr(0, n - symb.length) + symb
  }

  return (
    <div className="issues-string">
      <p className="issues-string__text">
        Spring 23 planning (issues {limitString('13, 533, 5623, 3252, 662, 313, 533, 5623, 3252, 6623', 20)})
      </p>
    </div>
  )
}

export default IssuesString
