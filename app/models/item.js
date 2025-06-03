// export class Example {
//   constructor(message) {
//     this.message = message
//   }
// }

export class Item {
  constructor(item) {
    this.name = item.name;
    this.image = item.image;
    this.price = item.price.toFixed(2);
  }

  get itemCardHTMLTemplate() {
    return `
      <div class="col-md-3 mt-4">
        <div class="rounded text-dark">
          <div class="row justify-content-center">
            <img
              src="${this.image}"
              class="rounded col-12 card-image"
              alt="bag of chips"/>
          </div>
          <div class="row justify-content-center justify-content-lg-around">
            <div class="col-4 col-md-8 text-light ms-1 mt-2">
              <div class="row text-start">
                <small class="col-12">${this.name}</small>
              </div>
              <div class="row">
                <small class="col-12 ">$${this.price}</small>
              </div>
            </div>
            <button class="col-2 col-md-3 mt-3 rounded bg-success text-light"><small>Buy</small></button>
          </div>
        </div>
      </div>
    `;
  }
}