'use client';

import './Location.css';
import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="localizacao" className="section location">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <h2 className="heading-lg">{t('location.title')}</h2>
            <p className="location-desc">
              {t('location.desc')}
            </p>
            
            <div className="info-block">
              <h3><MapPin size={24} /> {t('location.address')}</h3>
              <p>Rua Grécia, 64 - Bairro Itinga<br/>Araquari - SC</p>
            </div>
            
            <div className="info-block">
              <h3><Clock size={24} /> {t('location.hours')}</h3>
              <ul>
                <li><strong>{t('location.weekdays')}</strong> {t('location.weekdaysTime')}</li>
                <li><strong>{t('location.weekend')}</strong> {t('location.closed')}</li>
              </ul>
            </div>
          </div>
          
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps?q=Rua+Grécia+64+Bairro+itinga+Araquari&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
