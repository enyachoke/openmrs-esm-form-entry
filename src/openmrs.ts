import { backendDependencies } from './openmrs-backend-dependencies';

const importTranslation = require.context(
  '../translations',
  false,
  /.json$/,
  'lazy'
);

function setupOpenMRS() {
  const moduleName = '@openmrs/esm-form-entry-app';

  return {
    extensions: [
      {
        id: 'form-widget',
        slot: 'form-widget-slot',
        load: () => import('./main.single-spa'),
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
