let people = [
  {
    firstName: "Patryk",
    email: "kontakt@patys.pl"
  },
  {
    firstName: "Tomek",
    email: "kontakt@tomek.pl"
  }
]

let [, Tomek] = people;

function logEmail({email}) {
  console.log(email);
}

logEmail(Tomek);
