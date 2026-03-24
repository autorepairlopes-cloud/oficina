import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="heading-xl hero-title">
          Serviço Automotivo de Confiança para o Seu Veículo
        </h1>
        <p className="hero-subtitle">
          Manutenção, revisão e reparos completos com a garantia de qualidade que você merece. Seu carro nas melhores mãos.
        </p>
        <div className="hero-actions">
          <a href="#servicos" className="btn-primary">Ver Serviços</a>
          <a href="#contato" className="btn-secondary hero-btn-secondary">Fale Conosco</a>
        </div>
      </div>
    </section>
  );
}
