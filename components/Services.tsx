import './Services.css';

export default function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="services-content">
          <h2 className="heading-lg services-title">Especialistas no Cuidado do Seu Veículo</h2>
          <p className="services-desc">
            Na Lopes Auto Repair, oferecemos serviços automotivos completos para garantir o melhor desempenho e segurança do seu carro. 
            Realizamos diagnósticos precisos, manutenções preventivas, troca de óleo, reparos de suspensão, revisão nos freios, sistema 
            de injeção eletrônica e muito mais. Nossa equipe utiliza equipamentos modernos para identificar e resolver rapidamente 
            qualquer problema, seja mecânico ou elétrico.
          </p>
          <a href="#contato" className="btn-primary btn-services">Entre em Contato para um Orçamento</a>
        </div>
      </div>
    </section>
  );
}
