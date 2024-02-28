import "./styles.css";
function App() {
const jakeAge = "24";
const paragraphStyleObj = {
  color: "green",
  fontSize: "36px",
  margin: "20px auto",
  width: "600px"
}
  return (
    <>
    <h1 className={jakeAge > 18 && "blue"}>css demo</h1>
    <p style={paragraphStyleObj}>This is some random text</p>
    </>
  )
}

export default App
