import { Controller } from "stimulus";
import { decryptText, loadKeys } from "../model/crypto";

export default class extends Controller {
  static targets = ["content"];

  async connect() {
    this.keys = await loadKeys();
    this.contentTarget.innerText = await decryptText(
      this.data.get("content"),
      this.keys
    );
  }
}
