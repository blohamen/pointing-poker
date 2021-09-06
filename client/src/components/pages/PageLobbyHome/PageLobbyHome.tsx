import "./PageLobbyHome.sass";
import PageLogo from "../../common/PageLogo/PageLogo";
import Session from "./components/Session/Session";


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