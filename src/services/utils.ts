import {IIpcConnectionArgs} from "../types/interfaces";
const zos = require('zos-node-accessor');

export async function connectFTPServer(config: IIpcConnectionArgs): Promise<any> {

  const client = new zos();
  await client.connect(config);
  if (!client.connected) {
    console.error('Failed to connect to', config.host);
  }
  return client;
}

export async function checkDirExists(config: IIpcConnectionArgs, dir: string): Promise<any> {
  const client = await connectFTPServer(config);
  try {
    const list = await client.listDataset(dir);
    return !!list;
  } catch (error) {
    return false;
  } finally {
    client.close();
  }
}

export async function makeDir(config: IIpcConnectionArgs, dir: string): Promise<any> {
  const client = await connectFTPServer(config);
  try {
    await client.makeDirectory(dir);
    return true;
  } catch (error) {
    return false;
  } finally {
    client.close();
  }
}
