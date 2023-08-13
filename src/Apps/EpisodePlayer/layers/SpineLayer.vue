<template>
    <n-button :on-click="loadSpine">加载Spine</n-button>
    <div id="spine_layer">Spine Layer</div>
</template>
<script setup lang="ts">
import { NButton } from "naive-ui";
import { useConfigStore } from "../../../store/config";
import * as Phaser from "phaser"
import * as spine from "@esotericsoftware/spine-phaser";
const configStore = useConfigStore();
const loadSpine = () => {
    const id = "40103";
    class SpineDemo extends Phaser.Scene {
        preload() {
            this.load.spineBinary("spineboy-data", `${configStore.cdn}/CharacterStands/${id}.skel`);
            this.load.spineAtlas("spineboy-atlas", `${configStore.cdn}/CharacterStands/${id}.atlas`);
        }

        create() {
            const spineboy = this.add.spine(400, 500, 'spineboy-data', "spineboy-atlas");        
            spineboy.scale = 0.5;
            spineboy.animationState.setAnimation(0, "breath", true);
        }
    }

    const config = {    
        width: 800,
        height: 600,
        type: Phaser.WEBGL,
        scene: [SpineDemo],
        plugins: {
            scene: [
                { key: "spine.SpinePlugin", plugin: spine.SpinePlugin, mapping: "spine" }
            ]
        }
    };

    new Phaser.Game(config);
}
</script>
<style scoped lang="scss"></style>
