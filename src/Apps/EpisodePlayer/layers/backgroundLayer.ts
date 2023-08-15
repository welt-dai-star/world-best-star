import * as PIXI from "pixi.js";
import { app } from "../main";
import { useResourceStore } from "../../../store/resource";

export function BackgroundHandle(
  backgroundImageFileName?: string,
  backgroundImageFileFadeType?: number,
  fadeValue1?: number,
  fadeValue2?: number,
  fadeValue3?: number
): void {
  // 对Type == 3 进行特殊处理
  if (backgroundImageFileFadeType === 3) {
    backgroundImageFileFadeType = 2;
  }
  const resourceStore = useResourceStore();
  const backgroundLayer = app.stage.getChildByName("backgroundLayer") as PIXI.Container;
  if (backgroundImageFileName) {
    const frontBG = backgroundLayer.getChildAt(0) as PIXI.Sprite;
    const backBG = resourceStore.getSpriteMap[backgroundImageFileName];
    const Factor = (deltaTime: number) => {
      return deltaTime * 0.06;
    };
    if (backgroundImageFileFadeType === 1) {
      console.log("Type 1");
      // 前一张图片alpha渐变到0，黑屏一段时间，后一张图片alpha渐变到1
      backgroundLayer.addChildAt(backBG, 0);
      // 添加黑色遮罩
      const blackGraphic = new PIXI.Graphics();
      blackGraphic.beginFill(0x000000);
      blackGraphic.drawRect(0, 0, app.screen.width, app.screen.height);
      blackGraphic.endFill();
      const blackBG = new PIXI.Sprite(app.renderer.generateTexture(blackGraphic));
      blackBG.width = app.screen.width;
      blackBG.height = app.screen.height;
      // alphaFilter
      const alphaFilter = new PIXI.filters.AlphaFilter(0);
      blackBG.filters = [alphaFilter];
      app.stage.addChildAt(blackBG, 7);
      let lastTime = new Date().getTime();
      const begin = new Date().getTime();
      let deltaTime = 0;
      const loop = () => {
        const now = new Date().getTime();
        deltaTime = now - lastTime;
        lastTime = now;
        if (alphaFilter.alpha < 1) {
          alphaFilter.alpha += 0.025 * Factor(deltaTime) / fadeValue1!;  // 动画时长
          requestAnimationFrame(loop);
        } else {
          console.log("anime1 use:" + (new Date().getTime() - begin));
          console.log("wait time: " + fadeValue2! * 4000 + "ms");
          backgroundLayer.removeChild(frontBG);
          setTimeout(() => {
            let lastTime = new Date().getTime();
            let deltaTime = 0;
            const loop = () => {
              const now = new Date().getTime();
              deltaTime = now - lastTime;
              lastTime = now;
              if (alphaFilter.alpha > 0) {
                alphaFilter.alpha -= 0.025 * Factor(deltaTime) / fadeValue3!;  // 动画时长
                requestAnimationFrame(loop);
              } else {
                console.log(`Background Changed && index: ${backgroundLayer.getChildIndex(backBG)}`);
                console.log("total: ", new Date().getTime() - begin);
              }
            };
            requestAnimationFrame(loop);
          }, fadeValue2! * 6000);
        }
      };
      requestAnimationFrame(loop);
    }
    else if (backgroundImageFileFadeType === 2) {
      console.log("Type 2");
      // 前一张图片alpha渐变到0，白屏一段时间，后一张图片alpha渐变到1
      backgroundLayer.addChildAt(backBG, 0);
      // 添加白色遮罩
      const whiteBG = new PIXI.Sprite(PIXI.Texture.WHITE);
      whiteBG.width = app.screen.width;
      whiteBG.height = app.screen.height;
      const alphaFilter = new PIXI.filters.AlphaFilter(0);
      whiteBG.filters = [alphaFilter];
      app.stage.addChildAt(whiteBG, 7);
      let lastTime = new Date().getTime();
      const begin = new Date().getTime();
      let deltaTime = 0;
      const loop = () => {
        const now = new Date().getTime();
        deltaTime = now - lastTime;
        lastTime = now;
        if (alphaFilter.alpha < 1) {
          alphaFilter.alpha += 0.01 * Factor(deltaTime) / fadeValue1!;  // 动画时长
          requestAnimationFrame(loop);
        } else {
          console.log("anime1 use:" + (new Date().getTime() - begin));
          console.log("wait time: " + fadeValue2! * 4000 + "ms");
          backgroundLayer.removeChild(frontBG);
          setTimeout(() => {
            let lastTime = new Date().getTime();
            let deltaTime = 0;
            const loop = () => {
              const now = new Date().getTime();
              deltaTime = now - lastTime;
              lastTime = now;
              if (alphaFilter.alpha > 0) {
                alphaFilter.alpha -= 0.01 * Factor(deltaTime) / fadeValue3!;  // 动画时长
                requestAnimationFrame(loop);
              } else {
                console.log(`Background Changed && index: ${backgroundLayer.getChildIndex(backBG)}`);
                console.log("total: ", new Date().getTime() - begin);
              }
            };
            requestAnimationFrame(loop);
          }, fadeValue2! * 6000);
        }
      };
      requestAnimationFrame(loop);
    }
    else if (backgroundImageFileFadeType === 3) {
      console.log("Type 3");
      // 特殊动画……暂时不做
      // 表示回忆，暂时当作Type2处理
    }
    else if (backgroundImageFileFadeType === 4) {
      console.log("Type 4");
      // 前一张图片alpha渐变到0，后一张图片alpha一直为1
      backgroundLayer.addChildAt(backBG, 0);
      const alphaFilter = new PIXI.filters.AlphaFilter();
      frontBG.filters = [alphaFilter];
      let lastTime = new Date().getTime();
      const begin = new Date().getTime();
      let deltaTime = 0;
      const loop = () => {
        const now = new Date().getTime();
        deltaTime = now - lastTime;
        lastTime = now;
        if (alphaFilter.alpha > 0) {
          alphaFilter.alpha -= 0.025 * Factor(deltaTime) * fadeValue1!;  // 动画时长
          requestAnimationFrame(loop);
        } else {
          app.stage.removeChild(frontBG);
          console.log(`Background Changed && index: ${backgroundLayer.getChildIndex(backBG)}`);
          console.log("total: ", new Date().getTime() - begin);
        }
      };
      requestAnimationFrame(loop);
    }
  }
}
