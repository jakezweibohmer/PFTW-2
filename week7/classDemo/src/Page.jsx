/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function Page(props) {
  return (
    <div>
      <div id="masthead">Jake&apos;s Website</div>
      {props.children}
      <footer>copyright Jake Zweibohmer ©2024</footer>
    </div>
  );
}
