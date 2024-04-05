// Exercise 1
/*   Banking System
(X)The CheckingAccount will also have an overdraftLimit property. Override the withdraw method to 
first check if there is enough (+ overdraftLimit) before withdrawing.
*/


// Account Class with Deposit & Withdrawal: 
class Account{
    constructor(accountNumber, currentBalance, owner){
        this.accountNumber = accountNumber,
        this.currentBalance = currentBalance,
        this.owner = owner
    } 

    deposit(depositAmount){
        this.depositAmount = depositAmount
        this.currentBalance += this.depositAmount
        return console.log(`Your new balance is $${this.currentBalance}.`)
    }

    withdraw(withdrawAmount){
        this.withdrawAmount = withdrawAmount
        if (this.withdrawAmount < this.currentBalance){
            this.currentBalance -= this.withdrawAmount
            console.log(`You have withdrawn $${this.withdrawAmount} and now have a remaining balance of $${this.currentBalance}.`)
        } else {
            return console.log('You do not have sufficient funds.')
        }
    }
}

/* Test Code: 
let lexieacc = new Account(1, 5.00, 'lexie')
lexieacc.deposit(75.00);
console.log(lexieacc.currentBalance)
lexieacc.withdraw(75.00);
lexieacc.withdraw(80) */

// Checking Account (child) with overdraftLimit property
    // for example, if overdraftLimit = $30, then they can withdraw currentBalance + 30 
class CheckingAccount extends Account{
    constructor(accountNumber, currentBalance, owner, overdraftLimit){
        super(accountNumber, currentBalance, owner);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(withdrawAmount){
        this.withdrawAmount = withdrawAmount;
        if (withdrawAmount < this.overdraftLimit + this.currentBalance){
            this.currentBalance -= withdrawAmount
            console.log(`You have withdrawn $${this.withdrawAmount} and now have a remaining balance of $${this.currentBalance}.`)
        } else {
            return console.log('You are trying to withdraw more than your balance and overdraft limit.')
        };
    };
};

/* Test Code:
let janechecking = new CheckingAccount(2, 100, 'Jane', 30);
janechecking.deposit(100); 
console.log(janechecking.currentBalance) // 200
janechecking.withdraw(250)
*/

// Savings Account (child) with interestRate
class SavingsAccount extends Account{
    constructor(accountNumber, currentBalance, owner){
        super(accountNumber, currentBalance, owner);
    }

    addInterest(interestRate){
        this.interestRate = interestRate
        let newBalance = this.currentBalance*interestRate + this.currentBalance
        return console.log(`Your new balance is ${newBalance}.`)
    }
}


const checkingAccount = new CheckingAccount('123456', 1000, 'John Doe', 500);
const savingsAccount = new SavingsAccount('654321', 5000, 'Jane Smith', 2);

checkingAccount.deposit(500); // Your new balance is $1500
checkingAccount.withdraw(1400); // You have withdrawn $1400 and now have a reminaing balance of $100
checkingAccount.withdraw(200); // You have withdrawn $200 and now have a reminaing balance of $-100

savingsAccount.deposit(1000); // Your new balance is $6000
savingsAccount.withdraw(7000); // You do not have sufficient funds.
savingsAccount.addInterest(.15); // Your new balance is $6900.



console.clear()
// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}

function printMovieInfo(movieName){
    getMovieInfo(movieName)
        .then(movie => {
            console.log(`${movie.title} directed by ${movie.director}. A story about ${movie.description} that runs for ${movie.runtime} minutes.`)}
        )
        .catch(movie => console.warn(`${movie.title} cannot be accessed because it is too short.`))
};


// Example 1
printMovieInfo('Indiana Jones and the Dark Knight')
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
printMovieInfo('ET')
// Output: *Warning* ET cannot be accessed because it it too short



// *BONUS CHALLENGE*
// Exercise 3
// Add a Button somewhere on your index.html page with an id "backgroundChanger"
// Add a click event listener to your button that will change the background color of the body

document.getElementById('backgroundChanger').addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;
    document.body.style.backgroundColor = curColour === 'red' ? 'blue' : 'red';
});

// The background should toggle between at least 2 colors




