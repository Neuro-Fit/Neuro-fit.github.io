
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Botón principal de la hero para mostrar detalles y hacer scroll
const btnPrincipal = document.getElementById('btnPrincipal');
const detalles = document.getElementById('detallesPlan');

btnPrincipal.addEventListener('click', function() {
  detalles.classList.add('plan__detalles--visible');
  detalles.scrollIntoView({ behavior: 'smooth' });
});

// Botón de WhatsApp dentro de detalles
document.getElementById('btnWhatsApp').addEventListener('click', function() {
  const mensaje = encodeURIComponent(
    'Hola, quisiera información sobre el plan de entrenamiento Virtual.'
  );
  window.location.href = 'https://wa.me/51982622594?text=' + mensaje;
});
