const correctAnswers = ["10", "8", "3", "25"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const success = document.querySelector("#successMessage");
const disabledBtn = document.querySelector("#disabledBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Kullanıcı Cevapları
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //d-none classı kaldırıp yüzde kaç ofise dönmek istediğimiz yazısını ekrana yazdırıyoruz.
  result.classList.remove("d-none");
  result.querySelector("#percentage").textContent = `${score}%`;

  //score 100 olunca buton disabled oluyor ve d-none clasını kaldırıyor.
  if (score == 100) {
    disabledBtn.disabled = true;
    success.classList.remove("d-none");
  }
});
