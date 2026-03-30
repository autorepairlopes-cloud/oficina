import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Location from '../../components/Location';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
