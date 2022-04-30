const SimpleHistory = {
  id: 0,
  listens: {},
  listen(cb) {
    debugger;
    const cb_id = `listen_${SimpleHistory.id++}`;
    SimpleHistory.listens[cb_id] = cb;
    return cb_id;
  },
  unlisten(id)  {
    if(id && SimpleHistory.listens[id] !== undefined) {
      delete SimpleHistory.listens[id];
    }
  },
  callListen(type, preUrl) {
    Object.values(SimpleHistory.listens).forEach(cb => cb(type, preUrl, {
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      state: Object.assign({}, history.state),
    }))
  },
  push(url, state) {
    const preUrl = window.location.pathname;
    try {
      history.pushState(state, "", url);
    } catch {
      window.location.assign(url);
    }

    SimpleHistory.callListen('push', preUrl);
  },
  replace(url, state) {
    const preUrl = window.location.pathname;
    history.replaceState(state, '', url);
    SimpleHistory.callListen('replace', preUrl);
  },
  go(num) {
    history.go(num);
  },
  back() { SimpleHistory.go(-1); },
  forward() { SimpleHistory.go(1); },
};

export default SimpleHistory;

