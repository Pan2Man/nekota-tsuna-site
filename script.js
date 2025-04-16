document.addEventListener('DOMContentLoaded', () => {
  // ========== ローディング解除 & フェードイン登録 ==========
  window.addEventListener('load', () => {
    const loading = document.getElementById('loading');

    setTimeout(() => {
      loading.classList.add('loaded');
      document.body.classList.remove('no-scroll');

      // ✅ IntersectionObserver 登録
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      // フェードイン関連要素すべて登録
      document.querySelectorAll('.fade-in, .fade-slide-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));
    }, 3200);
  });

  // ========== 星のアニメーション生成 ==========
  const stars = document.querySelector('.stars');
  if (stars) {
    for (let i = 0; i < 30; i++) {
      const star = document.createElement('div');
      star.classList.add('loading-star');
      star.style.position = 'absolute';
      star.style.width = '5px';
      star.style.height = '5px';
      star.style.borderRadius = '50%';
      star.style.background = '#fff';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `blink 1.5s infinite ease-in-out alternate`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      stars.appendChild(star);
    }
  }

  // ========== スライドショー ==========
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    setInterval(() => {
      slides[slideIndex].classList.remove('active');
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add('active');
    }, 7000);
  }

  // ========== 背景図形生成 ==========
  const shapeContainer = document.querySelector('.floating-shapes');
  const shapeTypes = ['circle', 'triangle'];
  const shapeColors = ['#fddde6', '#cdf0ea', '#f6dfeb', '#d6eaff', '#e9e9ff', '#ffccf2', '#ffe4e1'];

  if (shapeContainer) {
    for (let i = 0; i < 80; i++) {
      const shape = document.createElement('div');
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      shape.classList.add('shape', type);

      const size = Math.floor(Math.random() * 30) + 20;
      if (type === 'triangle') {
        shape.style.borderLeft = `${size / 2}px solid transparent`;
        shape.style.borderRight = `${size / 2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid ${shapeColors[Math.floor(Math.random() * shapeColors.length)]}`;
      } else {
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.backgroundColor = shapeColors[Math.floor(Math.random() * shapeColors.length)];
      }

      shape.style.top = `${Math.random() * 100}%`;
      shape.style.left = `${Math.random() * 100}%`;

      const duration = Math.random() * 20 + 10;
      shape.style.animationName = "float";
      shape.style.animationDuration = `${duration}s`;
      shape.style.animationTimingFunction = "linear";
      shape.style.animationIterationCount = "infinite";

      shapeContainer.appendChild(shape);
    }
  }

  // ========== マウス追従 ==========
  document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (e.clientX - centerX) / centerX;
    const moveY = (e.clientY - centerY) / centerY;

    document.querySelectorAll('.shape').forEach((shape, i) => {
      const intensity = 8 + (i % 5) * 2;
      const offsetX = moveX * intensity;
      const offsetY = moveY * intensity;
      shape.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${(i + 1) * 10}deg)`;
    });
  });

  // ========== タイピング風テキスト ==========
  const typingEl = document.querySelector(".typing-text");
  if (typingEl) {
    const text = typingEl.textContent;
    typingEl.textContent = "";
    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${i * 0.06}s`;
      typingEl.appendChild(span);
    });
  }

  // ========== メニュー開閉 ==========
  const menuBtn = document.querySelector('.floating-menu-button');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      alert("ここにメニュー表示処理を追加できます！");
    });
  }
});
