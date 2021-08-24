const handleLocalStorage = (name, handleState) => {
  let party = JSON.parse(localStorage.getItem("party-member")) || [];
  const index = party.indexOf(name);

  if (index !== -1) {
    party.splice(index, 1);
    handleState();
  } else if(party.length <= 5) {
    party.push(name);
    handleState();
  } else{
    return console.log("Your party can only contain six members.");
  }
  localStorage.setItem("party-member", JSON.stringify(party));
};

export default handleLocalStorage;
