import * as PIXI from "pixi.js";
import * as spine from "pixi-spine";
import { useConfigStore } from "../../../../store/config";
import { useResourceStore } from "../../../../store/resource";
const configStore = useConfigStore();
const resourceStore = useResourceStore();

export const loadSpine = () => {
  configStore.exampleStart = false;
  const id = "40103";
  const app = new PIXI.Application({
        
  });
    document.getElementById("spine_layer")!.appendChild(app.view);
    spine.SpineParser.registerLoaderPlugin();
    app.loader.add(id, configStore.getSpineUrlById(id));
    app.loader.load((_, resource) => {
      const iroha = new spine.Spine(resource[id].spineData!);
      resourceStore.addSpineToMap(id, iroha);
      iroha.x = app.screen.width / 2;
      iroha.y = app.screen.height;
      iroha.scale.set(0.5);
      iroha.state.setAnimation(0, "breath", true);
      app.stage.addChild(iroha);
    }
    );    
};