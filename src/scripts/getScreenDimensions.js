
export default function getScreenDimension() {

  const body = document.body;
  const html = document.documentElement;

  const viewportWidth = Math.max(html.clientWidth, window.innerWidth || 0);
  let viewportHeight = Math.max(html.clientHeight, window.innerHeight || 0);

  const landscape = viewportWidth > viewportHeight;

  const screenMax = Math.max(window.screen.width, window.screen.height);
  const screenMin = Math.min(window.screen.width, window.screen.height);

  const innerMax = Math.max(window.innerWidth, window.innerHeight);
  const innerMin = Math.min(window.innerWidth, window.innerHeight);

  const screenWidth = landscape ? screenMax : screenMin;
  const screenHeight = landscape ? screenMin : screenMax;

  const innerWidth =  landscape ? innerMax : innerMin;
  const innerHeight =  landscape ? innerMin : innerMax;

  if (landscape && viewportHeight - 20 === innerHeight) {
    // iOS 7 has a 20px bug in landscape mode
    // remove this when dropping iOS 7 support
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      viewportHeight = innerHeight;
    }
  }

  return {
    viewportWidth,
    viewportHeight,
    documentWidth: html.scrollWidth,
    documentHeight: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
    pixelRatio: typeof window.orientation  === 'undefined' ? 1 : window.devicePixelRatio,
    orientation: typeof window.orientation === 'undefined' ? 0 : Math.abs(window.orientation),
    screenWidth,
    screenHeight,
    innerWidth,
    innerHeight,
  };

}
