import * as PIXI from "pixi.js";
import { useConfigStore } from "../../../store/config";
import { useResourceStore } from "../../../store/resource";
import { BackgroundHandle } from "./backgroundLayer";
import { app } from "../main";
const configStore = useConfigStore();
const resourceStore = useResourceStore();

resourceStore.LoadSpineResource("40103");
resourceStore.LoadSpineResource("40203");
resourceStore.LoadBackgroundResource("1130");
resourceStore.LoadBackgroundResource("200");

export const loadSpine = () => {
  configStore.exampleStart = false;
  document.getElementById("spine_layer")!.appendChild(app.view);
  console.log(app.screen.width, app.screen.height);
  const scale = app.screen.width / 800 * 0.35;
  const iroha = resourceStore.getSpineMap["40103"];
  iroha.x = app.screen.width * 0.25;
  iroha.y = app.screen.height;
  iroha.scale.set(scale);
  iroha.interactive = true;
  iroha.on("pointerdown", () => {
    console.log("iroha pointerdown");
  });
  console.log(iroha);
  app.stage.addChildAt(iroha, 0);
  iroha.state.setAnimation(0, "breath", true);
  iroha.state.setAnimation(1, "body/think", false);
  const mito = resourceStore.getSpineMap["40203"];
  mito.x = app.screen.width  * 0.75;
  mito.y = app.screen.height;
  mito.scale.set(scale);
  mito.on("pointerdown", () => {
    console.log("mito pointerdown");
  });
  app.stage.addChildAt(mito, 0);
  mito.state.setAnimation(0, "breath", true);
  mito.state.setAnimation(1, "body/sad", false);
  const backgroundLayer = new PIXI.Container();
  backgroundLayer.name = "backgroundLayer";
  const background = resourceStore.getSpriteMap["1130"];
  app.stage.addChildAt(backgroundLayer, 0);
  backgroundLayer.addChildAt(background, 0);
  setTimeout(() => {
    BackgroundHandle("200", 1, 0.8, 0.5, 0.8);
    app.view.requestFullscreen();
  }, 500);
};
