import { Controller } from "stimulus";
import { generateKey, registerKey } from "../model/crypto";

export default class extends Controller {
  static targets = ["privateKey", "publicKey"];

  async generate(event) {
    event.preventDefault();
    const key = await generateKey();
    this.privateKeyTarget.value = key.privateKeyArmored;
    this.publicKeyTarget.value = key.publicKeyArmored;
  }

  async register() {
    const key = this.privateKeyTarget.value;
    if (key) {
      await registerKey(key);
    }
  }
}
