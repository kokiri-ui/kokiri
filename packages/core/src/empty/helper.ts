import {
  setComponentConfig as _setComponentConfig,
  getComponentConfig as _getComponentConfig,
} from 'petals-ui/dist/basic';

function setComponentConfig(configKey: string, configValue: any): void {
  return _setComponentConfig('empty', configKey, configValue);
}

function getComponentConfig(configKey: string): any {
  return _getComponentConfig('empty', configKey);
}

export { setComponentConfig, getComponentConfig };
