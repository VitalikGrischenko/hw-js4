const email = "example@gmail.com";
const atSymbolIndex = email.indexOf("@");

if (atSymbolIndex > -1) {
  console.log(`The email address ${email} is valid, and it contains ${email.length} characters.`);
} else {
  console.log(`The email address ${email} is not valid, as it does not contain an @ symbol.`);
}