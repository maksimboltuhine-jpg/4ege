// Банк основан на актуальном орфоэпическом списке ФИПИ для подготовки к ЕГЭ-2026.
// Заглавная гласная показывает ударение, как в формулировках задания № 4.
const WORDS = [
  // Существительные
  "аэропОрты", "аэропОртов", "бАнты", "бАнтов", "бОроду", "бухгАлтеров", "вероисповЕдание",
  "водопровОд", "газопровОд", "граждАнство", "дефИс", "дешевИзна",
  "диспансЕр", "договорЁнность", "докумЕнт", "досУг", "еретИк",
  "жалюзИ", "знАчимость", "Иксы", "каталОг", "квартАл", "киломЕтр",
  "кОнусов", "корЫсть", "крАны", "кремЕнь", "кремнЯ", "лЕкторов",
  "лОктя", "локтЕй", "лыжнЯ", "мЕстностей", "намЕрение", "нЕдруг",
  "недУг", "некролОг", "нЕнависть", "нефтепровОд", "новостЕй", "нОгтя",
  "ногтЕй", "Отзыв", "отзЫв", "Отрочество", "партЕр", "портфЕль",
  "придАное", "призЫв", "свЁкла", "сирОты", "созЫв", "сосредотОчение",
  "срЕдства", "стАтуя", "столЯр", "тамОжня", "тОрты", "тОртов", "тУфля",
  "цемЕнт", "цЕнтнер", "цепОчка", "шАрфы", "шофЁр", "экспЕрт",

  // Прилагательные
  "вернА", "знАчимый", "красИвее", "кУхонный", "ловкА", "мозаИчный",
  "оптОвый", "прозорлИвый", "слИвовый",

  // Глаголы и формы глаголов
  "бралА", "бралАсь", "взялА", "взялАсь", "влилАсь", "ворвалАсь",
  "воспринЯть", "воспринялА", "воссоздалА", "вручИт", "гналА", "гналАсь",
  "добралА", "добралАсь", "дождалАсь", "дозвонИтся", "дозИровать",
  "ждалА", "закУпорить", "занЯть", "зАнял", "занялА", "зАняли",
  "заперлА", "запломбировАть", "защемИт", "звалА", "звонИт", "кАшлянуть",
  "клАла", "клЕить", "крАлась", "кровоточИть", "лгалА", "лилА", "лилАсь",
  "наделИт", "надорвалАсь", "назвалАсь", "накренИтся", "налилА", "нарвалА",
  "начАть", "нАчал", "началА", "нАчали", "обзвонИт", "облегчИть",
  "облегчИт", "облилАсь", "обнялАсь", "обогналА", "ободралА", "ободрИть",
  "ободрИт", "ободрИться", "ободрИтся", "обострИть", "одолжИть", "одолжИт",
  "озлОбить", "оклЕить", "окружИт", "опОшлить", "осведомИться", "осведомИтся",
  "отбылА", "отдалА", "откУпорить", "отозвалА", "отозвалАсь", "перезвонИт",
  "перелилА", "плодоносИть", "пломбировАть", "повторИт", "позвалА", "позвонИт",
  "полилА", "положИть", "положИл", "понЯть", "понялА", "послАла", "прибЫть",
  "прИбыл", "прибылА", "прИбыли", "принЯть", "прИнял", "принялА", "прИняли",
  "рвалА", "сверлИт", "снялА", "создалА", "сорвалА", "убралА", "углубИть",
  "укрепИт", "чЕрпать", "щемИт", "щЁлкать",

  // Причастия и отглагольные прилагательные
  "довезЁнный", "зАгнутый", "зАнятый", "занятА", "зАпертый", "заселЁнный",
  "заселенА", "кровоточАщий", "нажИвший", "налИвший", "нанЯвшийся", "начАвший",
  "нАчатый", "низведЁнный", "облегчЁнный", "ободрЁнный", "обострЁнный",
  "отключЁнный", "повторЁнный", "поделЁнный", "понЯвший", "прИнятый",
  "принятА", "приручЁнный", "прожИвший", "снятА", "сОгнутый", "углублЁнный",

  // Деепричастия
  "закУпорив", "начАв", "начАвшись", "отдАв", "понЯв", "прибЫв", "создАв",

  // Наречия
  "вОвремя", "дОверху", "дОнизу", "дОсуха", "зАсветло", "надОлго", "ненадОлго"
];

