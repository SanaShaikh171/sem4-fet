    function startATM() {
      let balance = 500;
      let choice;
      do {
        choice = prompt("ATM MENU\n1. Check Balance\n2. Withdraw $100\n3. Exit");

        if (choice === "1") {
          alert("Current Balance: $" + balance);
        } 
        else if (choice === "2") {
          if (balance >= 100) {
            let withdrawn = 0;
            while (withdrawn < 100) {
              withdrawn += 20; 
              console.log("Dispensing... $" + withdrawn);
            }
            balance -= 100;
            alert("Success! New balance: $" + balance);
          } else {
            alert("Error: Insufficient funds!");
          }
        }
      } while (choice !== "3" && choice !== null);

      alert("Thank you for using our ATM!");
    }
