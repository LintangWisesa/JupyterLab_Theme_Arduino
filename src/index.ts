import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for lin26/JupyterLab_Arduino
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@lin26/JupyterLab_Arduino:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@lin26/JupyterLab_Arduino/index.css';

    manager.register({
      name: 'JupyterLab Arduino',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
