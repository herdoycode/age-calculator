function ageCal() {
  let now = new Date();
  let ndd = now.getDate();
  let nmm = now.getMonth() + 1;
  let nyy = now.getFullYear();
  let dd = document.querySelector(".dd").value;
  let mm = document.querySelector(".mm").value;
  let yy = document.querySelector(".yy").value;
  let odd, omm, oyy;

  nyy < yy ? alert("Not Born Yeet") : (oyy = nyy - yy);

  if (nmm >= mm) {
    omm = nmm - mm;
  } else {
    nyy--;
    omm = 12 + nmm - mm;
  }
  if (ndd >= dd) {
    odd = ndd - dd;
  } else {
    nmm--;
    odd = ndd + 30 - dd;
  }

  document.querySelector(".rdd").innerText = odd + " Days";
  document.querySelector(".rmm").innerText = omm + " Months";
  document.querySelector(".ryy").innerText = oyy + " Years";
}
