import { Controller } from "stimulus";
import "../lib/openpgp";
import { parseKeys, encryptText, decryptText, loadKeys } from "../model/crypto";

export default class extends Controller {
  static targets = ["content"];

  async connect() {
    this.keys = await loadKeys();
    console.log(this.keys);
    window.keys = this.keys;
    this.contentTarget.innerText = await decryptText(
      this.data.get("content"),
      this.keys
    );
  }
}
