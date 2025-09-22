import { useCallback } from 'react';

export const useAnalytics = () => {
  const trackEvent = useCallback((eventName, parameters = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
  }, []);

  const trackPageView = useCallback((pageTitle, pageLocation, customData = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-VZ3LLGQG5Q', {
        page_title: pageTitle,
        page_location: pageLocation,
        ...customData
      });
    }
  }, []);

  // Eventos específicos para el blog
  const trackArticleView = useCallback((article) => {
    trackEvent('article_view', {
      article_title: article.title,
      article_slug: article.slug,
      article_category: article.category,
      article_tags: article.tags?.join(', ') || '',
      // Evitar depender de readTime en los datos; se puede calcular en backend si es necesario
      article_featured: article.featured || false,
      event_category: 'blog',
      event_label: 'article_interaction'
    });
  }, [trackEvent]);

  const trackArticleClick = useCallback((article) => {
    trackEvent('article_click', {
      article_title: article.title,
      article_slug: article.slug,
      article_category: article.category,
      article_tags: article.tags?.join(', ') || '',
      event_category: 'blog',
      event_label: 'article_click'
    });
  }, [trackEvent]);

  const trackArticleShare = useCallback((article, platform) => {
    trackEvent('article_share', {
      article_title: article.title,
      article_slug: article.slug,
      share_platform: platform,
      article_category: article.category,
      event_category: 'blog',
      event_label: 'social_share'
    });
  }, [trackEvent]);

  const trackReadingProgress = useCallback((article, progress) => {
    trackEvent('reading_progress', {
      article_title: article.title,
      article_slug: article.slug,
      reading_progress: Math.round(progress),
      article_category: article.category,
      event_category: 'blog',
      event_label: 'engagement'
    });
  }, [trackEvent]);

  const trackArticleComplete = useCallback((article, timeSpent) => {
    trackEvent('article_complete', {
      article_title: article.title,
      article_slug: article.slug,
      article_category: article.category,
      time_spent_seconds: timeSpent,
      event_category: 'blog',
      event_label: 'completion'
    });
  }, [trackEvent]);

  // Eventos para el portfolio
  const trackProjectView = useCallback((projectName) => {
    trackEvent('project_view', {
      project_name: projectName,
      event_category: 'portfolio',
      event_label: 'project_interaction'
    });
  }, [trackEvent]);

  const trackContactFormSubmit = useCallback(() => {
    trackEvent('contact_form_submit', {
      event_category: 'contact',
      event_label: 'form_submission'
    });
  }, [trackEvent]);

  const trackCVDownload = useCallback(() => {
    trackEvent('cv_download', {
      event_category: 'portfolio',
      event_label: 'cv_download'
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    // Eventos específicos del blog
    trackArticleView,
    trackArticleClick,
    trackArticleShare,
    trackReadingProgress,
    trackArticleComplete,
    // Eventos del portfolio
    trackProjectView,
    trackContactFormSubmit,
    trackCVDownload
  };
};
