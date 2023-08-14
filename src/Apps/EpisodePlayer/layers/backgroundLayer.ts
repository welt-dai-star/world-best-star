import * as PIXI from "pixi.js";
import { app } from "./SpineLayer/spineLoader";
import { useResourceStore } from "../../../store/resource";

export function BackgroundHandle(
  backgroundImageFileName?: string,
  backgroundImageFileFadeType?: number,
  fadeValue1?: number,
  fadeValue2?: number,
  fadeValue3?: number
): void {
  const resourceStore = useResourceStore();
  if (backgroundImageFileName) {
    const frontBG = app.stage.getChildAt(0) as PIXI.Sprite;
    const backBG = resourceStore.getSpriteMap[backgroundImageFileName];
    backBG.width = app.screen.width * 1.25;
    backBG.height = app.screen.height * 1.25;
    backBG.position.set(-app.screen.width * 0.125, -app.screen.height * 0.125);
    console.log(backBG.width, backBG.height);
    const Factor = (deltaTime: number) => {
      return deltaTime * 0.06;
    }
    if (backgroundImageFileFadeType === 4) {
      // 前一张图片alpha渐变到0，后一张图片alpha一直为1
      app.stage.addChildAt(backBG, 0);
      const alphaFilter = new PIXI.filters.AlphaFilter();
      frontBG.filters = [alphaFilter];
      let lastTime = new Date().getTime();
      let begin = new Date().getTime();
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
          console.log(`Background Changed && index: ${app.stage.getChildIndex(backBG)}`);
          console.log("total: ", new Date().getTime() - begin);
        }
      }
      requestAnimationFrame(loop);
    }
  }
}
