// Smoothie Class
class Smoothie {
    constructor(size, fruits, extras, sweetener) {
        this.size = size;
        this.fruits = fruits;
        this.extras = extras;
        this.sweetener = sweetener;
    }

    getDescription() {
        return `Your ${this.size} smoothie contains: ${this.fruits.join(', ')} with extras like ${this.extras.join(', ')} and sweetened with ${this.sweetener}.`;
    }

    getPrice() {
        let price = 5; // base price
        if (this.size === 'medium') price += 2;
        if (this.size === 'large') price += 4;

        price += this.fruits.length * 1; // $1 per fruit
        if (this.extras.includes('protein')) price += 2;
        if (this.extras.includes('oats')) price += 1;

        return price;
    }
}

// Function to place order
function placeOrder() {
    const size = document.getElementById("size").value;
    const fruits = [];
    const extras = [];
    const sweetener = document.getElementById("sweetener").value;

    document.querySelectorAll('input[name="fruits"]:checked').forEach((checkbox) => {
        fruits.push(checkbox.value);
    });

    document.querySelectorAll('input[name="extras"]:checked').forEach((checkbox) => {
        extras.push(checkbox.value);
    });

    const smoothie = new Smoothie(size, fruits, extras, sweetener);
    const details = document.getElementById("smoothieDetails");
    details.innerHTML = `
        <h2>Your Order:</h2>
        <p>${smoothie.getDescription()}</p>
        <p>Total Price: $${smoothie.getPrice()}</p>
    `;
}
