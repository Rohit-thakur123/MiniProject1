document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.querySelector("[data-otp-send]");
  const verifyBtn = document.querySelector("[data-otp-verify]");
  const phoneInput = document.querySelector("[data-phone-input]");
  const otpInput = document.querySelector("[data-otp-input]");
  const status = document.querySelector("[data-otp-status]");

  let otp = "";
  let verified = false;

  function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // Send OTP
  sendBtn.onclick = () => {
    if (!phoneInput.value) {
      status.textContent = "Enter phone first";
      return;
    }

    otp = generateOtp();
    verified = false;
    alert("Your OTP is: " + otp);
  };

  // Verify OTP
  verifyBtn.onclick = () => {
    if (!otp) {
      status.textContent = "Send OTP first";
      return;
    }

    if (verified) {
      status.textContent = "Already verified ✅";
      return;
    }

    if (otp == otpInput.value) {
      verified = true;
      status.textContent = "Verified ✅";
    } else {
      status.textContent = "Wrong OTP ❌";
    }
  };

  // Reset if phone changes
  phoneInput.oninput = () => {
    otp = "";
    verified = false;
    status.textContent = "";
  };
});
