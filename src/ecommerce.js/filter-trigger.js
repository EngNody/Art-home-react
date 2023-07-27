// =============================================================
// auto open by click filter
// .filter 11-- <<
// .filter-trigger --11 >> ---
// =============================================================

const Ftoshow='.filter';
const Fpopup=document.querySelector(Ftoshow);
const Ftrigger=document.querySelector(".filter-trigger")

// ------------- auto open by click filter ------------------------

Ftrigger.addEventListener("click",(e)=> {

setTimeout(() => {
  if(!Fpopup.classList.contains('show')) {
    Fpopup.classList.add("show")
  }
}, 250);
  e.preventDefault();
})

// -------------- auto close by click outside .filter --------------

document.addEventListener("click", (e) => {
  const isclosest=e.target.closest(Ftoshow);

  if (!isclosest && Fpopup.classList.contains('show')) {
    Fpopup.classList.remove("show");
  }
})