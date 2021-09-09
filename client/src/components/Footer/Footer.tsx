import './Footer.sass'

export default function Footer(): JSX.Element {
  return ( 
    <footer>
      <div className="footer-container">
        <div className="footer-container__authors">
          <h2>Authors:</h2>
          <ul className="footer-container__authors__list">
            <li><a href="https://github.com/uaolmer">React Developer</a></li>
            <li><a href="https://github.com/uaolmer">React Developer</a></li>
            <li><a href="https://github.com/uaolmer">React Developer</a></li>
          </ul>
        </div>
        <div className="footer-container__copyright">
          2021(c) RSSchool
        </div>
      </div>
    </footer>
  )
}
