import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link href="/">
            <Image src="/logoLopes.png" alt="Lopes Auto Repair" width={200} height={50} style={{ width: '200px', height: 'auto' }} />
          </Link>
        </div>
        
        <div className="header-right">
          <nav className="nav-menu">
            <ul>
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
