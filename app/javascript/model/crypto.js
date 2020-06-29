export async function parseKeys(plain_keys) {
  return await Promise.all(
    plain_keys.map((plain_key) =>
      openpgp.key.readArmored(plain_key).then((data) => data.keys[0])
    )
  );
}

export async function encryptText(text, keys) {
  const message = openpgp.message.fromText(text);
  const { data: encrypted } = await openpgp.encrypt({
    message,
    publicKeys: keys,
  });
  return encrypted;
}

export async function decryptText(text, keys) {
  const message = await openpgp.message.readArmored(text);
  const options = {
    message,
    privateKeys: keys,
  };
  const { data: decrypted } = await openpgp.decrypt(options);
  return decrypted;
}

let loadedKeys = null;
export async function loadKeys() {
  if (!loadedKeys) {
    const plainKeys = JSON.parse(localStorage.getItem("keys") || "[]");
    loadedKeys = parseKeys(plainKeys);
  }
  return loadedKeys;
}

export async function registerKey(plain) {
  const keys = JSON.parse(localStorage.getItem("keys") || "[]");
  keys.push(plain);
  localStorage.setItem("keys", JSON.stringify(keys));
}

export async function generateKey() {
  return await openpgp.generateKey({
    curve: "curve25519",
    userIds: [{ name: "Anonymous", email: "mail@example.com" }],
  });
}
