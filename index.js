const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const projectRoot = __dirname;

const proofhubJsonPath = path.join(projectRoot, 'proofhub.json');

if (!fs.existsSync(proofhubJsonPath)) {
  console.log('Initializing Proofhub...');
  const initScriptPath = path.join(projectRoot, 'bin', 'proofhub-init.sh');
  const initResult = spawnSync(initScriptPath, { stdio: 'inherit', shell: true });

  if (initResult.status !== 0) {
    console.error('Proofhub initialization failed.');
    process.exit(initResult.status);
  }
}

console.log('Running Proofhub Logging...');
const logScriptPath = path.join(projectRoot, 'bin', 'proofhub-log.sh');
const logResult = spawnSync(logScriptPath, { stdio: 'inherit', shell: true });

process.exit(logResult.status);
