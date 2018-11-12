import { difference, toPairs } from "ramda";

export default (obj1, obj2) => difference(toPairs(obj1), toPairs(obj2));