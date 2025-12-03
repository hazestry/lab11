from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    """
    Кастомная модель пользователя с дополнительными полями
    """
    USER_TYPE_CHOICES = [
        ('guest', 'Гость'),
        ('user', 'Пользователь'),
        ('admin', 'Администратор'),
    ]
    
    user_type = models.CharField(
        max_length=10,
        choices=USER_TYPE_CHOICES,
        default='user',
        verbose_name='Тип пользователя'
    )
    phone = models.CharField(max_length=20, blank=True, verbose_name='Телефон')
    date_of_birth = models.DateField(null=True, blank=True, verbose_name='Дата рождения')
    
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
    
    def __str__(self):
        return self.username
    
    def is_guest(self):
        return self.user_type == 'guest'
    
    def is_regular_user(self):
        return self.user_type == 'user'
    
    def is_admin_user(self):
        return self.user_type == 'admin' or self.is_superuser