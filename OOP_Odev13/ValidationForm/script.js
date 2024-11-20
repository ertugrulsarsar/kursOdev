//Rule class
class Rule {
  constructor(name, errorText, validationFunction) {
    this.name = name;
    this.errorText = errorText;
    this.validationFunction = validationFunction;
  }

  isValid(value) {
    return this.validationFunction(value);
  }
}

//Logger Class
class ConsoleLoger {
  log(errorText) {
    console.error(errorText);
  }
}

class AlertLogger {
  log(errorText) {
    alert(errorText);
  }
}

class DomLogger {
  constructor(outputElementId) {
    this.outputElement = document.getElementById(outputElementId);
  }

  log(errorText) {
    const errorElement = document.createElement("div");
    errorElement.textContent = errorText;
    this.outputElement.appendChild(errorElement);
  }
  clear(){
    this.outputElement.innerHTML = ""
  }
}

//Validator Class
class Validator {
  constructor(logger, rules) {
    this.logger = logger;
    this.rules = rules;
  }

  validate(form) {
    let isValid = true;

    this.rules.forEach((rule) => {
      const field = form.elements[rule.name];
      if (!rule.isValid(field.value)) {
        isValid = false;
        this.logger.log(rule.errorText);
      }
    });
    return isValid;
  }
}

//Processor Class
class Processor {
  constructor(validator, successCallback) {
    this.validator = validator;
    this.successCallback = successCallback;
  }

  attach(formSelector) {
    const form = document.querySelector(formSelector);
    form.onsubmit = (event) => {
      event.preventDefault();
      this.validator.logger.clear();

      if (this.validator.validate(form)) {
        this.successCallback(form);
      }
    };
  }
}

//Rules
const rules = [
  new Rule(
    "username",
    "Kullanıcı adı 5-15 karakter uzunluğunda olmalı ve yalnızca harflerden oluşmalı.",
    (value) => /^[a-zA-Z]{5,15}$/.test(value)
  ),
  new Rule(
    "birthYear",
    "Doğum yılı 1900 ile günümüz arasında olmalu",
    (value) => value >= 1900 && value <= new Date().getFullYear()
  ),
  new Rule("eyeColor", "Göz rengi seçilmelidir.", (value) => value !== ""),
  new Rule("hairColor", "Saç rengi seçilmelidir.", (value) => value !== ""),
  new Rule(
    "height",
    "Boy 0 ile 2.60 metre arasında olmalı.",
    (value) => value > 0 && value <= 2.6
  ),
  new Rule(
    "weight",
    "Ağırlık 0 ile 300 kg arasında olmalıdır.",
    (value) => value > 0 && value <= 300
  )
];

//Loggers

const logger = new DomLogger("output");

//Validator

const validator = new Validator(logger, rules);

//Success Callback
function onSuccess(form) {
//   const form = event.target;
  const formData = new FormData(form);
  const output = document.getElementById("output");
  output.innerHTML = "";

  const resultDiv = document.createElement("div");
  resultDiv.style.marginTop = "20px";
  resultDiv.style.border = "1px solid #ccc";
  resultDiv.style.padding = "10px";
  resultDiv.style.backgroundColor = "#f9f9f9";

  const title = document.createElement("h3");
  title.textContent = "Gönderilen Data";
  resultDiv.appendChild(title);

  formData.forEach((value, key) => {
    const dataDiv = document.createElement("p");
    dataDiv.textContent = `${key}: ${value}`;
    resultDiv.appendChild(dataDiv);
  });
  output.innerHTML = "";
  output.appendChild(resultDiv);
  form.reset();
}

//Processor
const processor = new Processor(validator, onSuccess);
processor.attach("#userForm");
