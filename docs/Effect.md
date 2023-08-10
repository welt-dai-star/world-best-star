# 关于EpisodeUnit中部分属性的解释

## `phrase`
使用`/n`而不是`\\n`代替换行

## `backgroundImageFileFadeType`
假设原图片为A，新图片为B
### `Type == 1`
A图层根据`value1`淡出，下侧图层为黑色，持续时间与`value2`相关，之后B图层根据`value3`淡入
### `Type == 4`
A图层在B之上，A淡出，B始终不透明，仅有`value1`一个参数

## `characterMotions`
详见[characterMotion](./CharacterMotion.md)

## `speakerIconId`
三位数，由`组织序号 + 0 + 个人序号`组成，体现在dialog里面

e.g. `大黑`的编号为`202`，`潘达`的编号为`104`
