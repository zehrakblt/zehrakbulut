 const quizData = [
      {
        question: "Drive filminde kullanılan ikonik şarkılardan biri nedir?",
        choices: ["Nightcall", "Time", "Lux Aeterna", "Cavatina"],
        answer: "Nightcall"
      },
      {
        question: "Requiem for a Dream'in unutulmaz soundtrack müziği kim tarafından bestelenmiştir?",
        choices: ["Hans Zimmer", "Clint Mansell", "Howard Shore", "Trent Reznor"],
        answer: "Clint Mansell"
      },
      {
        question: "The Lord of the Rings serisinin yönetmeni kimdir?",
        choices: ["Peter Jackson", "Christopher Nolan", "David Fincher", "Steven Spielberg"],
        answer: "Peter Jackson"
      }
    ];

    let current = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    const nextBtn = document.getElementById("nextBtn");
    const resultEl = document.getElementById("result");

    function loadQuestion() {
      const currentQ = quizData[current];
      questionEl.textContent = `Soru ${current + 1}: ${currentQ.question}`;
      choicesEl.innerHTML = "";
      currentQ.choices.forEach(choice => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.onclick = () => selectAnswer(li, currentQ.answer);
        choicesEl.appendChild(li);
      });
      nextBtn.disabled = true;
    }

    function selectAnswer(selectedLi, correctAnswer) {
      [...choicesEl.children].forEach(li => {
        li.style.pointerEvents = "none";
        li.style.backgroundColor = li.textContent === correctAnswer ? "#a5d6a7" : "#ef9a9a";
      });
      if (selectedLi.textContent === correctAnswer) score++;
      nextBtn.disabled = false;
    }

    nextBtn.onclick = () => {
      current++;
      if (current < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      questionEl.style.display = "none";
      choicesEl.style.display = "none";
      nextBtn.style.display = "none";
      resultEl.style.display = "block";
      resultEl.textContent = `Test Bitti! Doğru cevap sayısı: ${score} / ${quizData.length}`;
    }

    loadQuestion();