// Дополнительные слова и формы, перенесённые с двух фотографий пользователя.
const PHOTO_WORDS = [
  "навЕрх",
  "избалОванный",
  "зАгнутый",
  "баловАть",
  "завИдно",
  "отозвалАсь",
  "обнялАсь",
  "сорИт",
  "донЕльзя",
  "накренИтся",
  "ободрИшься",
  "убыстрИть",
  "заселенА",
  "молЯщий",
  "осведомИшься",
  "кормЯщий",
  "включЁнный",
  "добелА",
  "опломбировАть",
  "повторЁнный",
  "прибЫв",
  "позвалА",
  "прИбыл",
  "понЯвший",
  "снятА",
  "кЕдровый",
  "переключИшь",
  "ходАтайство",
  "щавЕль",
  "повторИт",
  "подождалА",
  "балУешься",
  "мЕльком",
  "зевОта",
  "языковАя",
  "языкОвая",
  "пробылА",
  "знАмение",
  "дремОта",
  "танцОвщица",
  "облегчИм",
  "мусоропровОд",
  "включИшь",
  "Августовский",
  "умЕрший",
  "скОльких",
  "приручЁнный",
  "обеспечЕние",
  "залитА",
  "фенОмен",
  "фОрзац",
  "мизЕрный",
  "договОр",
  "колОс",
  "гЕрбовый",
  "пролилА",
  "перчИть",
  "жюрИ",
  "бюрО",
  "диалОг",
  "монолОг",
  "эпилОг",
  "анАлог",
  "газопровОд",
  "школЯр",
  "малЯр",
  "бАнтом",
  "шАрфами",
  "аэропОртов",
  "тОрту",
  "зАгодя",
  "зАтемно",
  "докраснА",
  "отключАт",
  "включИт",
  "сверлИт",
  "бАрмен",
  "исчерпАвший",
  "придАное",
  "бухгАлтеров",
  "сиротА",
  "сирОт", "сирОтам", "сирОтами", "сирОтах",
  "Иконопись",
  "давнИшний",
  "закУпорить",
  "кУхонный",
  "недУг",
  "тУфля",
  "призЫв",
  "корЫсть",
  "созЫв",
  "отзЫв",
  "квартАл",
  // Дополнительные формы и слова с фотографий пользователя.
  "вЕрный", "красИвый", "красИвейший", "красИво", "лОвкий", "прозорлИва", "снЯтый",
  "пОручни", "нарОст", "фетИш",
  "жилОсь", "навралА", "наделИт", "совралА", "сорИт", "убралА",
  "полИть", "сверлИть", "отозвАть",
  "аэропОрт", "бАнт", "бородА", "бухгАлтер", "кран", "мЕстность",
  "лОкоть", "кОнус", "нОвость", "нОготь", "срЕдство", "шАрф", "тОрт",
  // Новые слова с последних фотографий (ударения сверены).
  "ревЕнь", "ломотА", "новорождЁнный", "балУет", "созданА",
  "премировАть", "переключИт", "христианИн", "отослАла", "вручЁнный",
  "созвонИмся", "балОванный", "нОгтя", "в скОльких"
];
WORDS.push(...PHOTO_WORDS);

// Убираем дубли и односложные слова: в них нельзя создать вариант с другим ударением.
const countVowels = value => ([...value.toLocaleLowerCase("ru-RU").replaceAll("ё", "е")]
  .filter(char => /[аеёиоуыэюя]/i.test(char)).length);
const WORD_BANK = [...new Set(WORDS)].filter(word => countVowels(word) >= 2);

// Контекст показывается только там, где от значения зависит ударение.
const WORD_CONTEXTS = {
  "Отзыв": "о книге",
  "отзЫв": "посла",
  "языковАя": "система",
  "языкОвая": "колбаса",
  "ловкА": "Она",
};


const $ = id => document.getElementById(id);
const screens = ["home", "game", "result"];
let mode = "practice";
let queue = [];
let current = null;
let correct = 0;
let wrong = 0;
let answered = false;
let practiceSeen = new Set();
let taskIndex = 0;
let totalExamTasks = 0;
let selectedExamNumbers = new Set();
let practiceTimed = false;
let practiceTimeLeft = 0;
let practiceTimerId = null;
let practiceAnswered = 0;

