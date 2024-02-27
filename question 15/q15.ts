//changing guest list: you just heard that one of your guest can't make the dinner so you need to send out a new set of invitation you'll have to think of someone else to invite start with your program from exercise 14 add a print statement at the end of your program starting at the name of the guest who can't make it with the name of the name of the new person you are inviting print a second set of the new person you are inviting print a second set of invitation messages one for each person who is still in your list

let guestarr: string[] = ['noor', 'ayesha', 'sehrish', 'rabia', 'tabasum'];
let cannotAttend: string = 'noor';
console.log(cannotAttend +' ' + "can't make it")
let newMember: string= 'awais';
guestarr[guestarr.indexOf(cannotAttend)]=newMember;
console.log(guestarr)