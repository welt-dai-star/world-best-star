

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
    spineSize: string; // spine大小
}

/**
 * @file common.ts 公共类型定义
 */
/**
 * @interface EpisodeUnit 剧本unit类型
 */
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
    // 以下为自定义翻译内容，源文件没有
    translationCHS?: string; // 中文翻译
    translationCHT?: string; // 繁体翻译
    translationENG?: string; // 英文翻译
    translationJPN?: string; // 日文翻译
    translationKOR?: string; // 韩文翻译
    // 以下为翻译者相关
    translater?: string; // 翻译者
    checker?: string; // 校对者
    checked?: boolean; // 是否已校对
    // 以下为unit的扩展属性，可以为空，脚本原有内容
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