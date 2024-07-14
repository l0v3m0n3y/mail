class mail{
    constructor(){
        this.api = "https://api.mail.gw"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json","cookie":""}
    }
    async domains_list(){
        let req=await fetch(`${this.api}/domains`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async account_info(){
        let req=await fetch(`${this.api}/me`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async messages_list(){
        let req=await fetch(`${this.api}/messages`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async login(email,password){
        let req=await fetch(`${this.api}/token`,{method:"POST",headers: this.headers,body:JSON.stringify({"address":email,"password":password})});
        return req.json()
}
    async register(email,password){
        let req=await fetch(`${this.api}/accounts`,{method:"POST",headers: this.headers,body:JSON.stringify({"address":email,"password":password})});
        return req.json()
}       
}
module.exports = {mail};