function convertToCamelCase(kebabCase: string): string {
  return kebabCase
    .split('-')
    .map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
}

function getComponentName(moduleName: string, prefix: string = 'Kokiri'): string {
  return `${prefix}${convertToCamelCase(moduleName)}`;
}

export { getComponentName };

export * from '@ntks/toolbox';

export * from './dom';
export * from './component';
