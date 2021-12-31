const getScrollPercent = (
  page: HTMLDivElement | null,
  scroll: number
): number => {
  if (!page) return 0;
  const windowHeight = window.innerHeight;
  const pageTop = page.offsetTop;
  if (pageTop === 0) return scroll / windowHeight;
  return (scroll + windowHeight - pageTop) / (windowHeight * 2);
};

export default getScrollPercent;
