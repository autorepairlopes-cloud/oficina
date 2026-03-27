'use client';

import './Footer.css';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Image src="/logoLopes.png" alt="Lopes Auto Repair" width={0} height={0} sizes="200px" style={{ width: '200px', height: 'auto' }} />
          <br />
          <p className="footer-desc">
            {t('footer.desc')}
          </p>
        </div>
        
        <div className="footer-links">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><Link href="#sobre">{t('footer.about')}</Link></li>
            <li><Link href="#localizacao">{t('footer.directions')}</Link></li>
            <li><Link href="#contato">{t('footer.contact')}</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lopes Auto Repair. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
