import './Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo"><span className="logo-highlight">Lopes</span> Auto Repair</h2>
          <p className="footer-desc">
            Excelência em serviços mecânicos. Seu carro novo de novo.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><Link href="#servicos">Nossos Serviços</Link></li>
            <li><Link href="#sobre">Sobre Nós</Link></li>
            <li><Link href="#localizacao">Como Chegar</Link></li>
            <li><Link href="#contato">Fale Conosco</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lopes Auto Repair. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
