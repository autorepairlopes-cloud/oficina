import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Location from '../../components/Location';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
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
