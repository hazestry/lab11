from django.contrib import admin
from .models import UserProfile, Message, Like

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    """
    Административная панель для профилей
    """
    list_display = ('user', 'age', 'city', 'education', 'profession', 'relationship_goal', 'created_at', 'updated_at')
    list_filter = ('education', 'relationship_goal', 'status', 'city', 'is_visible')
    search_fields = ('user__username', 'user__first_name', 'user__last_name', 'city', 'profession')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Основная информация', {
            'fields': ('user', 'age', 'city', 'avatar')
        }),
        ('Образование и работа', {
            'fields': ('education', 'profession')
        }),
        ('Личная информация', {
            'fields': ('interests', 'relationship_goal', 'status', 'bio')
        }),
        ('Настройки', {
            'fields': ('is_visible',)
        }),
        ('Служебная информация', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    """
    Административная панель для сообщений
    """
    list_display = ('sender', 'recipient', 'text_preview', 'is_read', 'created_at')
    list_filter = ('is_read', 'created_at')
    search_fields = ('sender__username', 'recipient__username', 'text')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    
    def text_preview(self, obj):
        return obj.text[:50] + '...' if len(obj.text) > 50 else obj.text
    text_preview.short_description = 'Текст'
    
    fieldsets = (
        ('Участники', {
            'fields': ('sender', 'recipient')
        }),
        ('Сообщение', {
            'fields': ('text', 'is_read')
        }),
        ('Служебная информация', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    """
    Административная панель для лайков
    """
    list_display = ('user_from', 'user_to', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('user_from__username', 'user_to__username')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Лайк', {
            'fields': ('user_from', 'user_to')
        }),
        ('Служебная информация', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )