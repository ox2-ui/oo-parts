Package.describe({
  name: 'ox2:parts',
  summary: 'Variuos component style parts',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.15'
    ]);
  api.addFiles('lib/oo-color-variables.import.less', C);
  api.addFiles('lib/oo-header.less', C);
  api.addFiles('lib/oo-item.less', C);
  api.addFiles('lib/oo-position.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:buttons');
  api.addFiles('tests/oo-parts-tests.js');
});
