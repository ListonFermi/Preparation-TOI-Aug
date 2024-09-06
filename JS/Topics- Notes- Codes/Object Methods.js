const object1 = {};

Object.defineProperty(object1, "key1", {
  value: "value1",
  writable: false,
});

console.log(object1.key1);
object1.key1 = 2; //won't be assigned because writable is set to false
console.log(object1.key1);
