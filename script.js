function calculateResult() {
    let subjects =Numberlet total=0;
    for (int i=1;i<+subjects;i++) {
        let marks =Number(Prompt("Enter marks for subject " +1));
         total+=marks ;
    } 
    let average=total /subjects;
    let grade;
    let result;
    if(average>=90) {
        grade="a";
        result="pass" ;
        else if()





    }
    document .getElementById("output") .innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average marks" + average +"<br>" +
     "Grade :" + grade + "<br>" +
     "Result :" +result ;
}