// SwipeHeart JavaScript функции

$(document).ready(function() {
    console.log('SwipeHeart initialized');
    
    // Автоматическая отправка формы поиска при изменении
    $('#searchForm input, #searchForm select').on('change', function() {
        $('#searchForm').submit();
    });
    
    // Подтверждение удаления
    $('.delete-btn').on('click', function(e) {
        if (!confirm('Вы уверены, что хотите удалить?')) {
            e.preventDefault();
        }
    });
    
    // Автозакрытие alert'ов через 5 секунд
    setTimeout(function() {
        $('.alert').fadeOut('slow');
    }, 5000);
});

// Функция показа уведомлений
function showNotification(message, type = 'info') {
    const alertHtml = `
        <div class="alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3" 
             style="z-index: 9999; min-width: 300px;" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    $('body').append(alertHtml);
    
    setTimeout(function() {
        $('.alert').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 3000);
}

// Защита от XSS при работе с пользовательским вводом
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// CSRF токен для AJAX запросов
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

// Настройка AJAX для отправки CSRF токена
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!(/^(GET|HEAD|OPTIONS|TRACE)$/.test(settings.type)) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});