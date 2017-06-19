$(document).ready(function(){
	  $('.bxslider').bxSlider({
	  	auto: true,
	  	controls: true,
	  	pager: false
	  }); //slider
	  $( '.plan-button' ).hover(
			function() {
			    $(this).parent().parent().find(".plan-header").css("background-color", "#49cbcd");
			}, 
			function(){
				$(this).parent().parent().find(".plan-header").css("background-color", "#485460");
			});
	  jQuery(function($){
		$(function (){
		$("#head");
		$(window).scroll(function (){
			if ($(this).scrollTop() > 300){

				$("#head").addClass('static-menu');

			} else{

				$("#head").removeClass('static-menu');

			}

				});
			});
		});
	  $('input#name, input#email, textarea#message').unbind().blur( function(){
             
            // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные 
             var id = $(this).attr('id');
             var val = $(this).val();

           // После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
           switch(id)
           {

                 // Проверка поля "Имя"
                 case 'name':
                    var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

                    // Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
                    // то добавляем этому полю класс .not_error,
                    // и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

                    if(val.length > 2 && val != '' && rv_name.test(val))
                    {
                       $(this).addClass('not_error');
                       $(this).next('.error-box').text('Accept')
                                                 .css('color','green');
                    }

                  // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                  // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                    else
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).next('.error-box').html('The "Name" field is required')
                                                  .css('color','red');
                    }
                break;


               // Проверка email
               case 'email':
                   var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                   if(val != '' && rv_email.test(val))
                   {
                      $(this).addClass('not_error');
                      $(this).next('.error-box').text('Accept')
                                                .css('color','green');
      
                   }
                   else
                   {
                      $(this).removeClass('not_error').addClass('error');
                      $(this).next('.error-box').html('Field "Email" is required')
                                                 .css('color','red');
                   }
               break;


              // Проверка поля "Сообщение"
              case 'message':
                  if(val != '' && val.length < 5000)
                  {
                     $(this).addClass('not_error');
                     $(this).next('.error-box').text('Accept')
                                               .css('color','green');
                  }
                  else
                  {
                     $(this).removeClass('not_error').addClass('error');
                     $(this).next('.error-box').html('The "Message" field is required')
                                               .css('color','red');
                  }
              break;


           } // end switch(...)

         }); // end blur()

        
         // Теперь отправим наше письмо с помощью AJAX
         $('form#feedback-form').submit(function(e){

             // Запрещаем стандартное поведение для кнопки submit
             e.preventDefault();

             // После того, как мы нажали кнопку "Отправить", делаем проверку,
             // если кол-во полей с классов .not_error равно 3(так как у нас всего 3 поля), то есть все поля заполнены верно,
             // выполняем наш Ajax сценарий и отправляем письмо адресату

             if($('.not_error').length == 3)
             {  

                // Eще одним моментов является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
                // и вызываем метод .serialize().
                // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

                 $.ajax({
                        url: 'send.php',
                        type: 'post',
                        data: $(this).serialize(),

                        beforeSend: function(xhr, textStatus){ 
                             $('form#feedback-form :input').attr('disabled','disabled');
                        },

                       success: function(response){
                            $('form#feedback-form :input').removeAttr('disabled');
                            $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                            alert(response);
                       }
                }); // end ajax({...})
            }
            else
            {
              return false;
            }
            // Иначе, если количество полей с данным классом не равно значению 3 мы возвращаем false,
            // останавливая отправку сообщения в невалидной форме
           

       }); // end submit()

});

 