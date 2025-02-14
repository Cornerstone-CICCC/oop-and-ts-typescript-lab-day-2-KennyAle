// 🦁 Class Decorator: Zoo Age Restriction
// 🎟️ Implement a class decorator that ensures only guests above a certain age can enter the zoo.
//
// 1. Create a decorator `AgeRestriction(minAge: number)` that modifies the constructor.
// 2. The decorator should throw an error if the guest is below the required age.
// 3. Implement a method `enterZoo` that returns a welcome message with the guest's name.

function AgeRestriction(minAge: number) {
  return function <T extends { new(...args: any[]): {} }>(target: T, context: ClassDecoratorContext) {
    return class extends target {
      constructor(...args: any[]) {
        const [name, age] = args
        if (age < minAge) {
          throw new Error(`🚫 Access Denied: ${name} is under ${minAge} and cannot enter the zoo!`);
        }
        super(...args)
      }
    };
  };
}

@AgeRestriction(12) // Minimum entry age
class ZooGuest {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  enterZoo(): string {
    return `🎟️ Welcome to the zoo, ${this.name}! Enjoy your visit.`
  }
}

// Test cases
const guest1 = new ZooGuest("Alice", 15); // Should allow entry
console.log(guest1.enterZoo()); // "🎟️ Welcome to the zoo, Alice! Enjoy your visit."

const guest2 = new ZooGuest("Bob", 10); // Should throw an error: "🚫 Access Denied: Bob is under 12 and cannot enter the zoo!"
