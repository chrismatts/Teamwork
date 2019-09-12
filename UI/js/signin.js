class Signin extends Validation {
  constructor() {
    super();
    this.validate();
  }

  /* process */
  process(email, passcode) {
    document.location.assign("../html/post.html");
  }

  validate() {
    const email = MtVal(".email");
    const passcode = MtVal(".passcode");
    let isValid = true;

    if (!this.MtValid("email", email)) {
      MtSelect(".email-disp-error").textContent = "Invalid email address";
      isValid = false;
    } else {
      MtSelect(".email-disp-error").textContent = "";
    }

    if (passcode.toString().length < 6) {
      MtSelect(".passcode-disp-error").textContent =
        "Password should have 6 caracters or more";
      isValid = false;
    } else {
      MtSelect(".passcode-disp-error").textContent = "";
    }

    if (isValid == true) {
      this.process(email, passcode);
    }
  }
}
