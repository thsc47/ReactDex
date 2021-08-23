const handleLocalStorage = (name) => {
  let party = JSON.parse(localStorage.getItem("party-member")) || [];
  const index = party.indexOf(name);
  if (index !== -1) {
    party.splice(index, 1);
  } else {
    party.push(name);
  }
  localStorage.setItem("party-member", JSON.stringify(party));
};

export default handleLocalStorage;
