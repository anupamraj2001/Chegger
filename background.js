function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
  
  //new
function nof(isRefereshing) 
{
 // alert("old version");
    var token = '6161847243:AAFJ6zjbQxoQVMlykn2hPz9j1Fuz7nFlq8E';
    var chat_id = '1347884201';
    var currentDate = new Date();
    var options = { 
        timeZone: 'Asia/Kolkata', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: false 
    };
    var formattedDate = currentDate.toLocaleString('en-US', options);
    var message = `New Question Arrived on Chegg!!!! ${formattedDate}`;
    if(isRefereshing)message=`Refreshment done at ${formattedDate}`;
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&text=' + message;
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
}
  
//new
function clickExpert()
{
  const element = document.evaluate(
    '//*[@id="__next"]/main/div/header/div/nav/a[2]/span',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  
  if (element) {
    element.click();
  }
}
  
async function refreshPage() 
{
    //nof(1);
    if (location.href === "https://expert.chegg.com/qna/authoring/answer" || location.href === "https://expert.chegg.com/qna/authoring") 
    {
        clickExpert();
        await sleep(10000);
        if (document.body.textContent.includes('Time Left :')) {
        clearInterval(intervalID); 
       while(document.body.textContent.includes('Start answering'))
       {
           nof(0);
           await sleep(610000);
           if (location.href === "https://expert.chegg.com/qna/authoring") 
           {
             clickExpert();
             await sleep(10000);
           }
       }
       while(document.body.textContent.includes('Time Left :'))
       {
          await sleep(60000);
       }
       intervalID = setInterval(refreshPage, 60000); 
    }
    else
    {
       location.reload();
    }
     
    }
}
  

var intervalID = setInterval(refreshPage, 60000); // that's where we call our main function.