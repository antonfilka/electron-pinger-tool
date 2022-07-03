const remote = window.require("electron").remote;
const electronFs = remote.require("fs");

export function fsWorker() {
  return electronFs.readdirSync() || "123";
}
