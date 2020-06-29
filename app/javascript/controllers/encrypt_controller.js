import { Controller } from "stimulus";
import "../lib/openpgp";
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
    console.log(this.inputTarget.value, encrypted);
    this.outputTarget.value = encrypted;
  }
}
