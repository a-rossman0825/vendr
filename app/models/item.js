// export class Example {
//   constructor(message) {
//     this.message = message
//   }
// }

export class Item {
  constructor(item) {
    this.name = item.name;
    this.id = item.id;
    this.image = item.image;
    this.price = item.price;
  }

  get itemCardHTMLTemplate() {
    return `
      <div class="col-md-3 mt-4">
        <div class="rounded text-dark">
          <div class="row justify-content-center">
            <img
              src="${this.image}"
              class="rounded col-12 card-image"
              alt="a picture of ${this.name}"/>
          </div>
          <div class="row mt-2 px-2 py-1 bg-dark rounded text-center label">
            <div class="fw-bold fs-6">${this.name}</div>
            <div class="row d-flex justify-content-between px-1">
              <small>ID: ${this.id}</small>
              <small>💵$${this.price.toFixed(2)}</small>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}