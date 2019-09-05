// var question = '<h2>Salut comment tu va ?</h2>';
// var questionRep = 'Super et toi ?';
//
// var output = document.getElementById('output');

function questionReponse(){
  var qR =  {"Salut": "Coucou", "Comment tu va ?":"Super et toi", "Trés bien, est tu de bonne humeur?":"Oui je suis trés motivée", }
  var question = document.getElementById('input').value;
  document.getElementById("output").innerHTML += "<div class= Q>"+question+ "</div>";
document.getElementById("input").value="";

  if(question in qR){
    document.getElementById("output").innerHTML += "<div class=R>"+qR[question]+"</div>";
  }
  else{
    document.getElementById("output").innerHTML += "<div class=R>"+ ["sorry je comprend pas"]+"</div>";
  }
}

























// function bot(form){
//   var toi = document.getElementById('input').value;
//   document.getElementById("output").innerHTML = toi;
//   var questionRep = 'Super et toi ?';
//   var input = document.getElementById("input").value;
//   console.log(input);
//
//
//   if(questionRep === toi ){
//     output.innerHTML = '<h2> Coooool'+ input + '</h2>';
//     document.getElementById ("input").value = "";
//     question = '<h2> Trés bien, est tu de bonne humeur?</h2>';
//     setTimeout(timedQuestion, 2000);
//   }
//   else if (questionRep == 'Oui je suis trés motivée'){
//     output.innerHTML = '<h2> Waoooou ça tombe bien on va faire du JavaScript'+ input + ', Quelle enthousiasme </h2>'
//     document.getElementById("input").value ="";
//     question = '<h2> Tu te sent bien chez Simplon?</h2>';
//      setTimeout(timedQuestion, 2000);
//   }
//   return false;
// }
// function output(){
//   output.innerHTML = question;
//   console.log(output);
// }
