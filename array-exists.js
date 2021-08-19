function megaFriend(friends) {
    //Error handle for bad input without array
    if (Array.isArray(friends) == false) {
        return "please provide an array";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

if (friends.indexOf('lion') != -1) {
    // console.log('Lion Exist');
}
if (friends.includes('lion') == true) {
    console.log('Lion exists using includes')
}
//concat
const firsts = [1, 2, 3];
const seconds = [4, 5, 6, 7];
const combined = firsts.concat(seconds);
console.log(combined);
