function convertToCamelCase(kebabCase: string): string {
  return kebabCase
    .split('-')
    .map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
}

function getComponentName(moduleName: string): string {
  return `PetalsViewUi${convertToCamelCase(moduleName)}`;
}

export { getComponentName };
