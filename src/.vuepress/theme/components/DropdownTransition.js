export default {
  name: "DropdownTransition",

  methods: {
    setHeight(items) {
      // explicitly set height so that it can be transitioned
      items.style.height = items.scrollHeight + "px";
    },

    unsetHeight(items) {
      items.style.height = "";
    },
  },
};
