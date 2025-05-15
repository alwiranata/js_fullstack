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
    active: true
};
var profile = "admin";
var Active = Status.Approved;
console.log(profile1);
console.log(profile);
console.log(Active);
