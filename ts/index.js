var nama = "aldo";
var angka = 12345678;
var isActive = true;
var datas = "aldo";
datas = true;
datas = "hello";
var values = "123";
values = 62895634889510;
var User = "admin";
User = "user";
console.log(nama, angka, isActive, datas, values, User);
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
var profile1 = {
    id: 1,
    name: "Aldo Wiranata",
    active: true,
};
var profile = "admin";
var Active = Status.Approved;
console.log(profile1);
console.log(profile);
console.log(Active);
var data = {
    nim: 2455201036,
    nama: "Aldo Wiranata",
    prodi: "TI",
};
console.log(data);
//union
var n = 20;
n = "aldo";
console.log(n);
var add = function (pw) {
    return pw;
};
console.log(add("12345678"));
//tupple
var value = ["aldo", 20];
value = ["Wiranata", 19];
console.log(value);
var p = "Aldo";
var d = "Wiranata";
var isActived = true;
var wrong = undefined;
//enum
var prodis;
(function (prodis) {
    prodis[prodis["TI"] = 0] = "TI";
    prodis[prodis["TS"] = 1] = "TS";
    prodis[prodis["ILKOM"] = 2] = "ILKOM";
})(prodis || (prodis = {}));
var role;
(function (role) {
    role["admin"] = "ADMIN";
    role["user"] = "USER";
})(role || (role = {}));
var prodi = prodis.TI;
var roles = role.admin;
console.log(prodi);
console.log(roles);
//function
var names = function (val) {
    return "hello ".concat(val);
};
var getNames = "Aldo Wiranata";
console.log(names(getNames));
var persegiPanjang = function (p, l) {
    return p * l;
};
var addPersegiPanjang = persegiPanjang(10, 10);
console.log(addPersegiPanjang);
var getLuasPersegiPanjang = function (n) {
    return {
        vLuas: n.l * n.p
    };
};
var dataPersegiPanjang = {
    p: 10,
    l: 20
};
var getDataPersegiPanjang = getLuasPersegiPanjang(dataPersegiPanjang);
console.log(getDataPersegiPanjang);
