import { ConnectionStore } from "../storage/ConnectionStore";
import { connectFTPServer } from "../services/utils";
import { IIpcConnectionArgs, IResponse } from '../types/interfaces';

class Connection {
  // config: any;

  // constructor() {
  //   this.config = ConnectionStore.getAll();
  // }
}

export class FTPConnection extends Connection {
  
  async checkConnectionData(config: any): Promise<IResponse> {
    let response: IResponse = {
      status: false,
      details: ""
    };
    try {
      const client = await connectFTPServer(config);
      response.status = client.connected;
    } catch (e) {
      console.warn(e);
      if (e instanceof Error) {
        response.details = e.message;
      }
    }
    if (response.status) {
      this.saveConnectionData(config);
    }
    return response;
  }

  saveConnectionData(args: IIpcConnectionArgs): IResponse {
    const details = Object.keys(args).reduce((acc: string, k: keyof IIpcConnectionArgs) => {
      const value = args[k].toString();
      const status = ConnectionStore.set(`ftp-details.${k}`, value);
      return acc + status ? '' : `\n Can't set ftp-details.${k}, check the store schema`;
    }, "");
  return {status: true, details}
  }

  saveJobStatement(jobStatement: string): IResponse {
    const status = ConnectionStore.set("ftp-details.jobStatement", jobStatement);
    return {status, details: ''};
  }

}

export class CLIConnection extends Connection {

  async checkConnectionData(config: any): Promise<IResponse> {
    throw new Error('CLIConnection is not implemented');
  }

  saveConnectionData(config: any) {
    throw new Error('CLIConnection is not implemented');
  }

}