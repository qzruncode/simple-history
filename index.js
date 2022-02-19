const SimpleHistory = {
  id: 0,
  listens: {},
  listen(cb) {
    const cb_id = `listen_${this.id++}`;
    this.listens[cb_id] = cb;
    return cb_id;
  },
  unlisten(id)  {
    if(id && this.listens[id] !== undefined) {
      console.log(1, this.listens)
      delete this.listens[id];
      console.log(2, this.listens)
    }
  },
  callListen(type) {
    Object.values(this.listens).forEach(cb => cb(type, {
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

    this.callListen('push');
  },
  replace(url, state) {
    history.replaceState(state, '', url);
    this.callListen('replace');
  },
  go(num) {
    history.go(num);
  },
  back() { this.go(-1); },
  forward() { this.go(1); },
};

export default SimpleHistory;

