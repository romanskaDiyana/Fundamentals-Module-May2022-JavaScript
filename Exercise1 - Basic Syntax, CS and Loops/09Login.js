function login(sequence){
    const user = sequence.shift(); //take first element from array from sequence for username;
    const password = user.split("").reverse().join(""); //reverse username for getting the password;

    let tries = 0;

    for(const element of sequence){
        if (element !== password) {

            tries += 1;
            if (tries >= 4) {
                console.log(`User ${user} blocked!`);
                break;
                
            } else {
                console.log("Incorrect password. Try again.");

            }
            
        } else {
            console.log(`User ${user} logged in.`)
        }

    }
}