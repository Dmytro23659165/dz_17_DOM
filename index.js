  const inputFi = document.querySelector("#inputFi");
    inputFi.value = "Змінити текст";
    console.log(inputFi);
    const myButton = document.querySelector("#myButton");
    myButton.textContent = "Введіть текст";
    console.log(myButton);



    let main = document.querySelector("img");
    console.log(main);
    let myImg = document.querySelector('img[src="path/to/initial-image.jpg"]');
    myImg.src = "kkkkkkk/kkkkkkk/kkkkkkkkkkkkkkkkk";
    console.log(myImg);
    


    let img = document.querySelector(".zytpyf")
    console.log(img);
    let myImg = document.querySelector('a[href="http://initial-url.com"]');
    myLink.href = 'http://new-url.com'; 
    console.log(myLink); 
    let myImage = document.querySelector('img[alt=""]');
    myImage.alt = "я не знаю"; 
    console.log(myImage);



    let ul = document.querySelector("#myList")
    let firstItem = document.querySelector('li[class="el"]'); 
    firstItem.textContent = 'шось'; 
    console.log(firstItem);
