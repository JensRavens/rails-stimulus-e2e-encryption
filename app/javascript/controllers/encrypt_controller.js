import { Controller } from "stimulus";
import { parseKeys } from "../model/crypto";

export default class extends Controller {
  static targets = ["input", "output"];

  async connect() {
    const plainKeys = JSON.parse(this.data.get("keys"));
    this.keys = await parseKeys(plainKeys);
  }

  async encrypt() {
    const message = openpgp.message.fromText(this.inputTarget.value);
    const { data: encrypted } = await openpgp.encrypt({
      message,
      publicKeys: this.keys,
    });
    this.outputTarget.value = encrypted;
  }
}
