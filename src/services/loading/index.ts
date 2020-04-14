import { Loading as ElLoading } from 'element-ui';
import { ElLoadingComponent } from 'element-ui/types/loading';

import { IconOption, LoadingOption } from '../../typing';
import { isPlainObject } from '../../helper/utils';

interface LoadingService {
  service: (options: LoadingOption) => ElLoadingComponent;
}

const Loading: LoadingService = {
  service(options: LoadingOption): ElLoadingComponent {
    const { spinner, ...others } = options;

    let resolvedSpinner: string;

    if (isPlainObject(spinner)) {
      const { type, provider } = spinner as IconOption;

      resolvedSpinner = provider === 'el' ? `el-icon-${type}` : `iconfont icon${type}`;
    } else {
      resolvedSpinner = `iconfont icon${spinner}`;
    }

    return ElLoading.service({
      ...others,
      spinner: resolvedSpinner,
    });
  },
};

export { Loading };
