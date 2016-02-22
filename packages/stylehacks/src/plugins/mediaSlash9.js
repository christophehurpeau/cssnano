import plugin from '../plugin';

let targets = ['ie 5.5', 'ie 6', 'ie 7'];

export default plugin(targets, ['atrule'], function (rule) {
    const params = rule.params.trim();
    if (params === 'screen\\9') {
        this.push(rule, `Bad media query: ${params}`);
    }
});
