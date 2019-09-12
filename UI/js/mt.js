/* Query selector */
let MtSelect = element => {
  return document.querySelector(element);
};
/* Get an element value */
let MtVal = element => {
  return MtSelect(element).value;
};

/* Set a style(css) to an element */
const MtStyle = (element, property, value) => {
  element.style.setProperty(property, value);
};

/* Hide an element */
const MtHide = element => {
  MtStyle(element, "display", "none");
};

/* Show an element */
const MtShow = (element, value = "block") => {
  MtStyle(element, "display", value);
};

/* Toast - For notification */
class ToastMt {
  constructor() {
    this.MtIni();
    this.toast = MtSelect(".toast");
  }
  MtIni() {
    MtSelect("body").innerHTML += `
            <div class="toast" class="fine-shadow flex-between">
                <span class="toast-body"></span>
            </div>
        `;
  }
  MtShow(message) {
    if (message != undefined) {
      MtSelect(".toast-body").textContent = message;
      MtStyle(this.toast, "bottom", "30px");
    }

    /* Dismissing the toast */
    setTimeout(() => {
      this.MtDismiss();
    }, 2500);
  }
  MtDismiss() {
    MtStyle(this.toast, "bottom", "-80px");
  }
}
/** Validator methhod  */
class Validation {
  constrcutor() {}

  MtValid(inputType, value) {
    if (inputType == undefined || value == undefined) {
      return false;
    }

    const purified = value
      .toString()
      .toLowerCase()
      .trim();
    let water;

    switch (inputType) {
      case "name": {
        water = /^[a-zA-Z'-]{2,30}$/;
        break;
      }
      case "number": {
        water = /^-{0,1}\d+$/;
        break;
      }
      case "email": {
        water = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        break;
      }
      /*Allowed formats (123) 456-7890 , (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 - Tested*/
      case "phone": {
        water = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        break;
      }
      case "url": {
        return false;
      }
      default: {
        return false;
      }
    }

    return water.test(purified);
  }
}
