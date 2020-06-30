import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter (Senator => Senator.party === "Republican")
}

export const democrats = () => {
  return Senators.filter (Senator => Senator.party === "Democrat")
}

export const independents = () => {
  return Senators.filter (Senator => Senator.party === "Independent")
}

export const males = () => {
  return Senators.filter (Senator => Senator.person.gender_label === "Male")
}

export const females = () => {
  return Senators.filter (Senator => Senator.person.gender_label === "Female")
}

export const byState = (state = 'UT') => {
  return Senators.filter (Senator => Senator.state === state)
}

export const mapping = () => {
  return Senators.map (Senator => {
    const senatorObj = {};
      senatorObj.firstName = Senator.person.firstname;
      senatorObj.lastName = Senator.person.lastname;
      senatorObj.party = Senator.party;
      senatorObj.gender = Senator.person.gender;
  
      return senatorObj;
  });
}

export const reducedCount = () => {
  return Senators.reduce((tally, senator) => {
    if (senator.party === "Republican"){
       tally.republican++;
    } else if (senator.party === "Democrat"){
       tally.democrat++;
    } else  {tally.independent++;}

    return tally;
  }, {republican: 0,democrat: 0,independent: 0});
}



