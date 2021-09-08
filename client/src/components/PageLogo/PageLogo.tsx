import page_logo from "../../assets/img/page-logo.png";
import "./PageLogo.sass";

interface IPageLogo {
    title: string
}

export default function PageLogo(props: IPageLogo): JSX.Element {
    const { title } = props;

    return(
        <div className="page-logo">
        <div className="page-logo__img">
          <img src={page_logo} alt="Game Logo" width="104px" height="104px" />
        </div>
        <div className="page-logo__title">{title}</div>
      </div>
    )
}