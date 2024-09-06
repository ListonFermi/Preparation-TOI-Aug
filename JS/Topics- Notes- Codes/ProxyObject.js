const obj = { name: "sanooj", age: 23 };

const obj2 = new Proxy(obj, {
  get(target, property) {
    if (target[property] === "sanooj") {
      return "HEuyyyyy";
    }

    if (property in target) {
      return target[property] + "heheh";
    } else {
      return "property ey illada dubukku";
    }
  },
});

console.log(obj2.name);

console.log("name" in obj);
