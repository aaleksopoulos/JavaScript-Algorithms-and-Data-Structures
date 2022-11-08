function checkCashRegister(price, cash, cid) {
    //set the return object
    let change = {
        status : NaN,
        change : NaN
    };

    // an array to calculate - in cents - how much each item in the drawer is worthy
    const slot_worth = [  
                    ["PENNY", 1], 
                    ["NICKEL", 5], 
                    ["DIME", 10], 
                    ["QUARTER", 25], 
                    ["ONE", 100], 
                    ["FIVE", 500], 
                    ["TEN", 1000], 
                    ["TWENTY", 2000], 
                    ["ONE HUNDRED", 10000]];

    //calculate cash in drawer in cents
    let cash_in_drawer = cid.reduce((acc, coin) => {
        return acc + coin[1]*100
    }, 0);
   
    let dif = (cash-price)*100; // calculate how much we have to payback, in cents
    //1st case, don't have enough money in the drawer
    if (dif>cash_in_drawer){
        change.status = "INSUFFICIENT_FUNDS";
        change.change = []
    }
    //2nd case, we have just enough money
    else if (dif===cash_in_drawer){
        change.status = "CLOSED";
        change.change = cid
    }
    //last case, we have more money than needed
    else{
        change.status = "OPEN";
        let change_array = []; //placeholder for the returning object

        for (let i=cid.length-1; i>=0; i--){

            if (slot_worth[i][1]<=dif){ //we need to find the largest amount smaller than the one to give back
                let s = []; //placeholder to use for the change array

                let number_of_coins_needed = parseInt(dif/slot_worth[i][1]);
                let number_of_coins_in_register = (cid[i][1]*100)/slot_worth[i][1];

                // console.log('difference : ', dif);
                // console.log('coin : ',  cid[i][0]);
                // console.log('coin value : ', slot_worth[i][1]);
                // console.log('in register : ', cid[i][1]);
                // console.log('number of coins needed :', number_of_coins_needed);
                // console.log('number of coins in register :', number_of_coins_in_register); 
                //the easy case , we have more than enough money to give back
                if (number_of_coins_in_register>=number_of_coins_needed){
                    dif -= number_of_coins_needed*slot_worth[i][1];
                    s = [slot_worth[i][0], number_of_coins_needed*slot_worth[i][1]/100];
                }
                //we give back as much as we can
                else{
                    dif -= number_of_coins_in_register*slot_worth[i][1];
                    s = [slot_worth[i][0], number_of_coins_in_register*slot_worth[i][1]/100];
                }
                change_array.push(s); //we push the current change in the change array before moving to the next case
            }
        }
        //in case we cannot give back the requested change
        if (dif!==0) {
            change.status = "INSUFFICIENT_FUNDS";
            change.change = []
            return change;
        }
        change.change = change_array;
    }

    return change;
  }
  
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));