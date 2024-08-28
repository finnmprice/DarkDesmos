function injectGitHubIcon() {
    const headerRightContent = document.querySelector('.dcg-header-right-content') || document.querySelector('.align-right-container');
    
    if (headerRightContent) {
      const githubIconUrl = chrome.runtime.getURL('css/github.svg');
      
      const isMainDomain = !window.location.href.includes('calculator');
      // console.log(window.location.href)
      // console.log(isMainDomain)
      const iconSize = isMainDomain ? '18px' : '19px';
      const topMargin = isMainDomain ? '-2px' : '-3px';
  
      const style = document.createElement('style');
      style.textContent = `
        .github-icon-link {
          display: inline-flex;
          align-items: center;
          margin: 0px 10px;
          height: 46px;
        }
        .github-icon-link:hover {
          filter: brightness(1.5);
        }
        .github-icon {
          width: ${iconSize};
          height: ${iconSize};
          fill: currentColor;
          margin-top: ${topMargin};
        }
      `;
      document.head.appendChild(style);
      
      const githubLink = document.createElement('a');
      githubLink.href = 'https://github.com/finnmprice/darkdesmos';
      githubLink.target = '_blank';
      githubLink.className = 'github-icon-link';
      
      const githubIcon = document.createElement('img');
      githubIcon.src = githubIconUrl;
      githubIcon.className = 'github-icon';
      
      githubLink.appendChild(githubIcon);
      headerRightContent.appendChild(githubLink);
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectGitHubIcon);
  } else {
    injectGitHubIcon();
  }