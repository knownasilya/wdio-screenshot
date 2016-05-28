import iOSScreenshotStrategy from '../../../src/utils/strategies/iOSScreenshotStrategy';
import testStrategy from '../../helper/testStrategy';


describe('iOSScreenshotStrategy', function () {

  const browser = {
    isMobile: true,
    isIOS: true,
    isAndroid: false,
    desiredCapabilities: {
      browserName: 'safari',
      //"device-orientation": "portait", // portrait is default
    },
  };

  context('started in portrait', function () {
    context('ipad air iOS 7.1', function () {
      context('handles vertical scroll & crop', function () {

        it('kept in portrait', function () {
          // Note: status & navigation bar is shown

          const screenDimensions = {
            "viewportWidth": 768,
            "viewportHeight": 928,
            "pixelRatio": 2,
            "orientation": 0,
            "screenWidth": 768,
            "screenHeight": 1024,
            "innerWidth": 928,
            "innerHeight": 768,
            "documentWidth": 768,
            "documentHeight": 2300,
          };

          const barHeight = screenDimensions.screenHeight - screenDimensions.viewportHeight;

          const crop = {
            width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
            height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
            x: 0 * screenDimensions.pixelRatio,
            y: barHeight * screenDimensions.pixelRatio,
            rotation: 0,
            gravity: 'NorthWest'
          };

          const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

          const scrollY = (index) => index * screenDimensions.viewportHeight;

          const steps = [
            {
              scroll: {x: 0, y: scrollY(0), indexX: 0, indexY: 0},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(1), indexX: 0, indexY: 1},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(2), indexX: 0, indexY: 2},
              crop: {
                ...crop,
                height: (screenDimensions.documentHeight - 2 * screenDimensions.viewportHeight) * screenDimensions.pixelRatio,
              }
            },
          ];

          // then & when
          testStrategy(strategy, steps);
        });

        it('rotated to landscape', function () {
          // Note: status & navigation bar is shown
          const screenDimensions = {
            "viewportWidth": 1024,
            "viewportHeight": 672,
            "pixelRatio": 2,
            "orientation": 90,
            "screenWidth": 1024,
            "screenHeight": 668,
            "innerWidth": 1024,
            "innerHeight": 672,
            "documentWidth": 1024,
            "documentHeight": 1700,
          };

          const barHeight = screenDimensions.screenHeight - screenDimensions.viewportHeight;
          const scrollY = (index) => index * screenDimensions.viewportHeight;

          const crop = {
            width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
            height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
            x: 0 * screenDimensions.pixelRatio,
            y: barHeight * screenDimensions.pixelRatio,
            rotation: 0,
            gravity: 'NorthWest'
          };

          const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

          const steps = [
            {
              scroll: {x: 0, y: scrollY(0), indexX: 0, indexY: 0},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(1), indexX: 0, indexY: 1},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(2), indexX: 0, indexY: 2},
              crop: {
                ...crop,
                height: (screenDimensions.documentHeight - 2 * screenDimensions.viewportHeight) * screenDimensions.pixelRatio,
              }
            },
          ];

          // then & when
          testStrategy(strategy, steps);

        });

      });
    });

    context('ipad air iOS 8.1', function () {
      context('handles vertical scroll & crop', function () {

        it('kept in portrait', function () {
          // Note: status & navigation bar is shown

          const screenDimensions = {
            "viewportWidth": 768,
            "viewportHeight": 960,
            "screenWidth": 768,
            "screenHeight": 1024,
            "pixelRatio": 2,
            "orientation": 0,
            "innerWidth": 768,
            "innerHeight": 960,
            "documentWidth": 768,
            "documentHeight": 2300,
          };

          const barHeight = screenDimensions.screenHeight - screenDimensions.viewportHeight;

          const crop = {
            width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
            height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
            x: 0 * screenDimensions.pixelRatio,
            y: barHeight * screenDimensions.pixelRatio,
            rotation: 0,
            gravity: 'NorthWest'
          };

          const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

          const scrollY = (index) => index * screenDimensions.viewportHeight;

          const steps = [
            {
              scroll: {x: 0, y: scrollY(0), indexX: 0, indexY: 0},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(1), indexX: 0, indexY: 1},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(2), indexX: 0, indexY: 2},
              crop: {
                ...crop,
                height: (screenDimensions.documentHeight - 2 * screenDimensions.viewportHeight) * screenDimensions.pixelRatio,
              }
            },
          ];

          // then & when
          testStrategy(strategy, steps);
        });

        it('rotated to landscape', function () {
          // Note: status & navigation bar is shown
          const screenDimensions = {
            "viewportWidth": 1024,
            "viewportHeight": 704,
            "pixelRatio": 2,
            "orientation": 90,
            "screenWidth": 1024,
            "screenHeight": 768,
            "innerWidth": 1024,
            "innerHeight": 704,
            "documentWidth": 1024,
            "documentHeight": 1700,
          };

          const barHeight = screenDimensions.screenHeight - screenDimensions.viewportHeight;
          const scrollY = (index) => index * screenDimensions.viewportHeight;

          const crop = {
            width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
            height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
            x: 0 * screenDimensions.pixelRatio,
            y: barHeight * screenDimensions.pixelRatio,
            rotation: 0,
            gravity: 'NorthWest'
          };

          const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

          const steps = [
            {
              scroll: {x: 0, y: scrollY(0), indexX: 0, indexY: 0},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(1), indexX: 0, indexY: 1},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(2), indexX: 0, indexY: 2},
              crop: {
                ...crop,
                height: (screenDimensions.documentHeight - 2 * screenDimensions.viewportHeight) * screenDimensions.pixelRatio,
              }
            },
          ];

          // then & when
          testStrategy(strategy, steps);

        });

      });
    });

  });

  context('started in landscape', function () {

    const browser = {
      isMobile: true,
      isIOS: true,
      isAndroid: false,
      desiredCapabilities: {
        browserName: 'safari',
        "device-orientation": "landscape",
      },
    };

    context('ipad air iOS 7.1', function () {
      context('handles vertical scroll & crop', function () {

        it('kept in landscape', function () {
          // Note: status & navigation bar is shown
          // Note: images are rotated when started in landscape!!

          const screenDimensions = {
            "viewportWidth": 1024,
            "viewportHeight": 672,
            "screenWidth": 1024,
            "screenHeight": 768,
            "pixelRatio": 2,
            "orientation": 90,
            "innerWidth": 1024,
            "innerHeight": 672,
            "documentWidth": 1024,
            "documentHeight": 1700,
          };

          const barHeight = screenDimensions.screenHeight - screenDimensions.viewportHeight;
          const scrollY = (index) => index * screenDimensions.viewportHeight;

          const crop = {
            width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
            height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
            x: 0 * screenDimensions.pixelRatio,
            y: barHeight * screenDimensions.pixelRatio,
            rotation: 0,
            gravity: 'NorthWest'
          };

          const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

          const steps = [
            {
              scroll: {x: 0, y: scrollY(0), indexX: 0, indexY: 0},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(1), indexX: 0, indexY: 1},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(2), indexX: 0, indexY: 2},
              crop: {
                ...crop,
                height: (screenDimensions.documentHeight - 2 * screenDimensions.viewportHeight) * screenDimensions.pixelRatio,
              }
            },
          ];

          // then & when
          testStrategy(strategy, steps);

        });

        it('rotated to portrait', function () {
          // Note: status & navigation bar is shown
          // Note: image orientation is correct when rotated from landscape to portrait!

          const screenDimensions = {
            "viewportWidth": 768,
            "viewportHeight": 928,
            "pixelRatio": 2,
            "orientation": 0,
            "screenWidth": 768,
            "screenHeight": 1024,
            "innerWidth": 768,
            "innerHeight": 928,
            "documentWidth": 768,
            "documentHeight": 2300,
          };

          const barHeight = screenDimensions.screenHeight - screenDimensions.viewportHeight;

          const crop = {
            width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
            height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
            x: 0 * screenDimensions.pixelRatio,
            y: barHeight * screenDimensions.pixelRatio,
            rotation: 0,
            gravity: 'NorthWest'
          };

          const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

          const scrollY = (index) => index * screenDimensions.viewportHeight;

          const steps = [
            {
              scroll: {x: 0, y: scrollY(0), indexX: 0, indexY: 0},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(1), indexX: 0, indexY: 1},
              crop,
            },
            {
              scroll: {x: 0, y: scrollY(2), indexX: 0, indexY: 2},
              crop: {
                ...crop,
                height: (screenDimensions.documentHeight - 2 * screenDimensions.viewportHeight) * screenDimensions.pixelRatio,
              }
            },
          ];

          // then & when
          testStrategy(strategy, steps);
        });


      });
    });

  });

});
