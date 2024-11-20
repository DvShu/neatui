import BaseIcon from "./base";

export default class ArrowDown extends BaseIcon {
  public static tagName = "lt-arrow-down-icon";

  connectedCallback() {
    super.connectedCallback();
    this.useLink = true;
    this.viewBox = "0 0 1024 1024";
  }

  renderChildren() {
    return '<path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>';
  }
}
