# mail
JavaScript library for mail.gw
# main
```js
async function main(){
    const {linshi} = require('./linshi');
    const mailbox= new linshi();
    let data=await mailbox.login("email","password")
    mailbox.headers["Authorization"]=`Bearer ${data["token"]}`
    let req=await mailbox.account_info()
    console.log(req)
}
main()
```
