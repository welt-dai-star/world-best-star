# Episode
关于剧情的详细内容参考[这里](../lib/types/scenario.ts)
## 剧情编号（文件名）猜测
剧情文件名由7位数字组成，除去最开始的1000000和1000001以外，大致按照以下规律组成。

以1 04 01 20（电姬主线第一章第20话）为例：

- <b>1</b> 代表主线，相对的最新的活动剧情编号为2000101（活动编号规律暂不清楚）
- <b>04</b> 代表剧团电姬，01为天狼星，02为eden，03为银河座
- <b>01</b> 代表第一章，天狼星第二章为1010201
- <b>20</b> 代表第20话

## EpisodeUnit
Episode的最小单位, `Episode == EpisodeUnit[]`

### EpisodeUnit接口

```javascript
export interface EpisodeUnit {
    // 以下为unit的基本属性
    // id相关内容
    id: number; // 每个unit的唯一标识 == episodeMasterId + groupOrder（三位数含前导零）
    episodeMasterId: number; // 所属的episode的id
    order: number; // 暂时未知
    groupOrder: number; // 所属的group的order
    // 剧本内容
    speakerName: string; // 发言人
    fontSize: "Middle"; // 字体大小，目前只有Middle
    phrase: string; // 剧本内容
    // 以下为unit的扩展属性，可以为空
    // 背景相关
    backgroundCharacterImageFileName?: string; // 背景角色图片文件名
    backgroundImageFileName?: string; // 背景图片文件名
    backgroundImageFileFadeType?: number; // 背景图片淡入淡出方式
    fadeValue1?: number;
    fadeValue2?: number;
    fadeValue3?: number;
    // 声音相关
    bgmFileName?: string; // 背景音乐文件名
    seFileName?: string; // 音效文件名
    windowEffect?: 1; // 窗口效果
    sceneCameraMasterId?: number; // 未知内容
    voiceFileName?: string; // 语音文件名
    // 角色相关
    characterMotions: CharacterMotion[]; // 角色动作
    speakerIconId?: string; // 发言人头像编号
}
```
### CharacterMotion接口
```javascript
export interface CharacterMotion {
    slotNumber: number; // 角色编号
    facialExpressionMasterId?: number; // 表情编号
    headMotionMasterId?: number; // 头部动作编号
    headDirectionMasterId?: number; // 头部方向编号
    bodyMotionMasterId?: number; // 身体动作编号
    lipSyncMasterId?: number; // 唇形同步编号
    spineId: number; // spine编号
    characterAppearanceType: number; // 角色出现方式
    characterPosition: "Center" | "InnerLeft" | "InnerRight"; // 角色位置
    characterLayerType: "Layer1"; // 角色层级
    spineSize: "Middle"; // spine大小
}
```
