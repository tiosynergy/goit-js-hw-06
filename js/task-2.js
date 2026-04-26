class Storage {
  #items = [];

  constructor(items){
    this.#items = items || [];
  }

    getItems() {
      return this.#items;
    }

    addItem(newItem) {
      this.#itemsitems.push(newItem);
      return this.#itemsitems;
    }

    removeItem(itemToRemove) {
    let index;
    while ((index = this.items.indexOf(itemToRemove)) !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]