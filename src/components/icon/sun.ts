import BaseIcon from "./base";

export default class Sun extends BaseIcon {
  public static baseName = "sun-icon";

  constructor() {
    super();
    this.viewBox = "0 0 24 24";
  }

  renderChildren() {
    return '<path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 4c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zM12 24c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zM5.6 6.6c-.3 0-.5-.1-.7-.3L3.5 4.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4-.1.2-.4.3-.7.3zM19.8 20.8c-.3 0-.5-.1-.7-.3l-1.4-1.4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3zM3 13H1c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM23 13h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM4.2 20.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-1.4 1.4c-.2.2-.4.3-.7.3zM18.4 6.6c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-1.4 1.4c-.2.2-.5.3-.7.3z"></path>';
  }
}