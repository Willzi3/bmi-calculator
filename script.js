function calculate(){
     
    let bmi;
    let result = document.getElementById("results");

    //get input for weight//
    let weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-value").textContent = weight + " kg";

    //get input for height//
    let height = parseInt(document.getElementById("height").value);
    document.getElementById("height-value").textContent = height + " cm";

    //calculate bmi// 
    bmi = (weight / Math.pow( (height/100), 2)).toFixed(1); 
    result.textContent = bmi;

    //output for each weight category//
    if( bmi < 18.5){
        output = "Underweight";
    } else if( bmi >= 18.5 && bmi <= 25){
        output = "overwieght";
    } else if(bmi >= 25 && bmi <= 30 ){
        output = "Pre Obese"
    }else if(bmi >= 30 && bmi <= 35 ){
        output = "Obese class 1"
    } else if(bmi >= 35 && bmi <= 40 ){
        output = "Obese class 2"
    } else if(bmi >= 40){
        output = "Obese class 3"
    }

    document.getElementById("output").textContent = output;
}