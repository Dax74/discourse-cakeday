export default Discourse.Route.extend({
  queryParams: {
    month: { refreshModel: true }
  },

  refreshQueryWithoutTransition: true,

  beforeModel() {
    if (!this.siteSettings.cakeday_birthday_enabled) {
      this.transitionTo("unknown", window.location.pathname.replace(/^\//, ''));
    }
  },

  model(params) {
    return this.store.find("birthday", params);
  },

  titleToken() {
    return I18n.t("birthdays.title");
  }
});
