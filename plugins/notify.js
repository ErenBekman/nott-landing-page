import Vue from "vue";
import Notifications from "vue-notification";

let self = Vue.use(Notifications, { name: "notify" });

export default function ({}, inject) {
  inject("notify", (params) => {
    params.duration = params.duration ?? 7000;
    self.notify(params);
  });
}