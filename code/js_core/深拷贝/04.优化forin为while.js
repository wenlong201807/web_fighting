function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target);
    let cloneTarget = isArray ? [] : {};
    if (map.get(target)) {
      return target;
    }

    map.set(target, cloneTarget);
    const keys = isArray ? undefined : Object.keys(target);

    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value;
      }
      cloneTarget[key] = clone2(target[key], map);
    });

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

  f: {
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } },
  },
};

target.target = target;

console.time();
const result2 = clone(target);
console.timeEnd();
