$(document).ready(function() {

  $('body').on('click', function(e) {
    if ($(e.target).is('.popup__menu, .popup__desc, .popup--data, .popup__close')) {
      $('.popup__menu').removeClass('popup--active');
      $('.popup__block').removeClass('popup__block--active');
      $('.popup--data').removeClass('popup--active');
    }
  });

  $(".purchase__item").click(function() {
    $(".purchase__item").removeClass("purchase__item--active").eq($(this).index()).addClass("purchase__item--active");
    var index = $(this).index();
    $(".purchase__row").hide().eq(index).fadeIn()
  });

$(function () {
    var $myDate = $('#purchase__date');
    var dateInput = $('#myDate');
    var dateP = $('#myDate2');
    
    dateInput.datepicker({
        dateFormat: 'd M yy',
        monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень' ],
        monthNamesShort: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
        dayNames: ['неділя', 'понеділок', 'вторник', 'середа', 'четвер', 'пятниця', 'субота'],
        dayNamesShort: ['нд', 'пнд', 'втр', 'срд', 'чт', 'птн', 'сбт'],
        dayNamesMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        onClose: function (dateText, inst) {
          $(this).datepicker('option', 'dateFormat', 'd M yy');
        },
        onSelect: function (date, datepicker) {
          dateP.text(date);
        }
    });

     dateP.click(function() {
      dateInput.datepicker("show");
      dateP.trigger('input');
    })
 });

  $('.main-header__btn').on('click', function() {
    $('.popup__menu').addClass('popup--active');
    $('.popup__block').addClass('popup__block--active');
  });

   $('.block__item').on('click', function(event) {
    const block = event.target.closest('.block__item');
    if(!block) return false;
    let elem = $(this).data('popup');
    $(`.${elem}`).addClass('popup--active');

  });

    function validate(input, length, regExp, error, phone) {

    $(input).on('blur keyup', function() {
      var value = $(this).val();
      var that = $(this);

      regExp = regExp == '' ? /./ : regExp;

      if (phone === true) {
        bool_reg = !regExp.test(value);
      } else {
        bool_reg = regExp.test(value);
      }

      if (value.length > length && value !== '' && bool_reg) {
        that.removeClass('form-fail').addClass('form-done');
        $(error).slideUp();
      } else {
        that.removeClass('form-done').addClass('form-fail');
        $(error).slideDown();
      }
    });

  }

  // деакцивация кнопки если есть поле с ошибкой

  function disBtn(input, btn, bool) {
    var input = $(input);
    input.on('blur keyup', function() {

      if (input.hasClass('form-fail') || bool == true) {
        $(btn).attr('disabled', 'disabled');
      } else {
        $(btn).removeAttr('disabled');
      }

    });

  }

  // для проверки при нажатии

  function valClick(input, length, regExp, error, btn, phone) {
    var value = $(input).val();

    regExp = regExp == '' ? /./ : regExp;

    if (phone === true) {
      bool_reg = regExp.test(value);
    } else {
      bool_reg = !regExp.test(value);
    }

    if (value.length < length && value === '' && bool_reg) {
      $(input).addClass('form-fail');
      $(error).slideDown();
    }
  }

  //  деакцивация кнопки при нажатии

  function disBtnClick(input, btn) {
    var input = $(input);

    if (input.hasClass('form-fail')) {
      $(btn).attr('disabled', 'disabled');
      return false;
    } else {
      return true;
    }

  }

  function validateCheck(input) {
    $(input).on('change', function() {
      var check = $(this).prop('checked');
      var that = $(this);

      if (check) {
        that.removeClass('input-fail').addClass('input-done');
      } else {
        that.removeClass('input-done').addClass('input-fail');
      }
    });
  }

  $('input[type="tel"]').mask("+38 (999) 999-99-99");

  var regName = /^[a-zA-Zа-яА-ЯёЁ]+/;
  var regPhone = /[_]/i;
  var regEmail = /.+@.+\..+/i;
  var regNumber = /^\d{1,}$/;

  validate('#c_name', 1, regName, '.contacts__fail--name');

  validate('#c_info', 1, regName, '.contacts__fail--info');

  disBtn('#c_name, #c_info', '#btn--contact');


});

