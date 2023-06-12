console.log("any string");
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let p=1;

for (let i=0 ; i< pronoun.length ; i++){
    console.log(pronoun[i] + adj[i] + noun [i] + '.com')
    console.log (pronoun[i] + adj[i] + noun [p] + '.com');
    console.log (pronoun[i]+adj[p]+noun[i]+'.com');
    console.log (pronoun[i]+adj[p]+ noun[p]+ '.com');
    p--
    }

   


