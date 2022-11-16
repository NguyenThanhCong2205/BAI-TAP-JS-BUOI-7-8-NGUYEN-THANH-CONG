function getEle(n) {
    return document.getElementById(n);
  }
  document.getElementById("So").onclick = function() {
    var n = document.getElementById("inputNum").value * 1;
    numArray.push(n);
    document.getElementById("txtArray").innerHTML = numArray;
  }

  //bai 1:
  document.getElementById("Tong").onclick = function() {
    var n = 0;
    for (var i = 0; i < numArray.length; i++)
      numArray[i] > 0 && (n += numArray[i]);
      n = "Tổng số dương: " + n
    document.getElementById("txtSum").innerHTML = n;
   
  }

  //bai 2:
  document.getElementById("Dem").onclick =  function() {
    var n = "";
    for (var r = 0; r < numArray.length; r++){
      numArray[r] > 0 && n++;
    }
    n ="Số dương: " + n;  
    document.getElementById("txtCount").innerHTML = n;
  }

  // bai 3:
  document.getElementById("soNho").onclick = function() {
    var n = numArray[0]
    for ( i = 1; i < numArray.length; i++){
      numArray[i] < n && (n = numArray[i])};
      n ="Số nhỏ nhất: " + n;
    document.getElementById("txtMin").innerHTML = n;
  }

  //bai 4:
  document.getElementById("timSo").onclick = function() {
    var n = [];
    
    for (var i = 0; i < numArray.length; i++)
      numArray[i] > 0 && n.push(numArray[i]);
    if (n.length > 0) {
      var e = n[0];
      for (var i = 1; i < n.length; i++) n[i] < e && (e = n[i]);
      n = "Số dương nhỏ nhất: " + e;
    } else( n = "Không có số dương trong mảng");
      document.getElementById("txtMinPos").innerHTML = n;

  }

  //bai 5:
  document.getElementById("soChan").onclick = function() {
    var n = "";
    for (var i = 0; i < numArray.length; i++)
      numArray[i] % 2 == 0 && (n = numArray[i]);
    n =  "Số chẵn cuối cùng: " + n;
    document.getElementById("txtEven").innerHTML = n;
  }



  //bai 7:
  document.getElementById("sapXep").onclick = function() {
    var n= [];
    for (var r = 0; r < numArray.length - 1; r++)
    
      for (var i = 0; i < numArray.length; i++) {
      numArray[i] > numArray[i + 1] && swap(i, i + 1);}
    n = "Mảng sau khi sắp xếp: " + numArray;
   document.getElementById("txtIncrease").innerHTML = n;
  }


  //bai 8:
  function checkPrime(n) {
    if (n < 2)
     return !1;
    for (var i = 2; i <= Math.sqrt(n); i++) 
    if (n % i == 0)
     return !1;
    return !0;
  }
  document.getElementById("timsoNguyen").onclick = function() {
    var n = -1;
    for (var i = 0; i < numArray.length; i++) {
      if (checkPrime(numArray[i])) {
        n = numArray[i];
        
      }else{
        break;
      }
    }
    document.getElementById("txtPrime").innerHTML = n;
  }


  //bai 9:
  document.getElementById("float").onclick = function (){
    var n = document.getElementById("number").value * 1;
    arrayFloat.push(n);
    document.getElementById("txtArrayFloat").innerHTML = arrayFloat;
  }

  document.getElementById("int").onclick = function(){
    var n = "";
    for(var i = 0; i < arrayFloat.length; i++){
      Number.isInteger(arrayFloat[i]) && n++
    }
    n ="Số nguyên: " + n;

    document.getElementById("txtInt").innerHTML = n;

  }



  document.addEventListener(
    "contextmenu",
    function (n) {
      n.preventDefault();
    },
    !1
  )
  var numArray = [],
    arrayFloat = [];
  1 