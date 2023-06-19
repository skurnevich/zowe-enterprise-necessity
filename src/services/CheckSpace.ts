import {IIpcConnectionArgs, IJobResults} from "../types/interfaces";
import {submitJcl} from "./SubmitJcl";

export class CheckSpace {

  public async run(config: IIpcConnectionArgs, dir: string) {

    const jcl = `${config.jobStatement}
//SETPR6    EXEC PGM=BPXBATCH,REGION=0M
//STDOUT DD SYSOUT=*
//STDPARM      DD *
sh set -x;
echo "SPACE in MB";
df -m ${dir};
echo "Script finished."
/* `

    const resp: IJobResults = await submitJcl(config, jcl, ["STDOUT", "STDERR"])
    /* find ${install} and parse then the rest by two(2x) space? */
    if (resp.rc === 0 && resp.jobOutput && resp.jobOutput["3"]) {
      return {status: true, details: resp.jobOutput["3"]};
    } else {
      return {status: false, details: `${resp.rc}: ${resp.jobOutput}`};
    }
  }
}
