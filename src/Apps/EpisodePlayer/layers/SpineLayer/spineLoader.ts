import * as PIXI from "pixi.js";
import { useConfigStore } from "../../../../store/config";
import { useResourceStore } from "../../../../store/resource";
import { BackgroundHandle } from "../backgroundLayer";
const configStore = useConfigStore();
const resourceStore = useResourceStore();

resourceStore.LoadSpineResource("40103");
resourceStore.LoadSpineResource("40203");
resourceStore.LoadBackgroundResource("1130");
resourceStore.LoadBackgroundResource("200");
const dpr = window.devicePixelRatio;
export const app = new PIXI.Application({
  width: window.innerWidth * dpr,
  height: window.innerWidth * dpr * (9 / 16), // 16:9
});
export const loadSpine = () => {
  configStore.exampleStart = false;
  
  
  app.view.style.width = `${window.innerWidth * 0.7}px`;
  app.view.style.height = `${window.innerWidth * 0.7 * (9/ 16)}px`;

  document.getElementById("spine_layer")!.appendChild(app.view);
  console.log(app.screen.width, app.screen.height);
  const scale = app.screen.width / 800 * 0.35;
  const iroha = resourceStore.getSpineMap["40103"];
  iroha.x = app.screen.width * 0.25;
  iroha.y = app.screen.height;
  iroha.scale.set(scale);
  console.log(iroha);
  app.stage.addChildAt(iroha, 0);
  iroha.state.setAnimation(0, "breath", true);
  iroha.state.setAnimation(1, "body/think", false);
  const mito = resourceStore.getSpineMap["40203"];
  mito.x = app.screen.width  * 0.75;
  mito.y = app.screen.height;
  mito.scale.set(scale);
  app.stage.addChildAt(mito, 0);
  mito.state.setAnimation(0, "breath", true);
  mito.state.setAnimation(1, "body/sad", false);
  const background = resourceStore.getSpriteMap["1130"];
  background.x = 0;
  background.y = 0;
  background.width = app.screen.width;
  background.height = app.screen.height;
  app.stage.addChildAt(background, 0);
  setTimeout(() => {
    BackgroundHandle("200", 4, 0.8, 0, 0);
    app.view.requestFullscreen();
  }, 500);
};
