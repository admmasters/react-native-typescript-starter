export function Timestamped(Base) {
    return class TimestampedInner extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = new Date();
        }
    };
}
class Animal {
    constructor() {
        console.log("Constructing Animal");
    }
}
export default Timestamped(Animal);
