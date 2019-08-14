Loader.addModule({
    name: 'external.libs',
    dependencies: ["angular_1.6.9", "ui-bootstrap"],
    anonymous: false,
    path: MODULE_PATH + '/external.all'
});
Loader.addModule({
    name: 'angular_1.6.9',
    dependencies: [],
    anonymous: false,
    path: MODULE_PATH + '/angular/1.6.9/angular'
});

Loader.addModule({
    name: 'ui-bootstrap',
    dependencies: [],
    anonymous: false,
    path: MODULE_PATH + '/angular-ui-bootstrap/0.11.0/ui-bootstrap-tpls'
});
