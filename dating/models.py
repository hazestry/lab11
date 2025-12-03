from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone

# Абстрактная базовая модель с общими полями
class TimeStampedModel(models.Model):
    """
    Абстрактная модель с полями created_at и updated_at
    """
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    class Meta:
        abstract = True


# Модель профиля пользователя для знакомств
class UserProfile(TimeStampedModel):
    """
    Расширенный профиль пользователя для сайта знакомств
    """
    EDUCATION_CHOICES = [
        ('Среднее', 'Среднее'),
        ('Высшее', 'Высшее'),
        ('Специальное', 'Специальное'),
    ]
    
    RELATIONSHIP_CHOICES = [
        ('Серьезные отношения', 'Серьезные отношения'),
        ('Дружба', 'Дружба'),
        ('Общение', 'Общение'),
    ]
    
    STATUS_CHOICES = [
        ('Холост/Не замужем', 'Холост/Не замужем'),
        ('В разводе', 'В разводе'),
        ('Вдовец/Вдова', 'Вдовец/Вдова'),
    ]
    
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='dating_profile',
        verbose_name='Пользователь'
    )
    age = models.IntegerField(
        validators=[MinValueValidator(18), MaxValueValidator(100)],
        verbose_name='Возраст'
    )
    city = models.CharField(max_length=100, verbose_name='Город')
    education = models.CharField(
        max_length=20,
        choices=EDUCATION_CHOICES,
        verbose_name='Образование'
    )
    profession = models.CharField(max_length=100, verbose_name='Профессия')
    interests = models.TextField(verbose_name='Интересы', help_text='Введите через запятую')
    relationship_goal = models.CharField(
        max_length=30,
        choices=RELATIONSHIP_CHOICES,
        verbose_name='Цель знакомства'
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        verbose_name='Семейное положение'
    )
    avatar = models.CharField(
        max_length=10,
        default='👤',
        verbose_name='Аватар (эмодзи)'
    )
    bio = models.TextField(blank=True, verbose_name='О себе')
    is_visible = models.BooleanField(default=True, verbose_name='Профиль виден')
    
    class Meta:
        verbose_name = 'Профиль пользователя'
        verbose_name_plural = 'Профили пользователей'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user.get_full_name()} - {self.city}"
    
    def get_interests_list(self):
        """Возвращает список интересов"""
        return [interest.strip() for interest in self.interests.split(',')]


# Модель сообщений между пользователями
class Message(TimeStampedModel):
    """
    Сообщения между пользователями
    """
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='sent_messages',
        verbose_name='Отправитель'
    )
    recipient = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='received_messages',
        verbose_name='Получатель'
    )
    text = models.TextField(verbose_name='Текст сообщения')
    is_read = models.BooleanField(default=False, verbose_name='Прочитано')
    
    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['sender', 'recipient']),
            models.Index(fields=['-created_at']),
        ]
    
    def __str__(self):
        return f"{self.sender} -> {self.recipient}: {self.text[:30]}"


# Модель лайков
class Like(TimeStampedModel):
    """
    Лайки между пользователями
    """
    user_from = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='likes_given',
        verbose_name='От пользователя'
    )
    user_to = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='likes_received',
        verbose_name='Кому'
    )
    
    class Meta:
        verbose_name = 'Лайк'
        verbose_name_plural = 'Лайки'
        unique_together = ['user_from', 'user_to']
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user_from} лайкнул {self.user_to}"
