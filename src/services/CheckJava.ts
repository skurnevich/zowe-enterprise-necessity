import {IIpcConnectionArgs, IJobResults} from "../types/interfaces";
import {submitJcl} from "./SubmitJcl";

export class CheckJava {

  public async run(config: IIpcConnectionArgs, java: string) {

    const jcl = `${config.jobStatement}
//SETPR2    EXEC PGM=BPXBATCH,REGION=0M
//STDOUT DD SYSOUT=*
//STDPARM      DD *
sh set -x;
${java}/bin/java -version;
echo "Script finished."
/* `

    const resp: IJobResults = await submitJcl(config, jcl, ["STDOUT", "STDERR"])
    /* java: FSUM7351 not found or IBM SDK for Java Technology Edition is not V8 or later */
    // return resp.jobOutput
    if (resp.rc === 0 && resp.jobOutput && resp.jobOutput["3"]) {
      return {status: true, details: resp.jobOutput["3"]};
    } else {
      return {status: false, details: `${resp.rc}: ${resp.jobOutput}`};
    }
  }
}
