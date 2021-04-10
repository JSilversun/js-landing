import Vue from "vue";
import { humanizeDuration } from "@/utils/date";

Vue.prototype.$filters = {
  humanizeDuration,
};
