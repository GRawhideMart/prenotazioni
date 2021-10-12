class SchedulerApi {
  static _data = [];
  static _cbs = [];
  static _refreshCb = null;

  // constructor(resource) {
  //   this._resource = resource;
  //   //this._refreshCb = setInterval((_) => this._refreshData(), 15000);
  //   this._refreshData();
  // }

  static subscribe(cb) {
    if (this._refreshCb == null) {
      // this._refreshCb = setInterval(
      //   SchedulerApi._refreshData.bind(this),
      //   15000
      // );
    }
    this._cbs.push(cb);
    this._refreshData();
    return (_) => this._cbs.filter((item) => item != cb);
  }

  static create(data) {
    this._send("add", data);
  }

  static cancel(id) {
    this._send("add", { id });
  }
  static accept(id) {
    this._send("add", { id });
  }
  static reject(id) {
    this._send("add", { id });
  }

  static _refreshData() {
    this._send("list", {}).then((data) => {
      this._data = data.map((item) => ({
        ...item,
        startDate: new Date(parseInt(item.startDate * 1000)).toISOString(),
        endDate: new Date(parseInt(item.endDate * 1000)).toISOString(),
      }));
      this._cbs.forEach((cb) => cb([...this._data]));
    });
  }

  static _send = async (action, data) => {
    try {
      let sendData = new FormData();
      Object.keys(data)
        .filter((item) => item)
        .forEach((key) => sendData.append(key, data[key]));
      sendData.append("_JWT", window.localStorage.getItem("_JWT"));
      const response = await fetch(
        `https://membri.poliradio.it/api/calendario/index.php?action=${action}`,
        {
          method: "POST",
          body: sendData,
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

export default SchedulerApi;
