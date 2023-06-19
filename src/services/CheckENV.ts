import {IIpcConnectionArgs, IJobResults} from "../types/interfaces";
import {submitJcl} from "./SubmitJcl";

export class CheckENV {

  public async run(connectionArgs: IIpcConnectionArgs) {
    const jcl = `${connectionArgs.jobStatement}
//SETPR2    EXEC PGM=BPXBATCH,REGION=0M
//STDOUT DD SYSOUT=*
//STDPARM      DD *
sh set -x;
echo $JAVA_HOME;
echo $NODE_HOME;
/* `

    const resp: IJobResults = await submitJcl(connectionArgs, jcl, ["STDOUT", "STDERR"]);
    // REVIEW: Need to find better parsing option
    if (resp.rc === 0 && resp.jobOutput && resp.jobOutput["3"]) {
      return {status: true, details: resp.jobOutput["3"]};
    } else {
      return {status: false, details: `${resp.rc}: ${resp.jobOutput}`};
    }
  }
}
