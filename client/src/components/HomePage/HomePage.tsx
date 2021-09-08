import "./HomePage.sass";
import PageLogo from "../PageLogo/PageLogo";
import Session from "../Session/Session";


export default function PageProducts(): JSX.Element {
  return (
    <>
      <PageLogo
        title = "Poker Planning"
      />
      <Session/>
    </>
  );
}