function clone(target) {
  if (typeof target === 'object') {
    // let cloneTarget = {};
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },

  field4: [2, 4, 8],
};

console.log(clone(target))