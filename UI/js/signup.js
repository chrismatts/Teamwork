class Signup extends Validation {
  constructor() {
    super();
    this.validate();
  }

  /* process */
  process(email, passcode) {
    document.location.assign("../html/signin.html");
  }

  validate() {
    const firstName = MtVal(".firstName");
    const lastName = MtVal(".lastName");
    const email = MtVal(".email");
    const phone = MtVal(".phone");
    const passcode = MtVal(".password");
    const confirmPasscode = MtVal(".confirmPassword");

    let isValid = true;

    if (firstName == "") {
      MtSelect(".firstname-disp-error").textContent =
        "Please provide your firstname";
      isValid = false;
    } else {
      MtSelect(".firstname-disp-error").textContent = "";
    }

    if (lastName == "") {
      MtSelect(".lastname-disp-error").textContent =
        "Please provide your lastname";
      isValid = false;
    } else {
      MtSelect(".lastname-disp-error").textContent = "";
    }

    if (!this.MtValid("email", email)) {
      MtSelect(".email-disp-error").textContent = "Invalid email address";
      isValid = false;
    } else {
      MtSelect(".email-disp-error").textContent = "";
    }

    if (!this.MtValid("phone", phone)) {
      MtSelect(".phone-disp-error").textContent = "Invalid phone number";
      isValid = false;
    } else {
      MtSelect(".phone-disp-error").textContent = "";
    }

    if (passcode.length < 6) {
      MtSelect(".password-disp-error").textContent =
        "Password should have 6 caracters or more";
      isValid = false;
    } else {
      MtSelect(".password-disp-error").textContent = "";
    }

    if (passcode != confirmPasscode) {
      MtSelect(".confirmPassword-disp-error").textContent =
        "Password does not match";
      isValid = false;
    } else {
      MtSelect(".confirmPassword-disp-error").textContent = "";
    }

    if (isValid == true) {
      this.process(email, passcode);
    }
  }
}
