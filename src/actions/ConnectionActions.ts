import { FTPConnection, CLIConnection } from './ConnectionHandler'

export class ConnectionActions {
  mode: any;
  strategy: any;

  constructor() {
    this.mode = 'ftp'; // REVIEW: get from storage when picking strategy?
    this.strategy = this.getStartegy();
  }

  setMode(mode: string) {
    this.mode = mode;
  }

  getStartegy(): any {
    switch (this.mode) {
      case 'ftp':
        return new FTPConnection();
      case 'cli':
        return new CLIConnection();
      default:
        throw new Error('Invalid connection type');
    }
  }

  checkConnectionData(config: any) {
    return this.strategy.checkConnectionData(config);
  }

  saveConnectionData(config: any) {
    return this.strategy.saveConnectionData(config);
  }

  saveJobStatement(jobStatement: any) {
    return this.strategy.saveJobStatement(jobStatement);
  }
}
