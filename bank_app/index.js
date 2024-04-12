window.onload = function(){


    let db_arr = []



    class BankAccount{
        constructor(accountNumber= null, ownerName=null, balance=0){

            this.accountNumber = accountNumber

            this._accountNumber = db_arr.find((value)=>(value.accountNumber == this.accountNumber))


            if(this._accountNumber){

                document.write(`Account number ${accountNumber} alredy exists.`)

            }else{

                db_arr.push({
                    accountNumber: accountNumber,
                    ownerName: ownerName,
                    balance: balance,
                })

            }

        }

        deposit(amount){
            let data = []

            for(let accInfo of db_arr){
                if(accInfo.accountNumber == this.accountNumber){

                    data.push({
                        accountNumber: accInfo.accountNumber,
                        ownerName: accInfo.ownerName,
                        balance: (accInfo.balance + amount)
                    })

                }else{
                    data.push(accInfo)
                }
            }

            db_arr = data

        }

        withdraw(amount){
            let data = []
            let accountInfo = db_arr.find((value)=>(value.accountNumber == this.accountNumber))

            if(accountInfo.balance < amount){
                console.log("Insufficient funds")
                return
            }

            for(let accInfo of db_arr){
                if(accInfo.accountNumber == this.accountNumber){

                    data.push({
                        accountNumber: accInfo.accountNumber,
                        ownerName: accInfo.ownerName,
                        balance: (accInfo.balance - amount)
                    })

                }else{
                    data.push(accInfo)
                }
            }

            db_arr = data

        }

        getBalance(){
            let accountInfo = db_arr.find((value)=>(value.accountNumber == this.accountNumber))
            return accountInfo.balance
        }

        displayAccountInfo(){

            let accountInfo = db_arr.find((value)=>(value.accountNumber == this.accountNumber))

            document.write(`Account Number: ${accountInfo.accountNumber} <br>`)
            document.write(`Owner Name: ${accountInfo.ownerName} <br>`)
            document.write(`Balance: ${accountInfo.balance} <br>`)

        }


    }

    client_1 = new BankAccount(accountNumber= 101, ownerName="md. ahad", balance=500)
    client_2 = new BankAccount(accountNumber= 102, ownerName="md. fahad", balance=700)


    client_1.displayAccountInfo()
    document.write(`<hr>`)
    client_2.displayAccountInfo()

    document.write(`<hr>`)

    client_1.deposit(100)

    client_1.displayAccountInfo()

    document.write(`<hr>`)

    client_1.withdraw(1000)

    client_1.displayAccountInfo()



    
    









}