/**
 * Custom JavaScript for Java Learning Blog
 * Features:
 * 1. Code block hover bubble
 * 2. Secret messages toggle
 * 3. Random footer quotes
 * 4. Folded page corner effect
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Code Block Hover Effect
  const addCodeBubbles = () => {
    const codeBlocks = document.querySelectorAll('figure.highlight');
    
    const bubbleTexts = [
      '我当时卡在这里好几个小时...',
      '这段代码踩了无数坑才写出来',
      '多看几遍，这里很容易出错',
      '面试常问这个知识点！',
      '这个API的文档太坑了',
      '记得要理解原理，不要死记硬背'
    ];
    
    codeBlocks.forEach(block => {
      block.addEventListener('mouseenter', function() {
        if (this.querySelector('.code-bubble')) return;
        
        // Get random bubble text
        const randomIndex = Math.floor(Math.random() * bubbleTexts.length);
        
        // Create bubble
        const bubble = document.createElement('div');
        bubble.className = 'code-bubble';
        bubble.textContent = bubbleTexts[randomIndex];
        
        // Add to code block
        this.style.position = 'relative';
        this.appendChild(bubble);
        
        // Show with animation
        setTimeout(() => {
          bubble.style.opacity = '1';
          bubble.style.transform = 'translateY(0)';
        }, 10);
      });
      
      block.addEventListener('mouseleave', function() {
        const bubble = this.querySelector('.code-bubble');
        if (bubble) {
          bubble.style.opacity = '0';
          bubble.style.transform = 'translateY(10px)';
          setTimeout(() => {
            bubble.remove();
          }, 300);
        }
      });
    });
  };
  
  // Secret Message Buttons
  const setupSecretMessages = () => {
    const secretBtns = document.querySelectorAll('.secret-msg-btn');
    
    secretBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const secretContent = document.getElementById(targetId);
        
        if (secretContent.style.display === 'block') {
          secretContent.style.display = 'none';
          this.textContent = '给学弟的悄悄话 👀';
        } else {
          secretContent.style.display = 'block';
          this.textContent = '收起悄悄话 ↑';
        }
      });
    });
  };
  
  // Footer Quotes
  const setupFooterQuotes = () => {
    const quotes = [
      "凌晨4点的校园，只有我和看门大爷知道代码能跑多慢",
      "被面试官怼'二本基础差'后，我花三个月死磕了这些知识点",
      "记住：你不需要比985学生强，只要比同届二本生多走一步",
      "今天有位学妹说我的博客救了她秋招，这就是更新的意义 ❤️",
      "从CRUD工程师到架构师，最重要的是思维方式的转变",
      "不要怕踩坑，每一个坑都是一次成长的机会",
      "面试官都喜欢真诚的人，而不是背八股文的工具人",
      "当年的我也是从零开始，你现在的努力，未来都会有回报",
      "做技术博客不是为了装逼，是希望有人因此少走弯路",
      "每一个懂原理的人，都曾经是一个只会用API的小白"
    ];
    
    const footerQuote = document.getElementById('footer-quote');
    if (footerQuote) {
      // Get random quote
      const randomIndex = Math.floor(Math.random() * quotes.length);
      footerQuote.textContent = '"' + quotes[randomIndex] + '"';
    }
  };
  
  // Folded Corner Effect
  const addPageCorner = () => {
    const pageElement = document.querySelector('#page');
    if (pageElement && !document.querySelector('.page-corner')) {
      pageElement.style.position = 'relative';
      pageElement.style.overflow = 'hidden';
      
      const cornerEffect = document.createElement('div');
      cornerEffect.className = 'page-corner';
      cornerEffect.style.position = 'absolute';
      cornerEffect.style.top = '0';
      cornerEffect.style.right = '0';
      cornerEffect.style.width = '50px';
      cornerEffect.style.height = '50px';
      cornerEffect.style.background = 'linear-gradient(135deg, transparent 45%, #2C3E50 50%)';
      cornerEffect.style.pointerEvents = 'none';
      
      pageElement.appendChild(cornerEffect);
    }
  };
  
  // Initialize all features
  const initFeatures = () => {
    addCodeBubbles();
    setupSecretMessages();
    setupFooterQuotes();
    addPageCorner();
  };
  
  // Run initialization
  initFeatures();
  
  // Re-initialize when content changes (for single page applications)
  document.addEventListener('pjax:complete', initFeatures);
}); 