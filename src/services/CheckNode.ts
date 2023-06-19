import {IIpcConnectionArgs, IJobResults} from "../types/interfaces";
import {submitJcl} from "./SubmitJcl";

export class CheckNode {

  public async run(config: IIpcConnectionArgs, node: string) {

    const jcl = `${config.jobStatement}
//SETPR4    EXEC PGM=BPXBATCH,REGION=0M
//STDOUT DD SYSOUT=*
//STDPARM      DD *
sh set -x;
${node}/bin/node -v;
echo "Script finished."
/* `

    const resp: IJobResults = await submitJcl(config, jcl, ["STDOUT", "STDERR"])
    /* node: FSUM7351 not found
    /* check version is lower then 8.x */
    if (resp.rc === 0 && resp.jobOutput && resp.jobOutput["3"]) {
      return {status: true, details: resp.jobOutput["3"]};
    } else {
      return {status: false, details: `${resp.rc}: ${resp.jobOutput}`};
    }
  }
}
