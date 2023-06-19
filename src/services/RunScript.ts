import {IIpcConnectionArgs, IJobResults} from "../types/interfaces";
import {submitJcl} from "./SubmitJcl";

export class Script {

  public async run(config: IIpcConnectionArgs, script: string) {

    const jcl = `${config.jobStatement}
//RUNSCRP EXEC PGM=BPXBATCH,REGION=0M
//STDOUT DD SYSOUT=*
//STDERR DD SYSOUT=*
//STDPARM  DD *
sh set -x;
${script};
echo "Script finished."
/* `
    console.log(`JOB: ${jcl}`)
    const resp: IJobResults = await submitJcl(config, jcl, ["STDOUT", "STDERR"])

    return resp
  }
}
