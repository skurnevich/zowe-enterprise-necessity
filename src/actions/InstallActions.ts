import { IIpcConnectionArgs, IResponse } from '../types/interfaces';
import { FTPInstallation, CLIInstallation } from './InstallationHandler';

export class InstallActions {
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
        return new FTPInstallation();
      case 'cli':
        return new CLIInstallation();
      default:
        throw new Error('Invalid type');
    }
  }

  runInstallation (
    connectionArgs: IIpcConnectionArgs, 
    installationArgs: {installationDir: string}, 
    version: string): Promise<IResponse> {
    return this.strategy.runInstallation(connectionArgs, installationArgs, version);
  }
}