export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Tracks a pageview in Google Ads / GA4.
 */
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GOOGLE_ADS_ID) {
    window.gtag('config', GOOGLE_ADS_ID, {
      page_path: url,
    });
  }
};

/**
 * Tracks a custom event in Google Analytics / Ads.
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Tracks a Google Ads conversion.
 * @param conversionLabel Rótulo da conversão (ex: "abc123XYZ")
 * @param value Valor opcional da conversão
 */
export const trackConversion = (conversionLabel?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && GOOGLE_ADS_ID) {
    const sendTo = conversionLabel ? `${GOOGLE_ADS_ID}/${conversionLabel}` : GOOGLE_ADS_ID;
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      value: value,
      currency: 'BRL',
    });
  }
};

/**
 * Helper para disparar conversão ao clicar no botão do WhatsApp
 */
export const trackWhatsAppClick = () => {
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL;
  trackConversion(label);
  event({
    action: 'click_whatsapp',
    category: 'Contato',
    label: 'Botão WhatsApp',
  });
};
