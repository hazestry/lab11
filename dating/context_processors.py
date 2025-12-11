from django.db.models import Q
from .models import Message


def unread_messages_count(request):
    unread_count = 0
    if request.user.is_authenticated and not request.user.is_guest():
        # подсчитываем непрочитанные сообщения для текущего пользователя
        unread_count = Message.objects.filter(
            recipient=request.user,
            is_read=False
        ).count()
    
    return {
        'unread_messages_count': unread_count
    }