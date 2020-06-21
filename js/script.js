 //  Change color on active navbar link

 $(function () {
     $('#nav').on('click', '.nav', function (e) {
         e.preventDefault();
         $(this).parents('#nav').find('.active').removeClass('active').end().end().addClass('active');
         $(activeTab).show();
     });
 });

 $(document).ready(function () {
     $('#navbarMenuHeroB .navbar-end a').click(function () {
         $('a').removeClass("active");
         $(this).addClass("active");
     });
 });

 // design welcome message  
 consoleText(['Hi, my name is Faustin', 'I am a web developer'], 'text', ['lightblue', 'lightblue', 'lightblue']);

 function consoleText(words, id, colors) {
     if (colors === undefined) colors = ['#fff'];
     var visible = true;
     var con = document.getElementById('console');
     var letterCount = 1;
     var x = 1;
     var waiting = false;
     var target = document.getElementById(id)
     target.setAttribute('style', 'color:' + colors[0])
     window.setInterval(function () {

         if (letterCount === 0 && waiting === false) {
             waiting = true;
             target.innerHTML = words[0].substring(0, letterCount)
             window.setTimeout(function () {
                 var usedColor = colors.shift();
                 colors.push(usedColor);
                 var usedWord = words.shift();
                 words.push(usedWord);
                 x = 1;
                 target.setAttribute('style', 'color:' + colors[0])
                 letterCount += x;
                 waiting = false;
             }, 1000)
         } else if (letterCount === words[0].length + 1 && waiting === false) {
             waiting = true;
             window.setTimeout(function () {
                 x = -1;
                 letterCount += x;
                 waiting = false;
             }, 1000)
         } else if (waiting === false) {
             target.innerHTML = words[0].substring(0, letterCount)
             letterCount += x;
         }
     }, 120)
     window.setInterval(function () {
         if (visible === true) {
             con.className = 'console-underscore hidden'
             visible = false;

         } else {
             con.className = 'console-underscore'

             visible = true;
         }
     }, 400)
 }


 $(document).on('click', 'a[href^="#"]', function (e) {
     e.preventDefault();
     $('html, body').stop().animate({
         scrollTop: $($(this).attr('href')).offset().top
     }, 1000, 'linear');
 });

 AOS.init({
     duration: 1200,
 })