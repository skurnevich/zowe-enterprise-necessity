export interface IJobResults {
  rc: number,
  jobOutput: JobOutput
}

export type JobOutput = {
  [key: string]: string;
};

export interface IIpcConnectionArgs {
  host: string; 
  port?: number; 
  connectionType?: 'ftp' | 'sftp' | 'zosmf'; 
  user: string; 
  password: string;
  jobStatement: string;
}

// TODO: Add some structure to res.details to highlight proper input field
export interface IResponse {
  status: boolean;
  details: any;
}

