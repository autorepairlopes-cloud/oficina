import './Location.css';
import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="section location">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <h2 className="heading-lg">Nossa Localização</h2>
            <p className="location-desc">
              Venha nos fazer uma visita. Estamos localizados em um ponto de fácil acesso para melhor lhe atender.
            </p>
            
            <div className="info-block">
              <h3><MapPin size={24} /> Endereço</h3>
              <p>Rua Grécia, 64 - Bairro Itinga<br/>Araquari - SC</p>
            </div>
            
            <div className="info-block">
              <h3><Clock size={24} /> Horário de Funcionamento</h3>
              <ul>
                <li><strong>Segunda a Sexta:</strong> 08:00 às 18:00</li>
                <li><strong>Sábado:</strong> 08:00 às 12:00</li>
                <li><strong>Domingo:</strong> Fechado</li>
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
