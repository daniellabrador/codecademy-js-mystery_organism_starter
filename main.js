// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum,dna) => {
  return {
    specimenNum, dna,
    mutate(){
      const specimenStrand = this.dna;
      const indexBase = Math.floor(Math.random()*15)
      
      let mutation = returnRandBase();
      while(mutation === specimenStrand[indexBase]){
        mutation = returnRandBase();
      };

      // Mutate
      specimenStrand[indexBase] = mutation;
      return this.dna;
    },
    compareDNA(species){
      let identicalBase = 0;
      for(let i=0;i<15;i++){
        if (this.dna[i]===species.dna[i]){identicalBase++}
        console.log(`${this.dna[i]} vs. ${species.dna[i]}`)
      }
      console.log(identicalBase)

      return `Specimen #1 and specimen #2 have ${Math.round((identicalBase/15)*100)}% DNA in common`
    },
    willLikelySurvive(){
      let cg = 0;
      for(let i=0;i<15;i++){
        if (this.dna[i]==='C'||this.dna[i]==='G'){cg++}
      }
      console.log(cg/15)
      return cg/15>=0.6? true:false;
    },
    get complementStrand(){
      const pairStrand = [];
      for (let i=0; i<15; i++){
        switch(this.dna[i]){
          case 'A':
            pairStrand.push('T');
            break;
          case 'T':
            pairStrand.push('A');
            break;
          case 'G':
            pairStrand.push('C');
            break;
          case 'C':
            pairStrand.push('G');
            break;
        }
      }
      return pairStrand;
    }
  };
};

const specimenA = pAequorFactory(1,mockUpStrand());
const specimenB = pAequorFactory(2,mockUpStrand());
const specimenC = pAequorFactory(3,mockUpStrand());
const specimenD = pAequorFactory(4,mockUpStrand());
const specimenE = pAequorFactory(5,mockUpStrand());
const specimenF = pAequorFactory(6,mockUpStrand());
const specimenG = pAequorFactory(7,mockUpStrand());
const specimenH = pAequorFactory(8,mockUpStrand());
const specimenI = pAequorFactory(9,mockUpStrand());
const specimenJ = pAequorFactory(10,mockUpStrand());
const specimenK = pAequorFactory(11,mockUpStrand());
const specimenL = pAequorFactory(12,mockUpStrand());
const specimenM = pAequorFactory(13,mockUpStrand());
const specimenN = pAequorFactory(14,mockUpStrand());
const specimenO = pAequorFactory(15,mockUpStrand());
const specimenP = pAequorFactory(16,mockUpStrand());
const specimenQ = pAequorFactory(17,mockUpStrand());
const specimenR = pAequorFactory(18,mockUpStrand());
const specimenS = pAequorFactory(19,mockUpStrand());
const specimenT = pAequorFactory(20,mockUpStrand());
const specimenU = pAequorFactory(21,mockUpStrand());
const specimenV = pAequorFactory(22,mockUpStrand());
const specimenW = pAequorFactory(23,mockUpStrand());
const specimenX = pAequorFactory(24,mockUpStrand());
const specimenY = pAequorFactory(25,mockUpStrand());
const specimenZ = pAequorFactory(26,mockUpStrand());
const specimenAA = pAequorFactory(27,mockUpStrand());
const specimenAB = pAequorFactory(28,mockUpStrand());
const specimenAC = pAequorFactory(29,mockUpStrand());
const specimenAD = pAequorFactory(30,mockUpStrand());

const pAequorFamily = [specimenA, specimenB, specimenC, specimenD, specimenE, specimenF, specimenG, specimenH, specimenI, specimenJ, specimenK, specimenL, specimenM, specimenN, specimenO, specimenP, specimenQ, specimenR, specimenS, specimenT, specimenU, specimenV, specimenW, specimenX, specimenW, specimenZ, specimenAA, specimenAB, specimenAC, specimenAD]

/*/console.log(specimenA.dna);
console.log(specimenB.dna);
console.log(specimenA.compareDNA(dog))
/*/
console.log(specimenA.willLikelySurvive());
console.log(specimenA.dna);
console.log(specimenA.complementStrand);

function mostRelated (){
}