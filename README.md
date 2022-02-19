[![NPM version](https://img.shields.io/npm/v/simple-history.svg)](https://www.npmjs.com/package/simple-history)
[![NPM package](https://img.shields.io/npm/dy/simple-history.svg)](https://www.npmjs.com/package/simple-history)

## simple-history

```
import SimpleHistory from 'simple-history'

const id = SimpleHistory.listen((action, location) => {
  console.log(action, location)
})

SimpleHistory.unlisten(id)

SimpleHistory.push(url, state)

SimpleHistory.replace(url, state)

SimpleHistory.go(n)

SimpleHistory.back()

SimpleHistory.forward()
```