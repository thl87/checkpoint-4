// import Animaux from "@components/Animaux";
import Animaux from "@components/Animaux";
import Zoo from "../components/Zoo";
import Gestion from "../components/Gestion";

export default function Home() {
  return (
    <div>
      <Animaux />
      <Zoo />
      <Gestion />
    </div>
  );
}
