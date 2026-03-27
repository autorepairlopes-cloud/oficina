'use client';

import Link from 'next/link';
import Image from 'next/image';
import './Header.css';
import { useLanguage } from '../lib/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link href="/">
            <Image src="/logoLopes.png" alt="Lopes Auto Repair" width={0} height={0} sizes="200px" style={{ width: '200px', height: 'auto' }} />
          </Link>
        </div>
        
        <div className="header-right">
          <nav className="nav-menu">
            <ul>
              <li><Link href="#sobre">{t('header.about')}</Link></li>
              <li><Link href="#localizacao">{t('header.location')}</Link></li>
              <li><Link href="#contato">{t('header.contact')}</Link></li>
            </ul>
          </nav>

          <div className="header-cta">
            <a href="#contato" className="btn-primary">{t('header.cta')}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