function showScreen(name) {
  screens.forEach(screen => $(screen).classList.toggle("active", screen === name));
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getStressedVowelIndex(word) {
  return [...word].findIndex(char => char !== char.toLowerCase() && /[АЕЁИОУЫЭЮЯ]/i.test(char));
}

function formatTestItem(displayWord, sourceWord = displayWord) {
  const context = WORD_CONTEXTS[sourceWord];
  if (!context) return displayWord;
  // Сочетание показываем и при правильном, и при намеренно ошибочном ударении.
  return sourceWord === "ловкА" ? `${context} ${displayWord}` : `${displayWord} ${context}`;
}

// Создаёт правдоподобный вариант с ошибочным ударением.
// Ё в неверном варианте записывается как Е — как это бывает в КИМ ЕГЭ.
function makeWrongVariant(correctWord) {
  const letters = [...correctWord.toLocaleLowerCase("ru-RU").replaceAll("ё", "е")];
  const originalStressIndex = getStressedVowelIndex(correctWord);
  const vowelIndexes = letters
    .map((char, index) => /[аеёиоуыэюя]/i.test(char) ? index : -1)
    .filter(index => index !== -1 && index !== originalStressIndex);
  if (vowelIndexes.length === 0) return correctWord;
  const newStressIndex = vowelIndexes[Math.floor(Math.random() * vowelIndexes.length)];
  letters[newStressIndex] = letters[newStressIndex].toLocaleUpperCase("ru-RU");
  return letters.join("");
}

function makePracticeCard(word, id) {
  const isCorrect = Math.random() < 0.55;
  return {
    id,
    correctWord: word,
    context: WORD_CONTEXTS[word] || "",
    word: isCorrect ? word : makeWrongVariant(word),
    isCorrect,
    retries: 0
  };
}

function stopPracticeTimer() {
  if (practiceTimerId !== null) {
    clearInterval(practiceTimerId);
    practiceTimerId = null;
  }
}

function openPracticeOptions() {
  $("practice-modal").classList.add("open");
  $("practice-modal").setAttribute("aria-hidden", "false");
}

function closePracticeOptions() {
  $("practice-modal").classList.remove("open");
  $("practice-modal").setAttribute("aria-hidden", "true");
}

function start(selectedMode) {
  if (selectedMode === "practice") {
    openPracticeOptions();
    return;
  }
  begin(selectedMode, 0);
}

function begin(selectedMode, durationSeconds = 0) {
  stopPracticeTimer();
  closePracticeOptions();
  mode = selectedMode;
  practiceTimed = mode === "practice" && durationSeconds > 0;
  practiceTimeLeft = durationSeconds;
  practiceAnswered = 0;
  correct = 0;
  wrong = 0;
  answered = false;
  practiceSeen = new Set();
  taskIndex = 0;
  selectedExamNumbers = new Set();
  $("mode-label").textContent = mode === "practice" ? "ТРЕНИРОВКА" : "ЗАДАНИЕ № 4 ЕГЭ";

  if (mode === "practice") {
    queue = shuffle(WORD_BANK.map((word, index) => makePracticeCard(word, index)));
    totalExamTasks = 0;
  } else {
    // Каждое слово встречается в экзаменационном режиме один раз за прохождение.
    const shuffledWords = shuffle(WORD_BANK);
    queue = [];
    for (let i = 0; i < shuffledWords.length; i += 5) {
      const group = shuffledWords.slice(i, i + 5);
      // Последнее задание тоже содержит пять вариантов: недостающие слова берём из начала банка.
      if (group.length < 5) {
        const fillers = shuffle(shuffledWords.slice(0, 5 - group.length));
        group.push(...fillers);
      }
      const correctCount = 2 + Math.floor(Math.random() * 3); // 2, 3 или 4 верных варианта
      const correctIndexes = new Set(shuffle([0, 1, 2, 3, 4]).slice(0, correctCount));
      queue.push(group.map((word, index) => ({
        word: correctIndexes.has(index) ? word : makeWrongVariant(word),
        isCorrect: correctIndexes.has(index),
        correctWord: word,
        context: WORD_CONTEXTS[word] || ""
      })));
    }
    totalExamTasks = queue.length;
  }

  showScreen("game");
  $("timer-display").hidden = !practiceTimed;
  if (practiceTimed) {
    updateTimerDisplay();
  }
  nextQuestion();
  if (practiceTimed) {
    practiceTimerId = setInterval(() => {
      practiceTimeLeft = Math.max(0, practiceTimeLeft - 1);
      updateTimerDisplay();
      updateProgress();
      if (practiceTimeLeft <= 0) finish();
    }, 1000);
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(practiceTimeLeft / 60);
  const seconds = practiceTimeLeft % 60;
  $("timer-display").textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateProgress() {
  if (mode === "practice") {
    if (practiceTimed) {
      const elapsed = 180 - practiceTimeLeft;
      const percent = Math.min(100, Math.round(elapsed / 180 * 100));
      $("counter").textContent = `ОТВЕТОВ: ${practiceAnswered}`;
      $("progress-percent").textContent = `${percent}%`;
      $("progress-fill").style.width = `${percent}%`;
    } else {
      const done = practiceSeen.size;
      const total = WORD_BANK.length;
      $("counter").textContent = `СЛОВО ${Math.min(done + 1, total)} ИЗ ${total}`;
      $("progress-percent").textContent = `${Math.round(done / total * 100)}%`;
      $("progress-fill").style.width = `${done / total * 100}%`;
    }
  } else {
    $("counter").textContent = `ЗАДАНИЕ ${Math.min(taskIndex + 1, totalExamTasks)} ИЗ ${totalExamTasks}`;
    $("progress-percent").textContent = `${Math.round(taskIndex / totalExamTasks * 100)}%`;
    $("progress-fill").style.width = `${taskIndex / totalExamTasks * 100}%`;
  }
}

function resetQuestionArea() {
  answered = false;
  selectedExamNumbers = new Set();
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("answers").innerHTML = "";
}

function nextQuestion() {
  resetQuestionArea();

  if (mode === "practice") {
    if (queue.length === 0) {
      if (practiceTimed) {
        queue = shuffle(WORD_BANK.map((word, index) => makePracticeCard(word, `${practiceAnswered}-${index}`)));
      } else {
        finish();
        return;
      }
    }
    current = queue.shift();
    $("question-kicker").textContent = "ПРАВИЛЬНО ЛИ ПОСТАВЛЕНО УДАРЕНИЕ?";
    $("question-word").textContent = formatTestItem(current.word, current.correctWord);
    $("question-hint").textContent = "Выбери один из вариантов ответа";
    addPracticeAnswer("Правильно", current.isCorrect);
    addPracticeAnswer("Неправильно", !current.isCorrect);
  } else {
    if (taskIndex >= totalExamTasks) {
      finish();
      return;
    }
    current = queue[taskIndex];
    $("question-kicker").textContent = "УКАЖИТЕ ВСЕ ВАРИАНТЫ С ВЕРНЫМ УДАРЕНИЕМ";
    $("question-word").textContent = "Выбери номера слов";
    $("question-hint").textContent = "Выбери от 2 до 4 вариантов, затем ответь";
    current.forEach((item, index) => addExamOption(item, index));
    const submit = document.createElement("button");
    submit.className = "exam-submit";
    submit.textContent = "Ответить →";
    submit.addEventListener("click", submitExamAnswer);
    $("answers").appendChild(submit);
  }

  updateProgress();
}

function addPracticeAnswer(label, isCorrect) {
  const button = document.createElement("button");
  button.className = "answer-btn";
  button.textContent = label;
  button.addEventListener("click", () => answerPractice(isCorrect, button));
  $("answers").appendChild(button);
}

function answerPractice(isCorrect, button) {
  if (answered) return;
  answered = true;
  [...$("answers").querySelectorAll(".answer-btn")].forEach(item => item.disabled = true);

  if (isCorrect) {
    correct++;
    $("feedback").textContent = "Верно!";
    $("feedback").className = "feedback good";
    button.classList.add("selected");
  } else {
    wrong++;
    $("feedback").textContent = `Ошибка. Правильно: ${current.correctWord}`;
    $("feedback").className = "feedback bad";
    // Ошибочное слово возвращается в очередь через 2–4 карточки, максимум два повтора.
    if (current.retries < 2) {
      const retry = makePracticeCard(current.correctWord, current.id);
      retry.retries = current.retries + 1;
      const delay = Math.min(4, Math.max(2, queue.length));
      queue.splice(Math.min(delay, queue.length), 0, retry);
    }
  }

  practiceSeen.add(current.id);
  practiceAnswered++;
  addNextButton();
  updateProgress();
}

function addExamOption(item, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "exam-option";
  button.setAttribute("aria-pressed", "false");
  button.innerHTML = `<span class="exam-number">${index + 1}</span><span class="exam-copy"><span class="exam-word"></span></span>`;
  button.querySelector(".exam-word").textContent = formatTestItem(item.word, item.correctWord);
  button.addEventListener("click", () => {
    if (answered) return;
    const number = index + 1;
    if (selectedExamNumbers.has(number)) {
      selectedExamNumbers.delete(number);
      button.classList.remove("chosen");
      button.setAttribute("aria-pressed", "false");
    } else {
      if (selectedExamNumbers.size >= 4) {
        $("question-hint").textContent = "Можно выбрать не больше 4 вариантов.";
        return;
      }
      selectedExamNumbers.add(number);
      button.classList.add("chosen");
      button.setAttribute("aria-pressed", "true");
    }
    const picked = [...selectedExamNumbers].sort((a, b) => a - b);
    $("question-hint").textContent = picked.length
      ? `Выбрано: ${picked.join(", ")}. Правильных ответов в задании — от 2 до 4.`
      : "Выбери от 2 до 4 вариантов, затем ответь";
  });
  $("answers").appendChild(button);
}

function submitExamAnswer() {
  if (answered) return;
  const selected = [...selectedExamNumbers].sort((a, b) => a - b);
  if (selected.length < 2 || selected.length > 4) {
    $("question-hint").textContent = "Нужно выбрать от 2 до 4 вариантов.";
    return;
  }
  answered = true;
  const expected = current
    .map((item, index) => item.isCorrect ? index + 1 : null)
    .filter(number => number !== null);
  const isCorrect = selected.length === expected.length && selected.every((number, index) => number === expected[index]);

  if (isCorrect) {
    correct++;
    $("feedback").textContent = "Верно!";
    $("feedback").className = "feedback good";
  } else {
    wrong++;
    $("feedback").textContent = `Неверно. Правильные номера: ${expected.join(", ")}.`;
    $("feedback").className = "feedback bad";
  }

  [...$("answers").querySelectorAll(".exam-option")].forEach((button, index) => {
    button.disabled = true;
    if (current[index].isCorrect) button.classList.add("answer-correct");
    else if (selected.includes(index + 1)) button.classList.add("answer-wrong");
  });
  const submit = $("answers").querySelector(".exam-submit");
  if (submit) submit.remove();
  taskIndex++;
  addNextButton();
  updateProgress();
}

function addNextButton() {
  const next = document.createElement("button");
  next.className = "next-btn";
  next.textContent = "Дальше →";
  next.addEventListener("click", nextQuestion);
  $("feedback").appendChild(document.createElement("br"));
  $("feedback").appendChild(next);
}

function finish() {
  stopPracticeTimer();
  const total = correct + wrong;
  const percent = total ? Math.round(correct / total * 100) : 0;
  $("score-percent").textContent = percent + "%";
  $("score-correct").textContent = correct;
  $("score-wrong").textContent = wrong;
  $("score-total").textContent = total;
  $("result-message").textContent = percent >= 90
    ? "Отличный результат! Так держать."
    : percent >= 70
      ? "Хорошая работа. Ещё немного практики — и будет отлично."
      : "Есть что повторить. Попробуй ещё раз и закрепи сложные слова.";
  $("progress-fill").style.width = "100%";
  $("progress-percent").textContent = "100%";
  showScreen("result");
}

document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => start(button.dataset.mode));
});
$("practice-3min").addEventListener("click", () => begin("practice", 180));
$("practice-no-time").addEventListener("click", () => begin("practice", 0));
$("practice-cancel").addEventListener("click", closePracticeOptions);
$("practice-modal").addEventListener("click", event => {
  if (event.target === $("practice-modal")) closePracticeOptions();
});
$("exit").addEventListener("click", () => {
  stopPracticeTimer();
  closePracticeOptions();
  showScreen("home");
});
$("again").addEventListener("click", () => start(mode));
$("to-home").addEventListener("click", () => {
  stopPracticeTimer();
  showScreen("home");
});
