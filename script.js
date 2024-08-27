// Override window.open to prevent new tabs/windows
window.open = function(url, target, features) {
    if (url && !url.startsWith('data:') && !url.startsWith('javascript:')) {
      console.log(`Blocked attempt to open new window with URL: ${url}`);
      return null; // Block new windows
    }
    return window.open(url, target, features); // Allow other windows
  };
  
  // Override alert, confirm, and prompt to block pop-ups
  window.alert = function() { console.log('Blocked alert'); };
  window.confirm = function() { console.log('Blocked confirm'); };
  window.prompt = function() { console.log('Blocked prompt'); };
  
  // Optionally, monitor iframe messages and block unwanted content
  window.addEventListener('message', function(event) {
    // Example filter: only allow messages from trusted origin
    if (event.origin !== 'https://vidsrc.xyz') {
      console.log(`Blocked message from origin: ${event.origin}`);
    }
  });
  
  // This script assumes the iframe content is from the same origin
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('video');
    
    // Ensure iframe is loaded
    iframe.addEventListener('load', () => {
      const iframeDocument = iframe.contentDocument;
      if (iframeDocument) {
        iframeDocument.addEventListener('click', (event) => {
          // Handle click events within the iframe
          console.log(`Clicked inside iframe: ${event.target}`);
          
          // Optionally, prevent certain actions
          if (event.target.matches('.some-class-that-causes-issue')) {
            event.stopImmediatePropagation();
            console.log('Blocked action on iframe button');
          }
        });
      }
    });
  });
  

// Monitor iframe network requests using interception (note: this requires appropriate permissions)
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('video');
    
    iframe.addEventListener('load', () => {
      const iframeWindow = iframe.contentWindow;
  
      if (iframeWindow) {
        iframeWindow.addEventListener('message', (event) => {
          // Check if the message is from the iframe and handle accordingly
          if (event.origin === 'https://vidsrc.xyz') {
            // Handle or block unwanted messages
            console.log(`Message from iframe: ${event.data}`);
          }
        });
      }
    });
  });
  