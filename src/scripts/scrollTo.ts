document?.querySelectorAll(`[data-scroll-to]`).forEach((el) => {
  const element = el as HTMLBaseElement;

  element?.addEventListener('click', () => {
    const location = window.location.pathname;
    if (location === '/') {
      window.history.pushState({}, '', element?.dataset?.scrollTo as string);
      document
        ?.querySelector(element?.dataset?.scrollTo as string)
        ?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.replace(`/${element?.dataset?.scrollTo as string}`);
    }
  });
});
