const timeElement = document.querySelector('[data-testid="test-user-time"]');
setInterval(() => {
  const now = Date.now();
  timeElement.textContent = now;
  timeElement.setAttribute("datetime", new Date(now).toISOString());
}, 1000);
