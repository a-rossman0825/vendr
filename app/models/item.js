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
    this.bought = false;
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
          <div class="row mt-2 px-2 py-1 bg-dark rounded text-center card-label">
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

  /*get itemInDoorHTMLTemplate() {
    return `
      <img src="${}" alt="${}" style="width:70px; z-index: 1; transform: translateY(28px) rotate(30deg); height: 90px; object-fit: cover; object-position: top;">
    `
  }*/
}