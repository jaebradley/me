const childProcess = require('child_process');
const path = require('path');
const chalk = require('chalk');

let exitCode = 0;

const toError = (stdout) => {
  const error = stdout.toString('utf8');
  if (error.length > 0) {
    console.log(error);
    exitCode = 1;
  }
};

const getChangedFiles = () => {
  let changedFiles = null;

  try {
    const str = childProcess.execSync('git diff --cached --name-only | grep \'.js$\'').toString('utf8');
    changedFiles = str.split(/(\r?\n)/g).filter(line => !(line === '\n' || line === '\r' || line.length < 1));
  } catch (e) {
    toError(e.stdout);
  }

  return changedFiles;
};

const lintFiles = (files) => {
  const ignoredFiles = ['.eslintrc.js', 'webpack.config.dev.js', 'webpack.config.prod.js', 'webpackDevServer.config.js', 'env.js'];
  if (files) {
    files.forEach((file) => {
      if (path.extname(file) !== '.js' || ignoredFiles.includes(path.basename(file))) {
        return;
      }
      try {
        const projectRootArr = __dirname.split('/');
        projectRootArr.pop();
        const projectRoot = projectRootArr.join('/');
        childProcess.execSync(`${path.join(projectRoot, 'node_modules/.bin/eslint')} --max-warnings 0 -c ${path.join(projectRoot, '.eslintrc.js')} --color --no-ignore ${file}`).toString('utf8');
      } catch (e) {
        toError(e.stdout);
      }
    });
  }
};

const changedFiles = getChangedFiles();
lintFiles(changedFiles);

if (exitCode === 0) {
  console.log('\n\n\n', chalk.bold.green('Commit Succeeded!'));
}

process.exit(exitCode);
