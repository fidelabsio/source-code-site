// @react-pdf/renderer's renderToBuffer() is not safe to call concurrently
// within one Node process — it shares internal layout state across calls,
// and two overlapping renders (e.g. two webhook deliveries for the same
// order arriving close together) corrupt each other's element tree and throw
// a generic "Objects are not valid as a React child" (React error #31).
// This queues every renderToBuffer call so only one runs at a time.
let queue: Promise<unknown> = Promise.resolve();

export function serializePdfRender<T>(render: () => Promise<T>): Promise<T> {
  const result = queue.then(render, render);
  queue = result.then(
    () => undefined,
    () => undefined
  );
  return result;
}
