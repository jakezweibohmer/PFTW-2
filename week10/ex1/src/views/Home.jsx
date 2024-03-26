import llamaPic from "../assets/Llamas.jpeg";
import alpacaPic from "../assets/Alpacas.jpeg";

export function Home() {
  return (
    <>
      <img src={llamaPic} alt="Llamas" />
      <img src={alpacaPic} alt="Alpacas" />

      <h1>Which are better, llamas or alpacas?</h1>
      <p>
        Is this the last word in the debate? Have you made a choice? Use the
        navigation to learn more about each one and then you can decide which
        win:
        <strong>Llamas</strong> or <strong>Alpacas</strong>
      </p>
    </>
  );
}
