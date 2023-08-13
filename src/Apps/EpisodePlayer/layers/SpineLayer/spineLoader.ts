import * as PIXI from "pixi.js";
import { useConfigStore } from "../../../../store/config";
import { useResourceStore } from "../../../../store/resource";
const configStore = useConfigStore();
const resourceStore = useResourceStore();

resourceStore.LoadSpineResource("40103");
resourceStore.LoadSpineResource("40203");
export const loadSpine = () => {
  configStore.exampleStart = false;
  const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x00ff00,
  });
  document.getElementById("spine_layer")!.appendChild(app.view);
  const iroha = resourceStore.getSpineMap["40103"];
  iroha.x = app.screen.width * 0.25;
  iroha.y = app.screen.height;
  iroha.scale.set(0.5);
  console.log(iroha);
  app.stage.addChild(iroha);
  iroha.state.setAnimation(0, "breath", true);
  iroha.state.setAnimation(1, "body/think", false);
  const mito = resourceStore.getSpineMap["40203"];
  mito.x = app.screen.width  * 0.75;
  mito.y = app.screen.height;
  mito.scale.set(0.5);
  app.stage.addChild(mito);
  mito.state.setAnimation(0, "breath", true);
  mito.state.setAnimation(1, "body/sad", false);
};
