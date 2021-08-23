const handleLocalStorage = (name) => {
    let party = JSON.parse(localStorage.getItem('party-member')) || [];
    party.push(name);
    localStorage.setItem('party-member', JSON.stringify(party))   
}

export default handleLocalStorage