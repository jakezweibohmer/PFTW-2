/* eslint-disable react/prop-types */
export function NavItem({ label, link, currentPage }) {
  const classes = `nav ${currentPage === label && "current"}`;
  return (
    <a className={classes} href={link}>
      {label}
    </a>
  );
}
