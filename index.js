function start(id,idTo) {
    document.getElementById(id).style.display = "none";
    document.getElementById(idTo).style.display = "block";
   
}
var count = 1;
function questionsView(id,idTo){
    if(count == 11 || idTo == "Page3" ){

    start(id,idTo)
    }
    empty()
    document.getElementById("number").innerHTML = 'Q'+count; 
    count++;
    
      questions = localStorage.getItem("questions");
      questions  = JSON.parse(questions);
      item = questions[Math.floor(Math.random() * questions.length)];
      var list = document.getElementById('optionList');
     document.getElementById("questions").innerHTML = item.q; 
      option = item.o;
      if(idTo == "Page5"){
          alert('asd');
          console.log(questions);
      }
     for (var i = 0; i < option.length; i++) {
         // Create the list item:
 
         var itemLi = document.createElement('li');
         var input = document.createElement("INPUT");
         input.setAttribute("type", "radio");
         input.setAttribute("required", "true");

         itemLi.appendChild(input) ;
 
         // Set its contents:
         itemLi.appendChild(document.createTextNode(option[i]));
 
         // Add it to the list:
         list.appendChild(itemLi);
     }
 }
function getInputValue(id,idTo){
    var inputVal = document.getElementById("myText").value;
    localStorage.setItem("name", inputVal);
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    document.getElementById("leaderBoard").style.display = "block";
    questionsView(id,idTo)
}

function empty(){
    var myNode = document.getElementById("number");
    myNode.innerHTML = '';
    var myNode = document.getElementById("questions");
    myNode.innerHTML = '';
    var myNode = document.getElementById("options");
    myNode.innerHTML = '';
    var myNode = document.getElementById("optionList");
    myNode.innerHTML = '';
}

document.getElementById("name").innerHTML = localStorage.getItem("name");;
questions = [
    {q:"Which is not valid data type in Javascript?",
    o:['Undefinded','Boolean ','float','Number'],
    a:"float"},
    
    {q:"Which type of language is Javascript  is located in ?",
    o:['Programming ',' Scripting ','Markup','  None of the above'],
    a:"Scripting"},

    {q:"Arrange in ascending order the units of memory TB, KB, GB, MB?",
    o:['MB>GB>TB>KB','TB>MB>GB>KB ','TB>GB>MB>KB','GB>MB>KB>TB'],
    a:"TB>GB>MB>KB"},

    {q:"Which one is the result of the output given by a computer?",
    o:['Data','Istruction ','Information','Excursion'],
    a:"Information"},

    {q:"Eight Bits make up a ?",
    o:['byte','megabyte ','kilobyteD','None'],
    a:"byte"},

    {q:"MS-Word is an example of __ ?",
    o:['An operating system','mA processing device ','Application software','An input device'],
    a:"Application software"},

    {q:"A computer cannot boot if it does not have the ?",
    o:['Compiler','Loader ','Operating system','Assembler'],
    a:"Operating system"},

    {q:"Junk e-mail is also called ___ ?",
    o:['Spam','Spoof','Sniffer script','Spool'],
    a:"Spam"},

    {q:"A _______ is a software program used to view Web pages.?",
    o:['site','host ','link','browser'],
    a:"browser"},

    {q:"Eight BWhich of the following refers to a small, single-site network?",
    o:['LAN','DSL ','RAM','USB'],
    a:"LAN"},

];
localStorage.setItem("questions",JSON.stringify(questions) );





