//totalunique//
const statsTotalUnique = (ArrayObj) => {
  const statsTotal = ArrayObj.length;
  const statsUnique = new Set(ArrayObj.map((element) => element.href));
  console.log(statsUnique);
  const stats = `total : ${statsTotal} \n Unique: ${statsUnique.size}`;

  return stats;
};

//stats broken//
const linkbroken = (ArrayObj) => {
  const linksBroken = ArrayObj.filter((element) => element.status >= 400);
  const statslinksBroken = `Total Broken: ${linksBroken.length}`;

  return statslinksBroken;
};

module.exports = {
  statsTotalUnique,
  linkbroken,
};
