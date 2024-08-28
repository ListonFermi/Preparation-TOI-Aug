#### process.nextTick()

Every time the event loop takes a full trip, we call it a tick.
When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts

```
process.nextTick(() => {
  // do something
});
```

#### Piping in Node js:

Piping in Node.js is a method used to connect a readable stream to a writable stream, allowing data to flow automatically from the source to the destination.

```
readableStream.pipe(writableStream);
```


*/