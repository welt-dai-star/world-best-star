# 关于`characterMotion`属性的解释
每次读取一个新的`characterMotions`时会对其中的`characterMotion`进行遍历，根据其中`slotNumber`的不同对`slot`对象进行操作

## `slotNumber`
可以理解为`index`，如果前一`characterMotion`存在的`slot`在此没有，则直接清除该`slot`

## `facialExpressionMasterId`
spine里面有三部分相关内容`cheek`，`eye`和`eyeblow`，猜测是状态压缩
```
关于具体数值对应的表情还没有确定，不过"0"应该对应"normal"，需要根据演出或者其他内容再次确定
```
### `cheek`
- blue （恐惧）
- lethargy （黑化脸）
- normal
- redness
- shock
### `eye`
`type`和`type_blink`为一组，`close`除外
- angry
- angry_blink
- close
- happy
- happy_blink
- normal
- normal_blink
- sad
- sad_blink
- shock
- shock_blink
- unique
- unique_blink
### `eyebrow`
- fall
- normal
- rise
- shock
## `headMotionMasterId`
- nod
- nod2
- nod3
- normal
- shake
- shake2
- shake3
## `headDirectionMasterId`
- downward
- leftward
- rightward
- tilt_left（左歪头）
- tilt_right （右歪头）
- upward
## `bodyMotionMasterId`
- amazement
- angry
- happy
- normal
- sad
- shy
- think
- unique...(应该很多，女仆iroha/40106有21个unique)
total: 7 + unique
## `lipSyncMasterId`
- angry
- angry_anime
- happy
- happy_anime
- normal
- normal_anime
- sad
- sad_anime
- unique
## `spineId`
spine编号，如果为`0`则只播放动作不替换spine

编号方式和剧情类似，比如女仆iroha/40106表示：
- **4** 代表剧团电姬
- **01** 代表iroha
- **06** 代表第6套服装
## `characterAppearanceType`
角色出现方式
### `Type == 0`
直接出现
## `characterPosition`
角色位置，目前有`Center`，`InnerLeft`和`InnerRight`三种
## `characterLayerType`
目前似乎都是在`Layer1`
## `spineSize`
spine大小，目前都是`Middle`