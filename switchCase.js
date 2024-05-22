let language = "jawa";
let greeting = null;

switch (language){
    case "english":
        greeting = "happy birthday!";
        break;
    case "cina":
        greeting = "shengri kuaile!";
        break;
    case "jepang":
        greeting = "otanjobiomedeto!";
        break;
    case "korea":
        greeting = "saeng-il chughahaeyo!";
        break;
    case "italia":
        greeting = "buon compleanno!";
        break;
    case "arab":
        greeting = "eid milad!";
        break;
    case "jawa":
        greeting = "sugeng tanggap warsa!";
        break;
     default:
        greeting = "selamat ulang tahun!";  
}
console.log(greeting);