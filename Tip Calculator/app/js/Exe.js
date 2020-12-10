function calculateTip(){


      var myButton = document.getElementById('cButton').value;
      
      
      var billAmount = document.getElementById('billamount').value;
      var serviceRate = document.getElementById('ratingSelect').value;
      var numberOfPeople = document.getElementById('numberOfPeopleInput').value;

       // validate input
       if (billAmount === "" || serviceRate == 0) {
              alert("Please enter values");
               return;
            }
           
       // Check if number of people entered is empty or less than 1
       // then make it 1 default     
       if (numberOfPeople === "" || numberOfPeople <= 1) {
              numberOfPeople = 1;
              numberOfPeople.value = 1;
        }
              

      var totalTip = ( billAmount * serviceRate) / numberOfPeople;
       totalTip = Math.round(totalTip * 100) / 100;
       totalTip = totalTip.toFixed(2);
      /*alert("TIP AMOUNT"+"\n$"+totalTip+"\neach");*/

      var showResult = document.getElementById('showResult');
       
      showResult.innerText = "TIP AMOUNT"+"\n$"+totalTip+"\neach";
      console.log(numberOfPeople);

}

      
      

      

      

      

      
      
      //var showResult = document.getElementById('showResult');
      //showResult.innerText = "TIP AMOUNT"+"\n$"+totalTip+"\neach";
      
     