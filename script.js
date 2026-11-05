// Банк слов. Ударная гласная обозначена заглавной буквой и знаком ударения.
const WORDS = [
  ["звонИ́т","зво́нит"],["облегчИ́ть","обле́гчить"],["тОрты","торты́"],
  ["красИ́вее","краси́вее"],["свЁкла","свекла́"],["каталО́г","катало́г"],
  ["договОр","до́говор"],["диспансЕ́р","диспа́нсер"],["жалюзИ́","жа́люзи"],
  ["киломЕ́тр","ки́лометр"],["квартА́л","ква́ртал"],["срЕ́дства","средства́"],
  ["тУ́фля","туфля́"],["щавЕ́ль","ща́вель"],["цемЕ́нт","це́мент"],
  ["шАрфы","шарфы́"],["бАнты","банты́"],["бОроду","бороду́"],
  ["бухгАлтеров","бухгалтеро́в"],["включИ́т","вклю́чит"],["вО́время","вовре́мя"],["граждАнство","гражда́нство"],
  ["дЕ́фис","дефи́с"],["дозвонИ́тся","дозво́нится"],["дО́низу","дони́зу"],
  ["досУ́г","до́суг"],["еретИ́к","ере́тик"],["зА́годя","загодя́"],
  ["закУ́порить","закупо́рить"],["знА́чимость","значи́мость"],["И́скра","искрА́"],
  ["исчЕ́рпать","исчерпа́ть"],["кА́мбала","камбала́"],["кА́мбалу","камбалу́"],
  ["кА́мни","камни́"],["кОнусов","конусо́в"],["кремЕ́нь","кре́мень"],
  ["лЕ́кторы","лекторы́"],["лО́ктя","локтя́"],["мЕ́стностей","местносте́й"],
  ["мозаИ́чный","моза́ичный"],["намЕ́рение","намере́ние"],["нЕ́друг","недру́г"],
  ["нЕ́нависть","ненави́сть"],["новостЕ́й","но́востей"],["обеспЕ́чение","обеспече́ние"],
  ["оптО́вый","о́птовый"],["освЕ́домиться","осведоми́ться"],["плодоносИ́ть","плодо́носить"],
  ["пО́нял","поня́л"],["принЯ́ть","при́нять"],["прИ́нял","приня́л"],
  ["сосредотОчение","сосредото́чение"],["столЯ́р","сто́ляр"],["тОртов","торто́в"],
  ["украИнский","украи́нский"],["фенО́мен","фено́мен"],["ходА́тайство","ходата́йство"]
];

// В заданиях ЕГЭ ровно один вариант намеренно дан с неправильным ударением.
// Формы и ударения проверены по нормативному списку; банк можно расширять.
const EXAM_TASKS = [
  {items:["звонИ́т","тОрты","свЁкла","катА́лог","договОр"], wrong:3, correction:"каталО́г"},
  {items:["красИ́вее","облегчИ́ть","щавЕ́ль","жалюзИ́","квАртал"], wrong:4, correction:"квартАл"},
  {items:["бАнты","шАрфы","цЕ́мент","киломЕ́тр","диспансЕ́р"], wrong:2, correction:"цемЕ́нт"},
  {items:["дозвонИ́тся","обеспЕ́чение","намЕ́рение","новостЕ́й","срЕ́дства"], wrong:1, correction:"обеспечЕ́ние"},
  {items:["принЯ́ть","прИ́нял","пО́нял","столЯ́р","ходА́тайство"], wrong:2, correction:"понЯ́л"}
];

const $ = id => document.getElementById(id);
const screens = ["home","game","result"];
let mode = "practice", queue = [], current = null, position = 0, correct = 0, wrong = 0;
let answered = false, practiceSeen = new Set(), taskOrder = [], taskIndex = 0;

