// 参考资料 https://www.yuque.com/docs/share/75b3ca8c-3fe1-4acd-a6b2-b681a1611f6b

// 1、基于Promise的锁实现
// 考虑在单进程单线程下的锁实现，基于下面的代码片段实现 LockService 类


class LockService {
  async lockByKey (key) {
  }
}

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


async function process (key) {
  // 同一个key会被锁住，不同的key不受影响
  let locker = await lockService.lockByKey(key)
  console.log('get locker', key)
  try {
    // 停留1s
    await delay(1000)
  } finally {
    console.log('end locker', key)
    locker.release()
  }
}

process('key1')
process('key1')
process('key2')

// get locker key1
// get locker key2
// 1s后
// end locker key1
// end locker key2
// get locker key1
// 1s后
// end locker key1