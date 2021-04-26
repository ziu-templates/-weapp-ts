/**
 * package.json元数据
 */

module.exports = {

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A weapp(微信小程序) project with ziu',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    tab: {
      type: 'confirm',
      message: 'Use Tab?',
    },
    gitCommitMsg: {
      type: 'confirm',
      message: 'Use commitlint to check commit message?(Angular Commit Message)',
    },
    performance: {
      type: 'confirm',
      message: 'Use Picture Compression/CHANGELOG to your project?',
    },
    img: {
      when: 'performance',
      type: 'confirm',
      message: 'Use Picture Compression?',
    },
    changelog: {
      when: 'performance',
      type: 'confirm',
      message: 'Use CHANGELOG?',
    },
  },
  filters: {
    'src/assets/imgs/tab.png': 'tab',
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'scripts/lib/webpack/loaders/eslintLoader.js': 'lint',
    'commitlint.config.js': 'gitCommitMsg',
    '.huskyrc': 'gitCommitMsg',
  }
};