function showScreen(name){ screens.forEach(s => $(s).classList.toggle("active",s===name)); }
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function start(selected){
  mode=selected; correct=0; wrong=0; position=0; answered=false; practiceSeen=new Set();
  $("mode-label").textContent=mode==="practice"?"ТРЕНИРОВКА":"ЗАДАНИЕ № 4 ЕГЭ";
  if(mode==="practice"){
    queue=shuffle(WORDS.map((w,i)=>{
      const showCorrect = Math.random() < .55;
      return {id:i, word:showCorrect ? w[0] : w[1], isCorrect:showCorrect, base:w[0]};
    }));
    // Для каждого слова создаём один показ; ошибочные ответы добавляются повторно с задержкой.
  }else{
    taskOrder=shuffle(EXAM_TASKS.map((_,i)=>i)); taskIndex=0;
  }
  showScreen("game"); nextQuestion();
}
function updateProgress(){
  const total=mode==="practice"?WORDS.length:EXAM_TASKS.length;
  const done=mode==="practice"?practiceSeen.size:taskIndex;
  $("counter").textContent=`${mode==="practice"?"СЛОВО":"ЗАДАНИЕ"} ${Math.min(done+1,total)} ИЗ ${total}`;
  $("progress-percent").textContent=`${Math.round(done/total*100)}%`;
  $("progress-fill").style.width=`${done/total*100}%`;
}
function nextQuestion(){
  answered=false; $("feedback").textContent=""; $("feedback").className="feedback";
  $("answers").innerHTML="";
  if(mode==="practice"){
    if(queue.length===0){finish();return;}
    current=queue.shift(); position++;
    $("question-kicker").textContent="ПРАВИЛЬНО ЛИ ПОСТАВЛЕНО УДАРЕНИЕ?";
    $("question-word").textContent=current.word;
    $("question-hint").textContent="Выбери один из вариантов ответа";
    addAnswer("Правильно",current.isCorrect); addAnswer("Неправильно",!current.isCorrect);
    updateProgress();
  }else{
    if(taskIndex>=taskOrder.length){finish();return;}
    current=EXAM_TASKS[taskOrder[taskIndex]];
    $("question-kicker").textContent="НАЙДИ СЛОВО С НЕВЕРНЫМ УДАРЕНИЕМ";
    $("question-word").textContent="Выбери один вариант";
    $("question-hint").textContent="В одном из слов ударение указано неправильно";
    current.items.forEach((word,i)=>addAnswer(word,i===current.wrong));
    updateProgress();
  }
}
function addAnswer(label,isCorrect){
  const b=document.createElement("button"); b.className="answer-btn"; b.textContent=label;
  b.addEventListener("click",()=>answer(isCorrect,b)); $("answers").appendChild(b);
}
function answer(isCorrect,button){
  if(answered)return; answered=true;
  [...$("answers").children].forEach(b=>b.disabled=true);
  if(isCorrect){correct++;$("feedback").textContent="Верно!";$("feedback").className="feedback good";button.classList.add("selected");}
  else{wrong++;$("feedback").textContent="Не совсем. Правильный ответ выделен."; $("feedback").className="feedback bad";}
  if(mode==="practice" && !isCorrect){
    const delay=Math.min(4,Math.max(2,queue.length));
    const showCorrect = Math.random() < .5;
    const retry={...current,word:showCorrect?WORDS[current.id][0]:WORDS[current.id][1],isCorrect:showCorrect};
    // Повторная карточка вставляется не сразу, а через несколько новых слов.
    queue.splice(Math.min(delay,queue.length),0,retry);
  }
  if(mode==="exam" && !isCorrect){
    [...$("answers").children].forEach((b,i)=>{if(i===current.wrong)b.classList.add("selected");});
  }
  if(mode==="exam"){
    const note=document.createElement("div"); note.textContent=`Правильное ударение: ${current.correction}`; note.style.cssText="margin-top:12px;color:#b8f36b;font-size:12px"; $("feedback").appendChild(note);
    taskIndex++;
  }else{
    practiceSeen.add(current.id);
  }
  const next=document.createElement("button");next.className="next-btn";next.textContent="Дальше →";next.addEventListener("click",nextQuestion);$("feedback").appendChild(document.createElement("br"));$("feedback").appendChild(next);
  updateProgress();
}
function finish(){
  const total=correct+wrong, percent=total?Math.round(correct/total*100):0;
  $("score-percent").textContent=percent+"%";$("score-correct").textContent=correct;
  $("score-wrong").textContent=wrong;$("score-total").textContent=total;
  $("result-message").textContent=percent>=90?"Отличный результат! Так держать.":percent>=70?"Хорошая работа. Ещё немного практики — и будет отлично.":"Есть что повторить. Попробуй ещё раз и закрепи сложные слова.";
  $("progress-fill").style.width="100%";$("progress-percent").textContent="100%";
  showScreen("result");
}
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>start(b.dataset.mode)));
$("exit").addEventListener("click",()=>showScreen("home"));
$("again").addEventListener("click",()=>start(mode));
$("to-home").addEventListener("click",()=>showScreen("home"));
