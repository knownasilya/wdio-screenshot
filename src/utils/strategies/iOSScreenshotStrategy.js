import MergeScreenshotStrategy from './MergeScreenshotStrategy';

export default class iOSScreenshotStrategy extends MergeScreenshotStrategy {

    constructor(screenDimensions) {
      super(screenDimensions);
      // todo better support for detecting ipad
      this.isIpad = screenDimensions.screenHeight === 1024 || screenDimensions.screenWidth === 1024;
      // detect if status bar + navigation bar is shown
      this.barsShown = this.isIpad;
    }

  getCropDimensions() {
    const cd = super.getCropDimensions();

    if (this.barsShown) {
      const { viewportHeight, screenHeight } = this.screenDimensions;

      // calculate height of status + addressbar
      const barsHeight = screenHeight - viewportHeight;

      const {width, height, x, pixelRatio, top } = cd;

      return this.createCropDimensions(width, height, x, barsHeight, pixelRatio, top, 0);
    }
    return cd;
  }


}
