export function encode<T>(data: T): Uint8Array {
  return new TextEncoder().encode(JSON.stringify(data) + "\0");
}

// if (!ptr) throw new Error("tried to decode null ptr: " + ptr);
// deno-lint-ignore no-explicit-any
export function decode<T>(
  ptr: NonNullable<Deno.PointerValue>, /*Deno.PointerObject*/
): T {
  // ptr is a cstring
  const cstr = new Deno.UnsafePointerView(ptr).getCString();
  return JSON.parse(cstr);
}
