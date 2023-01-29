import { join, sep } from "node:path";

import initStoryshots, {
  snapshotWithOptions,
} from "@storybook/addon-storyshots";

/**
 * @see https://github.com/storybookjs/storybook/blob/main/addons/storyshots/storyshots-core/src/test-bodies.ts
 */
const multiSnapshotWithOptions = (options = {}) => {
  return ({ context, renderTree, stories2snapsConverter, story }) => {
    return snapshotWithOptions(options)({
      context,
      renderTree,
      snapshotFileName: join(
        ...stories2snapsConverter
          .getSnapshotFileName(context)
          .split(sep)
          .slice(1)
      ),
      story,
    });
  };
};

initStoryshots({ test: multiSnapshotWithOptions() });
