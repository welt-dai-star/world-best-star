import * as PIXI from "pixi.js";
import * as spine from "pixi-spine";
import { useConfigStore } from "../../../../store/config";

const configStore = useConfigStore();
export const loadSpine = () => {
  const id = "40103";
  const app = new PIXI.Application({
        
  });
    document.getElementById("spine_layer")!.appendChild(app.view);
    spine.SpineParser.registerLoaderPlugin();
    app.loader.add(`${id}`, `${configStore.getSpineFileUrl}/${id}.skel`);
    app.loader.load((_, resource) => {
      const iroha = new spine.Spine(resource[id].spineData!);
      iroha.x = app.screen.width / 2;
      iroha.y = app.screen.height;
      iroha.scale.set(0.5);
      iroha.state.setAnimation(0, "breath", true);
      app.stage.addChild(iroha);
    }
    );    
};