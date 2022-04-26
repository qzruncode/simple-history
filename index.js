const SimpleHistory = {
  id: 0,
  listens: {},
  listen(cb) {
    const cb_id = `listen_${SimpleHistory.id++}`;
    SimpleHistory.listens[cb_id] = cb;
    return cb_id;
  },
  unlisten(id)  {
    if(id && SimpleHistory.listens[id] !== undefined) {
      delete SimpleHistory.listens[id];
    }
  },
  callListen(type) {
    Object.values(SimpleHistory.listens).forEach(cb => cb(type, {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
      state: Object.assign({}, history.state),
    }))
  },
  push(url, state) {
    try {
      history.pushState(state, "", url);
    } catch {
      location.assign(url);
    }

    SimpleHistory.callListen('push');
  },
  replace(url, state) {
    history.replaceState(state, '', url);
    SimpleHistory.callListen('replace');
  },
  go(num) {
    history.go(num);
  },
  back() { SimpleHistory.go(-1); },
  forward() { SimpleHistory.go(1); },
};

export default SimpleHistory;

