document.getElementById('contactForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
});

function showRecommendation() {
  const interest = document.getElementById('interest').value.toLowerCase();
  const result = document.getElementById('result');

  if (interest === 'beach') {
    result.textContent = 'You should visit Maldives or Bali!';
  } else if (interest === 'mountain') {
    result.textContent = 'Try exploring the Swiss Alps or Northern Pakistan!';
  } else {
    result.textContent = 'Please enter a valid interest.';
  }
}

