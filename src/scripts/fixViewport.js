
/**
 * This function modifies the viewport settings for iOS devices to fix an issue with wrong window.innerHeight & window.innerWidth values.
 * To fix this we have to replace the viewport setting for width=device-width with width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0
 */
export default function fixViewport() {

  const viewport = document.querySelector("meta[name=viewport]");
  const viewportContent = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

  if (viewport !== null) {
    const regex = /width.*?=.*?device-width/;
    const content = viewport.getAttribute('content');

    if (regex.test(content)) {
      viewport.setAttribute('content', viewportContent);
    }
  } else {
    const metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = viewportContent;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }
}
