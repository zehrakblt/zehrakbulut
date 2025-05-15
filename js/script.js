document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.animated-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value);
    }
    
    window.location.href = 'gonder.html?' + params.toString();
  });
});