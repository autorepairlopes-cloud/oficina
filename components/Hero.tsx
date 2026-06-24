'use client';

import './Hero.css';
import { useLanguage } from '../lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="heading-xl hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn-secondary hero-btn-secondary">{t('hero.contact')}</a>
          <a 
            href="https://www.instagram.com/lopesautorepair/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@lopesautorapair</span>
          </a>
        </div>
      </div>
    </section>
  );
}
