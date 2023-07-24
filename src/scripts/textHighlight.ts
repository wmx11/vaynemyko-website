const TEXT_HIGHLIGHT_CLASS =
  'bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent';

const DATA_SELECTOR = 'data-highlight';

const elements = document.querySelectorAll(`[${DATA_SELECTOR}]`);

elements.forEach((el) => {
  const textToHighlight = el.getAttribute(DATA_SELECTOR)?.split(',');

  let elementText = el.innerHTML;

  textToHighlight?.forEach((text) => {
    if (elementText.toLowerCase().includes(text.toLowerCase())) {
      const newText = elementText.replace(
        text,
        `<span class="${TEXT_HIGHLIGHT_CLASS}">$&</span>`
      );
      elementText = newText;
      el.innerHTML = newText;
    }
  });
});
