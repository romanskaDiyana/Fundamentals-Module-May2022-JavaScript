function triangle(number){
    function printTriangle(number){

        let row = [];

        for (let i = 1; i <= number; i++) {
            row.push(number);
            
        }
        
        return row.join(" ");
    }
    
    for (let i = 1; i <= number; i++) {
        console.log(printTriangle(i));
        
    }
}