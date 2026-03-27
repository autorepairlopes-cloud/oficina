'use client';

import './Services.css';
import { useLanguage } from '../lib/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="services-content">
          <h2 className="heading-lg services-title">{t('services.title')}</h2>
          <p className="services-desc">
            {t('services.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
