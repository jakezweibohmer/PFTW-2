import "./App.css"; //css incude extension
import Nav from "./Nav"; //jsx does not need extension
import { Page } from "./Page";

function App() {
  const navigationArray = [
    { label: "About", link: "https://google.com" },
    { label: "Portfolio", link: "https://disney.com" },
    { label: "Contact", link: "https://mpr.org" },
  ];
  const currentPage = "About";

  return (
    <>
      <Page>
        <>
          <Nav navArray={navigationArray} currentPage={currentPage} />
          <div>Hi</div>
        </>
      </Page>
    </>
  );
}

export default App;
