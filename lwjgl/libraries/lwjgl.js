var r = await fetch('/cheerpj/lwjgl/libraries/liblwjgl.so');
var buf = await r.arrayBuffer();
export default {
	wasmModule: buf
};
