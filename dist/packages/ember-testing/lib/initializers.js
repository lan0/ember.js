import { onLoad } from '@ember/application';
let name = 'deferReadiness in `testing` mode';
onLoad('Ember.Application', function (Application) {
  if (!Application.initializers[name]) {
    Application.initializer({
      name: name,

      initialize(application) {
        if (application.testing) {
          application.deferReadiness();
        }
      }

    });
  }
});