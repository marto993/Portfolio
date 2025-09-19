import { useState } from 'react';
import { Share2, Twitter, Linkedin, Facebook, Copy, Check } from 'lucide-react';
import { useAnalytics } from '../../hooks/useAnalytics';

/**
 * Componente para compartir artículos en redes sociales
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.article - Datos del artículo
 * @param {string} props.baseUrl - URL base del sitio (por defecto window.location.origin)
 * @returns {JSX.Element} Componente ShareButtons
 */
export default function ShareButtons({ article, baseUrl }) {
  const { trackArticleShare } = useAnalytics();
  const [copied, setCopied] = useState(false);

  if (!article) {
    return null;
  }

  const siteUrl = (baseUrl || (typeof window !== 'undefined' ? window.location.origin : '')) + "/Portfolio/";
  const articleUrl = `${siteUrl}?article=${article.slug}`;
  const shareText = `${article.title} - ${article.excerpt}`;

  const shareToTwitter = () => {
    trackArticleShare(article, 'twitter');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(articleUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = () => {
    trackArticleShare(article, 'linkedin');
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    trackArticleShare(article, 'facebook');
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    trackArticleShare(article, 'copy_link');
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = articleUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      action: shareToTwitter,
      color: 'hover:text-blue-400',
      label: 'Compartir en Twitter'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      action: shareToLinkedIn,
      color: 'hover:text-blue-600',
      label: 'Compartir en LinkedIn'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      action: shareToFacebook,
      color: 'hover:text-blue-500',
      label: 'Compartir en Facebook'
    }
  ];

  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Share2 size={20} className="text-primary-400" />
        <h3 className="text-lg font-semibold text-white">Compartir artículo</h3>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {shareButtons.map(button => (
          <button
            key={button.name}
            onClick={button.action}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 transition-all duration-200 ${button.color} hover:bg-gray-700 hover:border-gray-600`}
            aria-label={button.label}
          >
            <button.icon size={18} />
            <span className="text-sm font-medium">{button.name}</span>
          </button>
        ))}
      </div>

      {/* Copiar enlace */}
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={articleUrl}
            readOnly
            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:border-primary-500"
          />
        </div>
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            copied
              ? 'bg-accent-500 text-white'
              : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:border-gray-600'
          }`}
          aria-label="Copiar enlace"
        >
          {copied ? (
            <>
              <Check size={18} />
              <span className="text-sm font-medium">Copiado</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span className="text-sm font-medium">Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500">
          Comparte este artículo con tu red profesional
        </p>
      </div>
    </div>
  );
}
