class SchedulerApi {
  static _istances = {};
  _ref = null;
  _unsubscribeCb = null;

  constructor(resource, cb) {
    console.log(resource);
    if (!SchedulerApi._istances[resource]) {
      SchedulerApi._istances[resource] = new _SchedulerApi(resource);
    }
    this._ref = SchedulerApi._istances[resource];
    this._unsubscribeCb = this._ref.subscribe(cb);
  }

  destroy() {
    this._unsubscribeCb();
  }

  create(data) {
    this._ref.create("add", data);
  }

  cancel(id) {
    this._ref.create("add", { id });
  }
  accept(id) {
    this._ref.create("add", { id });
  }
  reject(id) {
    this._ref.create("add", { id });
  }
}

export default SchedulerApi;

class _SchedulerApi {
  _data = [];
  _cbs = [];
  _resource = "";
  _refreshCb = null;

  constructor(resource) {
    this._resource = resource;
    this._refreshCb = setInterval((_) => this._refreshData(), 15000);
    this._refreshData();
  }

  subscribe(cb) {
    const _cb = (data) =>
      cb(data.filter((item) => item.resource == this._resource));
    this._cbs.push(_cb);
    return (_) => this._cbs.filter((item) => item != _cb);
  }

  destroy() {
    clearInterval(this._refreshCb);
  }

  create(data) {
    this._send("add", data);
    this._refreshData();
  }

  cancel(id) {
    this._send("add", { id });
    this._refreshData();
  }
  accept(id) {
    this._send("add", { id });
    this._refreshData();
  }
  reject(id) {
    this._send("add", { id });
    this._refreshData();
  }

  _refreshData() {
    this._send("list", {}).then((data) => {
      this._data = data;
      this._cb([...this._data]);
    });
  }

  _send = async (action, data) => {
    try {
      let sendData = new FormData();
      Object.keys(data).forEach((key) => sendData.append(key, data[key]));

      const response = await fetch(
        `https://membri.poliradio.it/api/calendario/index.php?action=${action}&resource=${this._resource}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: sendData,
          credentials: "include",
        }
      );

      switch (response.status) {
        case 401:
          window.location.replace("http://localhost:3000/_login");
          alert("Please Login");
          break;
        case 403:
          alert("Permission Denied");
          break;
        case 200:
          return await response.json();
        default:
          throw `Unhandled Code ${response.status}`;
      }
    } catch (e) {
      console.log(e);
      alert("Something Broke :(. Please reload the page");
    }
  };
}
