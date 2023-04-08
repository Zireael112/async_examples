export class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const bufferArray = new Uint16Array(this.buffer);
    let outputString = '';
    for (let i = 0; i < bufferArray.length; i += 1) {
      outputString += String.fromCharCode(bufferArray[i]);
    }
    return outputString;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
