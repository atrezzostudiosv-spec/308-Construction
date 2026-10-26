// Initialize Lucide icons
        if (window.lucide?.createIcons) window.lucide.createIcons();

        // Multi-page Router Function
        function navigateTo(pageId, updateHistory = true) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(p => p.classList.add('hidden-page'));

            // Show selected page
            const target = document.getElementById(`page-${pageId}`);
            if (target) {
                target.classList.remove('hidden-page');
                // Do not keep the decorative hero video playing behind other views.
                const heroVideo = document.querySelector('.home-v2 .hero-bg-video');
                if (heroVideo && heroVideo.querySelector('source')?.src) {
                  if (pageId === 'home' && !document.hidden) {
                    const playback = heroVideo.play();
                    if (playback && typeof playback.catch === 'function') playback.catch(() => {});
                  } else heroVideo.pause();
                }
                if (updateHistory) history.pushState({pageId}, '', pageId === 'home' ? location.pathname : location.pathname + '?view=' + encodeURIComponent(pageId));
                window.scrollTo({ top: 0, behavior: 'auto' });
            }

            // Update active state in nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('data-page') === pageId) {
                    link.classList.add('text-brand-teal');
                } else {
                    link.classList.remove('text-brand-teal');
                }
            });
        }

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Toggle Assistant Panel
        function toggleAssistant() {
            const panel = document.getElementById('assistantPanel');
            panel.classList.toggle('hidden');
        }

        // Assistant Demo Query Handling (Verification-based answers)
        function appendAssistantMessage(message, isUser) {
  const chat = document.getElementById('assistantChat');
  const item = document.createElement('div');
  item.className = isUser
    ? 'bg-brand-teal/20 border border-brand-teal/40 p-2.5 rounded text-white text-right text-xs'
    : 'bg-brand-gray/40 p-2.5 rounded text-gray-300 border border-white/10 text-xs';
  item.textContent = message;
  chat.appendChild(item);
  chat.scrollTop = chat.scrollHeight;
}
function handleAssistantSubmit(e) {
            e.preventDefault();
            const input = document.getElementById('assistantInput');
            const query = input.value.trim().toLowerCase();
            if (!query) return;

            const chat = document.getElementById('assistantChat');
            
            // Append User Question
            appendAssistantMessage(input.value, true);
            input.value = '';

            let reply = "";

            if (query.includes('unt') || query.includes('matthews')) {
                reply = "UNT Matthews Hall project involved renovating approx. 4,000 sq. ft. of office space, ADA restrooms, modern lighting, and interior finishes.";
            } else if (query.includes('twu') || query.includes('old main') || query.includes('skylight')) {
                reply = "TWU Old Main work included plaster repair, painting, occupant coordination and replacement of skylight glass in the rotunda.";
            } else if (query.includes('plano') || query.includes('bleacher')) {
                reply = "The Plano ISD project covered electrical work, demolition, new concrete paving and bleacher upgrades at six sites.";
            } else if (query.includes('mep') || query.includes('generator')) {
                reply = "The MEP portfolio includes troubleshooting 100 kW generators and replacing 50 drain pans at a data center.";
            } else if (query.includes('phone') || query.includes('call') || query.includes('contact') || query.includes('address')) {
                reply = "308 Construction Headquarters: 11835 Hilltop Rd., Argyle, TX 76226. Phone: 940-387-4002. Email: Main@308gc.com";
            } else if (query.includes('service') || query.includes('what do you do')) {
                reply = "We offer Preconstruction Planning, General Construction, and Construction Management across North Texas.";
            } else {
                reply = "For specific inquiry details not listed in this demo, please contact our main office at 940-387-4002 or Main@308gc.com.";
            }

            setTimeout(() => {
                appendAssistantMessage(reply, false);
                chat.scrollTop = chat.scrollHeight;
            }, 400);
        }

        // Handle Demo Form Submissions
        function handleDemoSubmit(e, formName) {
            e.preventDefault();
            alert(`Preview only: ${formName} was not sent. No information has been stored or transmitted.`);
            e.target.reset();
        }

        // Default Load First Page
        window.addEventListener('popstate', () => {
  const pageId = new URLSearchParams(location.search).get('view') || 'home';
  navigateTo(document.getElementById('page-' + pageId) ? pageId : 'home', false);
});
window.addEventListener('load', () => {
  const pageId = new URLSearchParams(location.search).get('view') || 'home';
  navigateTo(document.getElementById('page-' + pageId) ? pageId : 'home', false);
});
/* Cinematic scene reveals: enhancement only, never required for legibility. */
function initCinematicScenes() {
  const items = document.querySelectorAll('.home-v2 [data-reveal], .services-v2 [data-reveal], .portfolio-page [data-reveal], .portfolio-story [data-reveal], .about-v3 [data-reveal]');
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', initCinematicScenes);

/* Muted decorative hero video. Motion and data-saving preferences take priority.
   A photo remains visible underneath when playback fails or is disabled. */
function initHomeConstructionVideo() {
  const video = document.querySelector('.home-v2 .hero-bg-video');
  if (!video) return;
  const motion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compact = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
  const saveData = navigator.connection && navigator.connection.saveData === true;
  if (motion || compact || saveData) return;

  const source = video.querySelector('source[data-src]');
  if (!source) return;
  video.addEventListener('playing', () => video.classList.add('is-playing'));
  video.addEventListener('pause', () => video.classList.remove('is-playing'));
  video.addEventListener('error', () => video.classList.remove('is-playing'));
  source.src = source.dataset.src;
  video.load();
  const tryStart = () => {
    if (document.hidden) return;
    const result = video.play();
    if (result && typeof result.catch === 'function') result.catch(() => {
      video.classList.remove('is-playing');
    });
  };
  tryStart();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else if (document.querySelector('#page-home') && !document.querySelector('#page-home').classList.contains('hidden-page')) tryStart();
  });
}
document.addEventListener('DOMContentLoaded', initHomeConstructionVideo);


