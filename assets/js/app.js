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
            alert(`DEMO ONLY: ${formName} was not sent. No information has been stored or transmitted.`);
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
  const items = document.querySelectorAll('.home-v2 [data-reveal], .services-v2 [data-reveal]');
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
