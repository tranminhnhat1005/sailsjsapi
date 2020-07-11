var person = {
  ho: 'Tran',
  ten: 'Minh Nhat',
  hi: function () {
    console.log ('Chao ban ' + this.ho + ' ' + this.ten);
  },
};

person.hi ();

console.log (person.ten);

function khoaHoc (ten, hocphi) {
  this.ten = ten;
  this.hocphi = hocphi;
}

khoaHoc.prototype.mota = function () {
  console.log ('Khoa ' + this.ten + ' ' + this.hocphi);
};

var nodejs = new khoaHoc ('Try hard nodejs', 800);
nodejs.mota ();
