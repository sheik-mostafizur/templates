import Container from "../../components/Container";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Container>
          <h1 className="font-bold text-5xl text-center mt-24">Home</h1>
        </Container>
      </header>
    </div>
  );
};

export default Home;
