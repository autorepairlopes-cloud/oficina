export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Lopes Auto Repair",
    "alternateName": "Lopes Oficina Mecânica",
    "description":
      "Oficina mecânica em Araquari SC. Serviços de mecânica automotiva, revisão, manutenção preventiva, troca de óleo, reparos de suspensão, freios e injeção eletrônica. A melhor auto mecânica de Araquari.",
    "url": "https://www.lopesautorepair.com",
    "telephone": "+55-47-99634-241",
    "image": "https://www.lopesautorepair.com/logoLopes.png",
    "logo": "https://www.lopesautorepair.com/logoLopes.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Grécia, 64 - Bairro Itinga",
      "addressLocality": "Araquari",
      "addressRegion": "SC",
      "addressCountry": "BR",
      "postalCode": "89245-000",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.3725,
      "longitude": -48.7214,
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Araquari",
        "sameAs": "https://pt.wikipedia.org/wiki/Araquari",
      },
      {
        "@type": "City",
        "name": "Joinville",
      },
      {
        "@type": "City",
        "name": "Barra Velha",
      },
      {
        "@type": "City",
        "name": "São Francisco do Sul",
      },
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "13:30",
        "closes": "18:00",
      },
    ],
    "sameAs": ["https://www.instagram.com/autorepairlopes/"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Mecânica Automotiva",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnóstico Automotivo",
            "description": "Diagnóstico preciso de problemas mecânicos e elétricos",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manutenção Preventiva",
            "description": "Revisão completa e manutenção preventiva do veículo",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Troca de Óleo",
            "description": "Troca de óleo e filtros com produtos de qualidade",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reparo de Suspensão",
            "description": "Reparo e manutenção do sistema de suspensão",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Revisão de Freios",
            "description": "Revisão completa do sistema de frenagem",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Injeção Eletrônica",
            "description": "Diagnóstico e reparo de sistema de injeção eletrônica",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
