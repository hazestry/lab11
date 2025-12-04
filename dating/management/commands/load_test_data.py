from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from dating.models import UserProfile
import random

User = get_user_model()

class Command(BaseCommand):
    help = 'Загрузка тестовых данных'

    def handle(self, *args, **kwargs):
        # Данные для создания пользователей
        users_data = [
            {"username": "anna", "first_name": "Анна", "last_name": "Иванова", "age": 25, "city": "Москва", "avatar": "👩‍🎨"},
            {"username": "mikhail", "first_name": "Михаил", "last_name": "Петров", "age": 32, "city": "Санкт-Петербург", "avatar": "👨‍💻"},
            {"username": "elena", "first_name": "Елена", "last_name": "Сидорова", "age": 28, "city": "Новосибирск", "avatar": "👩‍⚕️"},
            {"username": "alex", "first_name": "Александр", "last_name": "Смирнов", "age": 35, "city": "Екатеринбург", "avatar": "👨‍🔧"},
            {"username": "olga", "first_name": "Ольга", "last_name": "Кузнецова", "age": 30, "city": "Казань", "avatar": "👩‍🏫"},
        ]
        
        educations = ["Среднее", "Высшее", "Специальное"]
        professions = ["Дизайнер", "Программист", "Врач", "Инженер", "Учитель"]
        interests = [
            "Искусство, Фотография, Путешествия",
            "IT, Игры, Чтение",
            "Медицина, Спорт, Природа",
            "Техника, Автомобили, Рыбалка",
            "Образование, Музыка, Танцы"
        ]
        goals = ["Серьезные отношения", "Дружба", "Общение"]
        statuses = ["Холост/Не замужем", "В разводе"]
        
        for i, user_data in enumerate(users_data):
            try:
                user, created = User.objects.get_or_create(
                    username=user_data["username"],
                    defaults={
                        "first_name": user_data["first_name"],
                        "last_name": user_data["last_name"],
                        "email": f"{user_data['username']}@example.com",
                        "user_type": "user"
                    }
                )
                
                if created:
                    user.set_password("password123")
                    user.save()
                    
                    UserProfile.objects.create(
                        user=user,
                        age=user_data["age"],
                        city=user_data["city"],
                        education=random.choice(educations),
                        profession=professions[i],
                        interests=interests[i],
                        relationship_goal=random.choice(goals),
                        status=random.choice(statuses),
                        avatar=user_data["avatar"],
                        bio=f"Привет! Я {user_data['first_name']}. Ищу интересных людей для общения."
                    )
                    
                    self.stdout.write(self.style.SUCCESS(f'Создан пользователь: {user.username}'))
            except Exception as e:
                self.stdout.write(self.style.ERROR(f'Ошибка при создании {user_data["username"]}: {str(e)}'))
        
        self.stdout.write(self.style.SUCCESS('Тестовые данные загружены!'))
        