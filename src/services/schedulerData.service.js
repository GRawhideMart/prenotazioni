//import http from "../http-common";
/*const qs = require("qs");baseURL: "",
headers: {
  "Content-Type": "application/www-formurlencoded",
},*/

const _send = async function (action, data) {
  try {
    let sendData = new FormData();
    Object.keys(data).forEach((key) => sendData.append(key, data[key]));

    const response = await fetch(
      `https://membri.poliradio.it/api/calendario/index.php?action=${action}&resource=room-${data.room}`,
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
        return { data: await response.json() };
        break;
      default:
        throw `Unhandled Code ${response.status}`;
    }
  } catch (e) {
    console.log(e);
    alert("Something Broke :(");
  }

  /*try {
    const response = await http.post(
      `?action=${action}&resource=room-${data.room}`,
      qs.stringify(data)
    );

    console.log(response);
  } catch (e) {
    if (e.response) {
      alert(e.response.status);
    } else {
      alert(JSON.stringify(e));
    }
  }*/
};

const getAll = async () => {
  const ROOMS = ["studio1", "studio2"];
  let toReturn = [];

  for (let i = 0; i < ROOMS.length; i++) {
    let room = ROOMS[i];
    await _send("list", { room })
      .then((data) => data.data)
      .then((data) =>
        data.map((item) => ({
          ...item,
          room: parseInt(room.replace("studio", "")),
        }))
      )
      .then((data) => toReturn.push(...data));
  }

  console.log(toReturn);
  return { data: toReturn };
  // ROOMS.forEach(room => )
  // let tmp = await Promise.all(ROOMS.map((room) => _send("list", { room })));

  // tmp.reduce((acc, item) => [...acc, ...item]).map(item => item.data).map(item => {room})
  // console.log(
  //   ROOMS.map(async (room) =>
  //     (await _send("list", { room })).data.map((item) => ({ room, ...item }))
  //   )
  // );
  // ROOMS.map(async (room) =>
  //   (await _send("list", { room })).data.map((item) => ({ room, ...item }))
  // ).reduce((acc, item) => [...acc, ...item], []);
  // return { data: toReturn };
};

const create = (data) => {
  return _send("add", data);
};

// const remove = (id) => {
//   return _send(http.delete, "add", data);
//   return http.delete(`/schedulerData/${id}`);
// };

// const update = (id, data) => {
//   return http.patch(`/schedulerData/${id}`, data);
// };

// , remove, update

const SchedulerDataService = { getAll, create };
export default SchedulerDataService;
