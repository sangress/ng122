const _ = require('lodash');
const fs = require('fs');

let ng122Map = {
    'ng-if': '*ngIf',
    'ng-class': '[ngClass]',
    'ng-click': '(click)',
    '$ctrl.': ''
}
let path = _.get(process, 'argv[2]', null);
console.log('path', path);
let fileContent = fs.readFileSync(path, {}).toString();
// let newFileContent = _.replace(fileContent, /ng-if/g, '*ngIf');
// console.log('fileContent', newFileContent);

// let newFileContent = fileContent;
_.forIn(ng122Map, (ng2prop, ng1Prop) => {
    let regex = new RegExp(ng1Prop, 'g');
    fileContent = _.replace(fileContent, regex, ng2prop);
});

fs.writeFile(path, fileContent, err => {
    if (err) {
        return console.log(err);
    }
    console.log('file is now in ng2 style!');
});

// console.log('fileContent', fileContent);
