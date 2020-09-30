// 参考 上海-吕小慧

function compare(a, b) {
  const Mapping = {
    "alpha": 1,
    "beta": 2,
    "rc": 3,
    "undefined": 4
  };

  let regExp = new RegExp("(?<major>([0-9])+)\.(?<minor>([0-9])+)\.(?<patch>([0-9])+)(\-(?<miniPatch>alpha|beta|rc))?(\.(?<number>([0-9])+))*")

  try {
    let xGroup = regExp.exec(a).groups;
    let yGroup = regExp.exec(b).groups;

    return 
      xGroup.major - yGroup.major ||
      xGroup.minor - yGroup.minor ||
      xGroup.patch - yGroup.patch ||
      Mapping[xGroup.miniPatch] - Mapping[yGroup.miniPatch] ||
      (xGroup.number || 0) - (yGroup.number || 0);

  } catch (e) {
    throw new Error("错误的正则表达式" + e)
  }

}