// Archive.org Video Optimization Configuration
// This file contains specific optimizations for archive.org video playback

const ArchiveOptimizer = {
  // Archive.org server mirrors for failover
  servers: [
    'ia601608.us.archive.org',
    'ia801608.us.archive.org', 
    'ia601508.us.archive.org',
    'ia801508.us.archive.org'
  ],

  // Optimized video formats preference for archive.org
  formatPreference: [
    'mp4', // Most compatible
    'webm', // Better compression
    'ogv'  // Fallback
  ],

  // Quality settings for different connection speeds
  qualitySettings: {
    fast: {
      preload: 'metadata',
      bufferSize: 5, // seconds
      maxBitrate: '1000k'
    },
    medium: {
      preload: 'auto',
      bufferSize: 10,
      maxBitrate: '2000k'
    },
    slow: {
      preload: 'none',
      bufferSize: 15,
      maxBitrate: '500k'
    }
  },

  // Archive.org specific optimizations
  archiveOptimizations: {
    // Use archive.org's CDN more efficiently
    useCDN: true,
    
    // Enable range requests for better seeking
    enableRangeRequests: true,
    
    // Optimize for archive.org's serving patterns
    chunkSize: 1024 * 1024, // 1MB chunks
    
    // Archive.org rate limiting considerations
    requestDelay: 100, // ms between requests
    
    // Connection timeout for archive.org
    timeout: 30000 // 30 seconds
  },

  // Method to detect connection speed and adjust quality
  detectConnectionSpeed() {
    // Simple connection speed detection
    if ('connection' in navigator) {
      const connection = navigator.connection;
      const effectiveType = connection.effectiveType;
      
      switch(effectiveType) {
        case 'slow-2g':
        case '2g':
          return 'slow';
        case '3g':
          return 'medium';
        case '4g':
        default:
          return 'fast';
      }
    }
    return 'medium'; // Default fallback
  },

  // Generate optimized archive.org URL
  generateOptimizedUrl(originalUrl, quality = 'medium') {
    const settings = this.qualitySettings[quality];
    
    // Add quality parameters if archive.org supports them
    const url = new URL(originalUrl);
    
    // Archive.org specific optimizations
    if (this.archiveOptimizations.useCDN) {
      // Try to use a more responsive server
      const serverIndex = Math.floor(Math.random() * this.servers.length);
      const server = this.servers[serverIndex];
      
      // Replace the hostname with a potentially faster server
      if (url.hostname === 'archive.org') {
        url.hostname = server;
        // Adjust path for direct server access
        url.pathname = url.pathname.replace('/download/', '/');
      }
    }
    
    return url.toString();
  },

  // Progressive loading strategy for archive.org
  implementProgressiveLoading(videoElement, videoUrl) {
    const quality = this.detectConnectionSpeed();
    const optimizedUrl = this.generateOptimizedUrl(videoUrl, quality);
    
    console.log(`Archive.org optimization: Using ${quality} quality settings`);
    console.log(`Optimized URL: ${optimizedUrl}`);
    
    // Apply quality-specific settings
    const settings = this.qualitySettings[quality];
    videoElement.preload = settings.preload;
    
    // Set up progressive loading
    let loadProgress = 0;
    
    videoElement.addEventListener('progress', () => {
      if (videoElement.buffered.length > 0) {
        const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
        const duration = videoElement.duration || 1;
        loadProgress = (bufferedEnd / duration) * 100;
        
        console.log(`Archive.org video buffer: ${loadProgress.toFixed(1)}%`);
        
        // If we have enough buffer, we can start playing smoothly
        if (loadProgress > settings.bufferSize && videoElement.paused) {
          console.log('Archive.org: Sufficient buffer for smooth playback');
        }
      }
    });
    
    return optimizedUrl;
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ArchiveOptimizer;
} else if (typeof window !== 'undefined') {
  window.ArchiveOptimizer = ArchiveOptimizer;
}