/* HOME / SERVICES: natural pinned chapters + subtle photographic movement.
   The next rising chapter controls outgoing image zoom; sticky remains pure CSS.
   No wheel interception, scroll snapping, pointer overlays or forced navigation. */
function initHomeServiceSequence() {
  const home = document.getElementById('page-home');
  const sequence = home?.querySelector('[data-scene-sequence]');
  if (!home || !sequence || !window.matchMedia || !window.requestAnimationFrame) return;

  const scenes = [...sequence.querySelectorAll('[data-scene]')];
  if (scenes.length !== 3) return;

  const sceneMotion = window.matchMedia(
    '(min-height: 560px) and (prefers-reduced-motion: no-preference)'
  );
  const clamp = value => Math.max(0, Math.min(1, value));
  let scheduled = false;

  function draw() {
    scheduled = false;
    if (!sceneMotion.matches || home.classList.contains('hidden-page')) return;

    const height = Math.max(1, window.innerHeight);
    const sequenceRect = sequence.getBoundingClientRect();
    // Nothing to animate when chapters are fully outside the viewport.
    if (sequenceRect.top > height || sequenceRect.bottom < -height) return;

    scenes.forEach((scene, index) => {
      const sceneTop = scene.getBoundingClientRect().top;
      const entrance = index === 0 ? 1 : clamp((height - sceneTop) / height);
      // A sticky scene's top stops changing at zero; the next scene keeps moving.
      const nextTop = index < scenes.length - 1
        ? scenes[index + 1].getBoundingClientRect().top
        : sequenceRect.bottom;
      const exit = clamp((height - nextTop) / height);

      // A small zoom-out as a photo enters, then zoom-in while pinned.
      // Range approximately 1.04–1.105, deliberately below dramatic parallax.
      const compact = window.innerWidth < 768;
      // Touch screens: gentler scale and pan, with no expensive image clipping.
      const zoom = compact
        ? 1.045 + (1 - entrance) * 0.012 + exit * 0.06
        : 1.025 + (1 - entrance) * 0.045 + exit * 0.095;
      const pan = compact
        ? Math.round((1 - entrance) * 4 - exit * 8)
        : Math.round((1 - entrance) * 12 - exit * 20);
      const mask = index === 0 || compact ? 0 : Math.round((1 - entrance) * 16);

      scene.style.setProperty('--scene-scale', zoom.toFixed(4));
      scene.style.setProperty('--scene-pan', pan + 'px');
      scene.style.setProperty('--scene-mask', mask + '%');
    });
  }

  function requestDraw() {
    if (!sceneMotion.matches || scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(draw);
  }

  function updateMode() {
    document.documentElement.classList.toggle('scene-motion', sceneMotion.matches);
    if (!sceneMotion.matches) {
      scenes.forEach(scene => {
        scene.style.removeProperty('--scene-scale');
        scene.style.removeProperty('--scene-pan');
        scene.style.removeProperty('--scene-mask');
      });
    } else requestDraw();
  }

  window.addEventListener('scroll', requestDraw, {passive: true});
  window.addEventListener('resize', requestDraw, {passive: true});
  window.addEventListener('popstate', requestDraw);
  if (typeof sceneMotion.addEventListener === 'function') {
    sceneMotion.addEventListener('change', updateMode);
  } else if (typeof sceneMotion.addListener === 'function') {
    sceneMotion.addListener(updateMode);
  }
  updateMode();
}
document.addEventListener('DOMContentLoaded', initHomeServiceSequence);


/* SERVICES 2.0: the same natural sticky scroll rhythm as the approved Home.
   Each photo gently zooms while the next scene slides over it.
   No wheel interception, scroll lock, fake timers or custom touch behavior. */
function initServicesScrollSequence() {
  const page = document.getElementById('page-services');
  const sequence = page?.querySelector('[data-sv-sequence]');
  if (!page || !sequence || !window.matchMedia || !window.requestAnimationFrame) return;
  const scenes = [...sequence.querySelectorAll('[data-sv-scene]')];
  if (scenes.length !== 3) return;
  const allowed = window.matchMedia('(min-height:560px) and (prefers-reduced-motion:no-preference)');
  let scheduled = false;
  const clamp = value => Math.max(0, Math.min(1, value));

  function draw() {
    scheduled = false;
    if (!allowed.matches || page.classList.contains('hidden-page')) return;
    const height = Math.max(1,window.innerHeight);
    const sequenceBox = sequence.getBoundingClientRect();
    if (sequenceBox.top > height || sequenceBox.bottom < -height) return;
    const compact = window.innerWidth < 768;
    scenes.forEach((scene,index) => {
      const top = scene.getBoundingClientRect().top;
      const entrance = index === 0 ? 1 : clamp((height - top)/height);
      const nextTop = index < scenes.length - 1
        ? scenes[index+1].getBoundingClientRect().top
        : sequenceBox.bottom;
      const exit = clamp((height - nextTop)/height);
      const scale = compact
        ? 1.035 + (1 - entrance)*0.012 + exit*0.065
        : 1.025 + (1 - entrance)*0.026 + exit*0.088;
      const shift = compact
        ? Math.round((1 - entrance)*5 - exit*10)
        : Math.round((1 - entrance)*11 - exit*17);
      scene.style.setProperty('--sv-image-zoom', scale.toFixed(4));
      scene.style.setProperty('--sv-image-shift', shift+'px');
    });
  }
  function queue() {
    if (!allowed.matches || scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(draw);
  }
  function updateMode() {
    document.documentElement.classList.toggle('sv-scene-motion',allowed.matches);
    if (!allowed.matches) {
      scenes.forEach(scene => {
        scene.style.removeProperty('--sv-image-zoom');
        scene.style.removeProperty('--sv-image-shift');
      });
    } else queue();
  }
  window.addEventListener('scroll',queue,{passive:true});
  window.addEventListener('resize',queue,{passive:true});
  window.addEventListener('popstate',queue);
  if (typeof allowed.addEventListener === 'function') allowed.addEventListener('change',updateMode);
  else if (typeof allowed.addListener === 'function') allowed.addListener(updateMode);
  updateMode();
}
document.addEventListener('DOMContentLoaded',initServicesScrollSequence);
