import './Footer.sass'
// footer со ссылками на гитхабы авторов приложения, год создания приложения, логотип курса со ссылкой на курс. footer отображается на всех страницах приложения.

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <ul className="footer__author-list">
        <span className="footer__author-title">Authors:</span>
        <li className="footer__author">
          <a href="https://github.com/vadimshut">vadimshut</a>
        </li>
        <li className="footer__author">
          <a href="https://github.com/iusmanof">iusmanof</a>
        </li>
        <li className="footer__author">
          <a href="https://github.com/uaolmer">uaolmer</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <span>2021&copy;</span>
        <a href="https://rs.school/" className="footer__logo logo">
          RSSchool
        </a>
      </div>
    </footer>
  )
}
