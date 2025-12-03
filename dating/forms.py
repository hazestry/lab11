from django import forms
from .models import UserProfile, Message
from django.core.exceptions import ValidationError
import bleach

class UserProfileForm(forms.ModelForm):
    """
    Форма создания и редактирования профиля с защитой от XSS
    """
    interests = forms.CharField(
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'rows': 3,
            'placeholder': 'Спорт, музыка, путешествия...'
        }),
        help_text='Введите интересы через запятую'
    )
    
    class Meta:
        model = UserProfile
        fields = [
            'age', 'city', 'education', 'profession',
            'interests', 'relationship_goal', 'status', 'avatar', 'bio'
        ]
        widgets = {
            'age': forms.NumberInput(attrs={'class': 'form-control', 'min': 18, 'max': 100}),
            'city': forms.TextInput(attrs={'class': 'form-control'}),
            'education': forms.Select(attrs={'class': 'form-control'}),
            'profession': forms.TextInput(attrs={'class': 'form-control'}),
            'relationship_goal': forms.Select(attrs={'class': 'form-control'}),
            'status': forms.Select(attrs={'class': 'form-control'}),
            'avatar': forms.TextInput(attrs={'class': 'form-control', 'placeholder': '👤'}),
            'bio': forms.Textarea(attrs={'class': 'form-control', 'rows': 4}),
        }
    
    def clean_interests(self):
        """Очистка интересов от потенциально опасного контента (XSS защита)"""
        interests = self.cleaned_data.get('interests')
        # Удаляем HTML теги для защиты от XSS
        interests = bleach.clean(interests, tags=[], strip=True)
        return interests
    
    def clean_bio(self):
        """Очистка био от потенциально опасного контента (XSS защита)"""
        bio = self.cleaned_data.get('bio')
        # Разрешаем только безопасные теги
        bio = bleach.clean(bio, tags=['b', 'i', 'u', 'br'], strip=True)
        return bio


class MessageForm(forms.ModelForm):
    """
    Форма отправки сообщений с защитой от XSS
    """
    class Meta:
        model = Message
        fields = ['text']
        widgets = {
            'text': forms.Textarea(attrs={
                'class': 'form-control message-input',
                'rows': 3,
                'placeholder': 'Введите сообщение...'
            })
        }
    
    def clean_text(self):
        """Очистка текста сообщения от потенциально опасного контента"""
        text = self.cleaned_data.get('text')
        # Удаляем HTML теги для защиты от XSS
        text = bleach.clean(text, tags=[], strip=True)
        if len(text.strip()) == 0:
            raise ValidationError('Сообщение не может быть пустым')
        return text


class ProfileSearchForm(forms.Form):
    """
    Форма поиска и фильтрации профилей
    """
    name = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Введите имя'})
    )
    age_min = forms.IntegerField(
        required=False,
        min_value=18,
        max_value=100,
        widget=forms.NumberInput(attrs={'class': 'form-control', 'placeholder': '18'})
    )
    age_max = forms.IntegerField(
        required=False,
        min_value=18,
        max_value=100,
        widget=forms.NumberInput(attrs={'class': 'form-control', 'placeholder': '80'})
    )
    city = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Город'})
    )
    education = forms.ChoiceField(
        required=False,
        choices=[('', 'Любое')] + UserProfile.EDUCATION_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control'})
    )
    relationship_goal = forms.ChoiceField(
        required=False,
        choices=[('', 'Любая')] + UserProfile.RELATIONSHIP_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control'})
    )