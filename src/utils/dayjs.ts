import originalDayJs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

originalDayJs.extend(duration);
originalDayJs.extend(relativeTime);

export const dayjs = originalDayJs;
