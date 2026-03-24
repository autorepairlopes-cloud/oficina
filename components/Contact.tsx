import './Contact.css';
import { Phone, Smartphone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact-container">
        <div className="contact-box">
          <h2 className="heading-lg contact-title">Precisa de Reparos? Fale Conosco</h2>
          <p className="contact-desc">
            Nossa equipe de especialistas está pronta para cuidar do seu veículo com a maior agilidade e transparência.
          </p>
          
          <div className="contact-methods">
            <div className="contact-item">
              <span className="contact-icon"><Phone size={24} /></span>
              <div>
                <h3>Ligue para nós</h3>
                <p>+55 (47) 9963-4241</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon"><Smartphone size={24} /></span>
              <div>
                <h3>WhatsApp</h3>
                <p>+55 (47) 9963-4241</p>
              </div>
            </div>
          </div>
          
          <a 
            href="https://wa.me/554799634241" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
