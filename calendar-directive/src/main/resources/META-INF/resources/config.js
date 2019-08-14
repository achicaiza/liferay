Loader.addModule({
    name: 'dsg-calendar',
    dependencies: ['external.libs', 'calendarUtils'],
    anonymous: false,
    path: MODULE_PATH + '/dsg-calendar'
});
Loader.addModule({
    name: 'calendarUtils',
    dependencies: [],
    anonymous: false,
    path: MODULE_PATH + '/calendar-utils'
});
