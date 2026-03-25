import './Footer.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Image src="/logoLopes.png" alt="Lopes Auto Repair" width={200} height={50} style={{ width: '200px', height: 'auto' }} />
          <br />
          <p className="footer-desc">
            Excelência em serviços mecânicos. Seu carro novo de novo.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
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
