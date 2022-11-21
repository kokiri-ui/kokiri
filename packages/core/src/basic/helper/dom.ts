import { includes } from '@ntks/toolbox';

function addClassNames(el: HTMLElement | null, classNames: (string | undefined)[]): void {
  if (!el) {
    return;
  }

  const existsClassNames = el.className ? el.className.split(' ') : [];

  classNames.forEach(className => {
    if (className && !includes(className, existsClassNames)) {
      existsClassNames.push(className);
    }
  });

  el.className = existsClassNames.join(' ');
}

function removeClassNames(el: HTMLElement | null, classNames: (string | undefined)[]): void {
  if (!el) {
    return;
  }

  el.className = el.className
    .split(' ')
    .filter(className => !includes(className, classNames))
    .join(' ');
}

function getComputedStyle($el: HTMLElement, rule: string): any {
  return window.getComputedStyle($el)[rule];
}

function getDocumentOffset($el: HTMLElement): { top: number; left: number } {
  const $parent = $el.parentElement as HTMLElement;
  const { offsetTop, offsetLeft, scrollTop } = $el;
  const computedTop = offsetTop - scrollTop;

  if (getComputedStyle($parent, 'position') === 'static') {
    return {
      top: computedTop,
      left: offsetLeft,
    };
  }

  const parentOffset = getDocumentOffset($parent);

  return {
    top: computedTop + parentOffset.top,
    left: offsetLeft + parentOffset.left,
  };
}

export { addClassNames, removeClassNames, getComputedStyle, getDocumentOffset };
