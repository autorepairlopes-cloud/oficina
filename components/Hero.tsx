import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="heading-xl hero-title">
          Serviço Automotivo de Confiança
        </h1>
        <p className="hero-subtitle">
          Manutenção, revisão e reparos completos com a garantia de qualidade que você merece. Seu carro nas melhores mãos.
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn-secondary hero-btn-secondary">Fale Conosco</a>
          <a 
            href="https://www.instagram.com/autorepairlopes/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@autorepairlopes</span>
          </a>
        </div>
      </div>
    </section>
  );
}
