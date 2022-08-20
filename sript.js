const list = document.querySelector(".list-group");
const button = document.querySelector("#button-addon2");
const input = document.querySelector(".form-control");
const teks = document.querySelector(".form-label");
teks.innerHTML = `Masukkan Kegiatan <br>
klik "<strong>​✅​</strong>" jika sudah<br>
klik "<strong>​❌​</strong>" jika salah `;
button.addEventListener("click", function () {
  let nama = input.value;
  console.log(nama);
  if (input.value.length == 0) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else {
    const li = `<li class="list-group-item position-relative">
<div class="form-check">
<input class="form-check-input" onclick='toggle(this)' type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
${nama}
</label>
</div>
<button
  type="button"
  class="btn-close position-absolute top-50 end-0 translate-middle-y"
  aria-label=""
></button>
</li>`;
    list.insertAdjacentHTML("afterbegin", li);
    input.value = "";
  }
  // close / menghapus
  const close = document.querySelectorAll(".btn-close");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      this.parentNode.style.display = "none";
    });
  }
});
// mencoret
function toggle(el) {
  el.nextElementSibling.classList.toggle("act");
}
