/**
 * Asset Optimizer Utility
 * 
 * Provides functions to:
 * - Track image/video loading progress
 * - Compress and optimize asset delivery
 * - Implement smart preloading strategy
 */

/**
 * Wait for critical images to load
 * @param {string[]} imagePaths - Array of image src paths
 * @param {number} timeout - Maximum wait time in ms (default 15000)
 * @returns {Promise} Resolves when images load or timeout
 */
export const waitForCriticalImages = (imagePaths = [], timeout = 15000) => {
  if (!imagePaths || imagePaths.length === 0) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let loadedCount = 0;
    const totalCount = imagePaths.length;

    const checkComplete = () => {
      if (loadedCount === totalCount) {
        resolve();
      }
    };

    setTimeout(() => {
      // Force resolve after timeout (don't block forever)
      resolve();
    }, timeout);

    imagePaths.forEach((src) => {
      if (!src) {
        loadedCount++;
        checkComplete();
        return;
      }

      const img = new Image();
      img.onload = () => {
        loadedCount++;
        checkComplete();
      };
      img.onerror = () => {
        // Don't block on error, just increment
        loadedCount++;
        checkComplete();
      };
      img.src = src;
    });
  });
};

/**
 * Wait for video to load (metadata + first frame)
 * @param {string} videoSrc - Video source path
 * @param {number} timeout - Maximum wait time in ms
 * @returns {Promise} Resolves when video metadata loads
 */
export const waitForVideo = (videoSrc, timeout = 10000) => {
  return new Promise((resolve) => {
    if (!videoSrc) {
      resolve();
      return;
    }

    const video = document.createElement('video');
    video.preload = 'metadata';

    const timeoutHandle = setTimeout(() => {
      resolve();
      video.remove();
    }, timeout);

    video.onloadedmetadata = () => {
      clearTimeout(timeoutHandle);
      resolve();
      video.remove();
    };

    video.onerror = () => {
      clearTimeout(timeoutHandle);
      resolve();
      video.remove();
    };

    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);

    // Don't add to DOM, just load metadata
    video.style.display = 'none';
  });
};

/**
 * Preload critical images in the background
 * @param {string[]} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths = []) => {
  imagePaths.forEach((src) => {
    if (src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    }
  });
};

/**
 * Preload video with minimal bandwidth usage (just metadata)
 * @param {string} videoSrc - Video source path
 */
export const preloadVideo = (videoSrc) => {
  if (videoSrc) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = videoSrc;
    // Only load first few seconds
    link.setAttribute('imagesrcset', videoSrc);
    document.head.appendChild(link);
  }
};

/**
 * Get optimized image URL with CDN parameters
 * Useful if using a CDN like Cloudinary or Imgix
 * @param {string} imageUrl - Original image URL
 * @param {number} width - Target width (optional)
 * @param {number} quality - Quality 1-100 (default 80)
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (imageUrl, width = null, quality = 80) => {
  // If it's a local image, return as-is (you can add your own CDN logic here)
  if (imageUrl.startsWith('/')) {
    return imageUrl;
  }

  // For external images, you could add CDN parameters
  // Example: https://imageurl.jpg?w=800&q=80
  const separator = imageUrl.includes('?') ? '&' : '?';
  const params = [];

  if (width) {
    params.push(`w=${width}`);
  }
  params.push(`q=${quality}`);

  return `${imageUrl}${separator}${params.join('&')}`;
};

/**
 * Create responsive image srcset for different screen sizes
 * @param {string} basePath - Base image path without extension
 * @param {string} ext - File extension (jpg, png, etc.)
 * @returns {string} srcset string
 */
export const createResponsiveSrcset = (basePath, ext = 'jpg') => {
  // Example: /images/home -> /images/home-320.jpg 320w, /images/home-640.jpg 640w, etc.
  const sizes = [320, 640, 960, 1280, 1920];
  return sizes
    .map((size) => `${basePath}-${size}.${ext} ${size}w`)
    .join(', ');
};

/**
 * Check network speed and return appropriate image quality
 * @returns {string} 'fast' | 'slow' | 'medium'
 */
export const checkNetworkSpeed = () => {
  if (!navigator.connection) {
    return 'medium'; // Assume medium if no API support
  }

  const effectiveType = navigator.connection.effectiveType;
  // '4g', '3g', '2g', 'slow-2g'

  if (effectiveType === '4g') return 'fast';
  if (effectiveType === '2g' || effectiveType === 'slow-2g') return 'slow';
  return 'medium';
};

/**
 * Defer non-critical image loading until page is idle
 * @param {string} selector - CSS selector for images to defer
 */
export const deferNonCriticalImages = (selector = 'img[data-lazy]') => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const images = document.querySelectorAll(selector);
      images.forEach((img) => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-lazy');
        }
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      const images = document.querySelectorAll(selector);
      images.forEach((img) => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-lazy');
        }
      });
    }, 2000);
  }
};
