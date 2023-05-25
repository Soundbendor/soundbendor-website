/* eslint-disable no-alert, no-console */
document.getElementById('bs-script').addEventListener('load', () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)) // eslint-disable-line
})
/* eslint-enable no-alert */
