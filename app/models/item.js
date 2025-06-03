// export class Example {
//   constructor(message) {
//     this.message = message
//   }
// }

export class item {
  constructor(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
  }

  get itemCardHTMLTemplate() {
    return `
    <div class="col-4">
        <div class="card">
          <div class="card-body text-dark">
            <div class="row justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1741520149946-d2e652514b5a?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="img-fluid rounded-top col-12"
                alt="bag of chips"
              />
            </div>
            <div class="row">
              <div class="col-8">
                <small class="col-6 text-start">Classic Lays Chips</small>
                <small>$5.00</small>
              </div>
              <button class="col-4 mt-3"><small>Buy</small></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}