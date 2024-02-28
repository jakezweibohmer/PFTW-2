import { NavItem } from "./NavItem";

function Nav({ navArray, currentPage }) {
  console.log("nav array", navArray);
  return (
    <>
      <NavItem
        label={navArray[0].label}
        link={navArray[0].link}
        currentPage={currentPage}
      />
      <NavItem
        label={navArray[1].label}
        link={navArray[1].link}
        currentPage={currentPage}
      />
      <NavItem
        label={navArray[2].label}
        link={navArray[2].link}
        currentPage={currentPage}
      />
    </>
  );
}

export default Nav;
