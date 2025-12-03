from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import UserRegistrationForm, UserLoginForm
from .models import CustomUser

def register_view(request):
    """
    Регистрация нового пользователя
    """
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.user_type = 'user'  # По умолчанию обычный пользователь
            user.save()
            login(request, user)
            messages.success(request, 'Регистрация прошла успешно! Создайте свой профиль.')
            return redirect('dating:create_profile')
    else:
        form = UserRegistrationForm()
    
    return render(request, 'users/register.html', {'form': form})


def login_view(request):
    """
    Вход в систему
    """
    if request.method == 'POST':
        form = UserLoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Добро пожаловать, {user.first_name}!')
                return redirect('dating:profile_list')
    else:
        form = UserLoginForm()
    
    return render(request, 'users/login.html', {'form': form})


@login_required
def logout_view(request):
    """
    Выход из системы
    """
    logout(request)
    messages.info(request, 'Вы успешно вышли из системы')
    return redirect('dating:home')


def guest_enter(request):
    """
    Гостевой вход (без регистрации)
    """
    # Создаем или получаем гостевого пользователя
    guest_username = f'guest_{request.session.session_key or "temp"}'
    
    try:
        guest_user = CustomUser.objects.get(username=guest_username)
    except CustomUser.DoesNotExist:
        guest_user = CustomUser.objects.create_user(
            username=guest_username,
            password=CustomUser.objects.make_random_password(),
            first_name='Гость',
            user_type='guest'
        )
    
    login(request, guest_user)
    messages.info(request, 'Вы вошли как гость. Функционал ограничен.')
    return redirect('dating:profile_list')