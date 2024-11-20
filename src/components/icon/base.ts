import BaseComponent from "../../base_component";

export default class BaseIcon extends BaseComponent {
  public static tagName = "lt-base-icon";
  public useLink: boolean;
  public viewBox: string;
  public constructor() {
    super();
    this.useLink = false;
    this.viewBox = "0 0 1024 1024";
  }

  connectedCallback() {
    this.loadStyle(["icon"]);
    this.render();
  }

  render() {
    console.log("render");
    const $svg = this.createEl("svg");
    const useLink = this.getAttr("useLink", this.useLink);
    const viewBox = this.getAttr("viewBox", this.viewBox);
    $svg.classList.add("lt-icon");
    $svg.setAttribute("viewBox", !useLink ? viewBox : "");
    const $children = this.renderChildren();
    if (typeof $children === "string") {
      if ($children === "") {
        // svg节点不适用于 slot
        const $children = this.children;
        const childrenStr: string[] = [];
        for (let i = 0, len = $children.length; i < len; i++) {
          const $child = $children[i];
          childrenStr.push($child.outerHTML);
          $svg.appendChild($child);
        }
        $svg.innerHTML = childrenStr.join("");
      } else {
        $svg.innerHTML = $children;
      }
    } else {
      $svg.append($children);
    }
    this.shadow.appendChild($svg);
  }

  renderChildren() {
    return "";
  }

  createEl(tagName: string) {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
  }
}