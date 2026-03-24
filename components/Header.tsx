import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link href="/">
            <span className="logo-text">Lopes</span> Auto Repair
          </Link>
        </div>
        
        <div className="header-right">
          <nav className="nav-menu">
            <ul>
              <li><Link href="#servicos">Serviços</Link></li>
              <li><Link href="#sobre">Sobre</Link></li>
              <li><Link href="#localizacao">Localização</Link></li>
              <li><Link href="#contato">Contato</Link></li>
            </ul>
          </nav>

          <div className="header-cta">
            <a href="#contato" className="btn-primary">Agendar Revisão</a>
          </div>
        </div>
      </div>
    </header>
  );
}
