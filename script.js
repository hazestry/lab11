        // бд
        const users = [
            {
                id: 1, name: "Анна", age: 25, city: "Москва", education: "Высшее", 
                profession: "Дизайнер", interests: ["Искусство", "Фотография", "Путешествия"], 
                relationship: "Серьезные отношения", status: "Холост/Не замужем", avatar: "👩‍🎨"
            },
            {
                id: 2, name: "Михаил", age: 32, city: "Санкт-Петербург", education: "Высшее", 
                profession: "Программист", interests: ["IT", "Игры", "Чтение"], 
                relationship: "Общение", status: "В разводе", avatar: "👨‍💻"
            },
            {
                id: 3, name: "Елена", age: 28, city: "Новосибирск", education: "Высшее", 
                profession: "Врач", interests: ["Медицина", "Спорт", "Природа"], 
                relationship: "Серьезные отношения", status: "Холост/Не замужем", avatar: "👩‍⚕️"
            },
            {
                id: 4, name: "Александр", age: 35, city: "Екатеринбург", education: "Высшее", 
                profession: "Инженер", interests: ["Техника", "Автомобили", "Рыбалка"], 
                relationship: "Дружба", status: "Холост/Не замужем", avatar: "👨‍🔧"
            },
            {
                id: 5, name: "Ольга", age: 30, city: "Казань", education: "Высшее", 
                profession: "Учитель", interests: ["Образование", "Музыка", "Танцы"], 
                relationship: "Серьезные отношения", status: "В разводе", avatar: "👩‍🏫"
            },
            {
                id: 6, name: "Дмитрий", age: 27, city: "Москва", education: "Специальное", 
                profession: "Повар", interests: ["Кулинария", "Спорт", "Фильмы"], 
                relationship: "Общение", status: "Холост/Не замужем", avatar: "👨‍🍳"
            },
            {
                id: 7, name: "Мария", age: 26, city: "Нижний Новгород", education: "Высшее", 
                profession: "Журналист", interests: ["Писательство", "Путешествия", "Кино"], 
                relationship: "Серьезные отношения", status: "Холост/Не замужем", avatar: "👩‍💼"
            },
            {
                id: 8, name: "Владимир", age: 40, city: "Санкт-Петербург", education: "Высшее", 
                profession: "Бизнесмен", interests: ["Бизнес", "Гольф", "Путешествия"], 
                relationship: "Серьезные отношения", status: "В разводе", avatar: "👨‍💼"
            },
            {
                id: 9, name: "Светлана", age: 33, city: "Москва", education: "Высшее", 
                profession: "Психолог", interests: ["Психология", "Йога", "Книги"], 
                relationship: "Дружба", status: "Холост/Не замужем", avatar: "👩‍⚕️"
            },
            {
                id: 10, name: "Игорь", age: 29, city: "Екатеринбург", education: "Среднее", 
                profession: "Спортсмен", interests: ["Спорт", "Фитнес", "Здоровье"], 
                relationship: "Общение", status: "Холост/Не замужем", avatar: "🏃‍♂️"
            },
            {
                id: 11, name: "Татьяна", age: 31, city: "Казань", education: "Высшее", 
                profession: "Юрист", interests: ["Право", "Чтение", "Театр"], 
                relationship: "Серьезные отношения", status: "В разводе", avatar: "👩‍⚖️"
            },
            {
                id: 12, name: "Сергей", age: 36, city: "Новосибирск", education: "Высшее", 
                profession: "Архитектор", interests: ["Архитектура", "Искусство", "Фотография"], 
                relationship: "Дружба", status: "Холост/Не замужем", avatar: "👨‍🎨"
            },
            {
                id: 13, name: "Наталья", age: 24, city: "Нижний Новгород", education: "Высшее", 
                profession: "Маркетолог", interests: ["Маркетинг", "SMM", "Путешествия"], 
                relationship: "Общение", status: "Холост/Не замужем", avatar: "👩‍💻"
            },
            {
                id: 14, name: "Андрей", age: 38, city: "Москва", education: "Высшее", 
                profession: "Врач", interests: ["Медицина", "Теннис", "Классическая музыка"], 
                relationship: "Серьезные отношения", status: "Вдовец/Вдова", avatar: "👨‍⚕️"
            },
            {
                id: 15, name: "Юлия", age: 27, city: "Санкт-Петербург", education: "Высшее", 
                profession: "Художник", interests: ["Живопись", "Выставки", "Кафе"], 
                relationship: "Дружба", status: "Холост/Не замужем", avatar: "🎨"
            },
            {
                id: 16, name: "Роман", age: 34, city: "Екатеринбург", education: "Специальное", 
                profession: "Механик", interests: ["Автомобили", "Мотоциклы", "Рок-музыка"], 
                relationship: "Общение", status: "В разводе", avatar: "🔧"
            },
            {
                id: 17, name: "Виктория", age: 29, city: "Казань", education: "Высшее", 
                profession: "Фармацевт", interests: ["Медицина", "Фитнес", "Кулинария"], 
                relationship: "Серьезные отношения", status: "Холост/Не замужем", avatar: "💊"
            },
            {
                id: 18, name: "Максим", age: 26, city: "Новосибирск", education: "Высшее", 
                profession: "Музыкант", interests: ["Музыка", "Концерты", "Творчество"], 
                relationship: "Дружба", status: "Холост/Не замужем", avatar: "🎸"
            },
            {
                id: 19, name: "Екатерина", age: 32, city: "Нижний Новгород", education: "Высшее", 
                profession: "Менеджер", interests: ["Менеджмент", "Йога", "Путешествия"], 
                relationship: "Серьезные отношения", status: "В разводе", avatar: "👩‍💼"
            },
            {
                id: 20, name: "Павел", age: 30, city: "Москва", education: "Высшее", 
                profession: "Фотограф", interests: ["Фотография", "Природа", "Искусство"], 
                relationship: "Общение", status: "Холост/Не замужем", avatar: "📸"
            },
            {
                id: 21, name: "Алёна", age: 25, city: "Санкт-Петербург", education: "Среднее", 
                profession: "Стилист", interests: ["Мода", "Красота", "Шоппинг"], 
                relationship: "Дружба", status: "Холост/Не замужем", avatar: "💄"
            },
            {
                id: 22, name: "Константин", age: 37, city: "Екатеринбург", education: "Высшее", 
                profession: "Банкир", interests: ["Финансы", "Гольф", "Вино"], 
                relationship: "Серьезные отношения", status: "В разводе", avatar: "💰"
            },
            {
                id: 23, name: "Ирина", age: 28, city: "Казань", education: "Высшее", 
                profession: "Переводчик", interests: ["Языки", "Литература", "Театр"], 
                relationship: "Общение", status: "Холост/Не замужем", avatar: "📚"
            },
            {
                id: 24, name: "Артём", age: 31, city: "Новосибирск", education: "Специальное", 
                profession: "Электрик", interests: ["Техника", "Хоккей", "Рыбалка"], 
                relationship: "Серьезные отношения", status: "Холост/Не замужем", avatar: "⚡"
            },
            {
                id: 25, name: "Варвара", age: 26, city: "Нижний Новгород", education: "Высшее", 
                profession: "Ветеринар", interests: ["Животные", "Природа", "Волонтерство"], 
                relationship: "Дружба", status: "Холост/Не замужем", avatar: "🐕"
            },
            {
                id: 26, name: "Георгий", age: 33, city: "Москва", education: "Высшее", 
                profession: "Режиссер", interests: ["Кино", "Театр", "Искусство"], 
                relationship: "Общение", status: "В разводе", avatar: "🎬"
            },
            {
                id: 27, name: "Алина", age: 24, city: "Санкт-Петербург", education: "Высшее", 
                profession: "Биолог", interests: ["Наука", "Экология", "Путешествия"], 
                relationship: "Серьезные отношения", status: "Холост/Не замужем", avatar: "🔬"
            },
            {
                id: 28, name: "Василий", age: 39, city: "Екатеринбург", education: "Высшее", 
                profession: "Историк", interests: ["История", "Музеи", "Чтение"], 
                relationship: "Дружба", status: "Вдовец/Вдова", avatar: "📜"
            },
            {
                id: 29, name: "Дарья", age: 27, city: "Казань", education: "Высшее", 
                profession: "Логист", interests: ["Логистика", "Планирование", "Спорт"], 
                relationship: "Серьезные отношения", status: "Холост/Не замужем", avatar: "📦"
            },
            {
                id: 30, name: "Тимур", age: 35, city: "Новосибирск", education: "Высшее", 
                profession: "Астроном", interests: ["Астрономия", "Физика", "Космос"], 
                relationship: "Общение", status: "В разводе", avatar: "🔭"
            }
        ];

        let filteredUsers = [...users];
        let currentChatUser = null;

        // dom
        const profilesContainer = document.getElementById('profiles-container');
        const noResults = document.getElementById('no-results');
        const modal = document.getElementById('message-modal');
        const modalTitle = document.getElementById('modal-title');
        const messagesContainer = document.getElementById('messages-container');
        const messageInput = document.getElementById('message-input');
        const sendBtn = document.getElementById('send-btn');

        // поисковые фильтры
        const searchName = document.getElementById('search-name');
        const searchAgeMin = document.getElementById('search-age-min');
        const searchAgeMax = document.getElementById('search-age-max');
        const searchCity = document.getElementById('search-city');
        const searchEducation = document.getElementById('search-education');
        const searchProfession = document.getElementById('search-profession'); 
        const searchInterests = document.getElementById('search-interests');
        const searchRelationship = document.getElementById('search-relationship');
        const searchStatus = document.getElementById('search-status');

        // для лайка
        function createFloatingHearts() {
            const container = document.getElementById('floating-hearts');
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 100 100">
                        <path d="M50,90 C20,60 10,40 10,25 C10,15 20,5 30,5 C40,5 50,15 50,25 C50,15 60,5 70,5 C80,5 90,15 90,25 C90,40 80,60 50,90 Z" fill="#ff69b4" opacity="0.3"/>
                    </svg>
                `;
                heart.style.left = Math.random() * 100 + '%';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 6000);
            }, 2000);
        }

        // функция отображения профилей
        function displayProfiles(profiles) {
            profilesContainer.innerHTML = '';
            
            if (profiles.length === 0) {
                noResults.style.display = 'block';
                return;
            }
            
            noResults.style.display = 'none';
            
            profiles.forEach(user => {
                const profileCard = document.createElement('div');
                profileCard.className = 'profile-card';
                profileCard.innerHTML = `
                    <div class="profile-image">
                        <span style="font-size: 4rem;">${user.avatar}</span>
                    </div>
                    <div class="profile-info">
                        <div class="profile-name">${user.name}, ${user.age}</div>
                        <div class="profile-details">
                            <div><strong>Город:</strong> ${user.city}</div>
                            <div><strong>Образование:</strong> ${user.education}</div>
                            <div><strong>Профессия:</strong> ${user.profession}</div>
                            <div><strong>Цель:</strong> ${user.relationship}</div>
                            <div><strong>Статус:</strong> ${user.status}</div>
                        </div>
                        <div class="profile-interests">
                            ${user.interests.map(interest => 
                                `<span class="interest-tag">${interest}</span>`
                            ).join('')}
                        </div>
                        <button class="message-btn" onclick="openChat(${user.id})">
                            Написать сообщение
                        </button>
                    </div>
                `;
                profilesContainer.appendChild(profileCard);
            });
        }

        // Функция фильтрации профилей
        function filterProfiles() {
            const nameFilter = searchName.value.toLowerCase().trim();
            const ageMinFilter = searchAgeMin.value ? parseInt(searchAgeMin.value) : 0;
            const ageMaxFilter = searchAgeMax.value ? parseInt(searchAgeMax.value) : 100;
            const cityFilter = searchCity.value;
            const educationFilter = searchEducation.value;
            const professionFilter = searchProfession.value.toLowerCase().trim();
            const interestsFilter = searchInterests.value.toLowerCase().trim();
            const relationshipFilter = searchRelationship.value;
            const statusFilter = searchStatus.value;

            filteredUsers = users.filter(user => {
                const nameMatch = !nameFilter || user.name.toLowerCase().includes(nameFilter);
                const ageMatch = user.age >= ageMinFilter && user.age <= ageMaxFilter;
                const cityMatch = !cityFilter || user.city === cityFilter;
                const educationMatch = !educationFilter || user.education === educationFilter;
                const professionMatch = !professionFilter || user.profession.toLowerCase().includes(professionFilter);
                const interestsMatch = !interestsFilter || 
                    user.interests.some(interest => interest.toLowerCase().includes(interestsFilter));
                const relationshipMatch = !relationshipFilter || user.relationship === relationshipFilter;
                const statusMatch = !statusFilter || user.status === statusFilter;

                return nameMatch && ageMatch && cityMatch && educationMatch && 
                       professionMatch && interestsMatch && relationshipMatch && statusMatch;
            });

            displayProfiles(filteredUsers);
        }

        // добавление обработчиков событий для фильтров
        [searchName, searchAgeMin, searchAgeMax, searchCity, searchEducation, 
         searchProfession, searchInterests, searchRelationship, searchStatus].forEach(element => {
            element.addEventListener('input', filterProfiles);
        });

        const resetButton = document.getElementById("resetButton");
        resetButton.addEventListener("click", resetFilters);

        function resetFilters() {
          [searchName, searchAgeMin, searchAgeMax, searchCity, searchEducation, 
         searchProfession, searchInterests, searchRelationship, searchStatus].forEach(element => {
            element.value = "";
        });
        displayProfiles(users);
        }

        // получение сообщений из localStorage
        function getMessages(userId) {
            const messages = localStorage.getItem(`messages_${userId}`);
            return messages ? JSON.parse(messages) : [];
        }

        // сохранение сообщений в localStorage
        function saveMessages(userId, messages) {
            localStorage.setItem(`messages_${userId}`, JSON.stringify(messages));
        }

        // отображение сообщений
        function displayMessages(userId) {
            const messages = getMessages(userId);
            messagesContainer.innerHTML = '';

            messages.forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${message.sender === 'me' ? 'sent' : 'received'}`;
                messageDiv.innerHTML = `
                    <div class="message-bubble">
                        ${message.text}
                        <div style="font-size: 0.8em; opacity: 0.7; margin-top: 5px;">
                            ${new Date(message.timestamp).toLocaleString()}
                        </div>
                    </div>
                `;
                messagesContainer.appendChild(messageDiv);
            });

            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // отправка сообщения
        function sendMessage() {
            const text = messageInput.value.trim();
            if (!text || !currentChatUser) return;

            const messages = getMessages(currentChatUser.id);
            const newMessage = {
                id: Date.now(),
                text: text,
                sender: 'me',
                timestamp: new Date().toISOString()
            };

            messages.push(newMessage);
            saveMessages(currentChatUser.id, messages);

            // ответ собеседника
            setTimeout(() => {
                const responses = [
                    "Привет! Рад(а) познакомиться! 😊",
                    "Спасибо за сообщение! Как дела? 😄",
                    "Интересно! Расскажи больше об этом 🤔",
                    "Согласен(на) с тобой! 👍",
                    "А что думаешь насчет встречи? ☕",
                    "Классно! У нас много общего 😍",
                    "Хочется узнать тебя получше! 💕"
                ];
                
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                const updatedMessages = getMessages(currentChatUser.id);
                updatedMessages.push({
                    id: Date.now() + 1,
                    text: randomResponse,
                    sender: 'other',
                    timestamp: new Date().toISOString()
                });
                saveMessages(currentChatUser.id, updatedMessages);
                displayMessages(currentChatUser.id);
            }, 1000 + Math.random() * 3000);

            messageInput.value = '';
            displayMessages(currentChatUser.id);
        }

        // открыть чат
        function openChat(userId) {
            currentChatUser = users.find(user => user.id === userId);
            if (!currentChatUser) return False;

            modalTitle.textContent = `Сообщения с ${currentChatUser.name}`;
            displayMessages(userId);
            modal.style.display = 'block';
        }

        // обработчики событий для модального окна
        document.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        sendBtn.addEventListener('click', sendMessage);

        messageInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        });

        // обработчики для эмодзи
        document.querySelectorAll('.emoji-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const emoji = btn.dataset.emoji;
                messageInput.value += emoji;
                messageInput.focus();
            });
        });

        // сохранение фильтров в cookies
        function saveFilters() {
            const filters = {
                name: searchName.value,
                ageMin: searchAgeMin.value,
                ageMax: searchAgeMax.value,
                city: searchCity.value,
                education: searchEducation.value,
                profession: searchProfession.value,
                interests: searchInterests.value,
                relationship: searchRelationship.value,
                status: searchStatus.value
            };
            document.cookie = `filters=${JSON.stringify(filters)}; expires=${new Date(Date.now() + 30*24*60*60*1000).toUTCString()}; path=/`;
        }

        // загрузкп фильтров из cookies
        function loadFilters() {
            const cookies = document.cookie.split(';');
            const filtersCookie = cookies.find(cookie => cookie.trim().startsWith('filters='));
            
            if (filtersCookie) {
                try {
                    const filters = JSON.parse(filtersCookie.split('=')[1]);
                    searchName.value = filters.name || '';
                    searchAgeMin.value = filters.ageMin || '';
                    searchAgeMax.value = filters.ageMax || '';
                    searchCity.value = filters.city || '';
                    searchEducation.value = filters.education || '';
                    searchProfession.value = filters.profession || '';
                    searchInterests.value = filters.interests || '';
                    searchRelationship.value = filters.relationship || '';
                    searchStatus.value = filters.status || '';
                } catch (e) {
                    console.log('Ошибка загрузки фильтров из cookies');
                }
            }
        }

        // сохранение фильтров при изменении
        [searchName, searchAgeMin, searchAgeMax, searchCity, searchEducation, 
         searchProfession, searchInterests, searchRelationship, searchStatus].forEach(element => {
            element.addEventListener('change', saveFilters);
        });

        // добавление анимации появления карточек
        function animateCards() {
            const cards = document.querySelectorAll('.profile-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s, transform 0.5s';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // переопределение функции displayProfiles с анимацией
        function displayProfilesWithAnimation(profiles) {
            displayProfiles(profiles);
            setTimeout(animateCards, 50);
        }

        // функция добавления SVG анимации лайка
        function createLikeAnimation(element) {
            const heart = document.createElement('div');
            heart.innerHTML = `
                <svg width="30" height="30" viewBox="0 0 100 100" style="position: absolute; top: 50%; left: 60%; transform: translate(-50%, -50%); z-index: 1000;">
                    <path d="M50,90 C20,60 10,40 10,25 C10,15 20,5 30,5 C40,5 50,15 50,25 C50,15 60,5 70,5 C80,5 90,15 90,25 C90,40 80,60 50,90 Z" fill="#ff1744" opacity="0.8"/>
                </svg>
            `;
            
            element.appendChild(heart);
            heart.style.animation = 'likeAnimation 1s ease-out forwards';
            
            setTimeout(() => {
                heart.remove();
            }, 1000);
        }

        // CSS для анимации лайка
        const likeAnimationCSS = `
            @keyframes likeAnimation {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 0;
                }
                50% {
                    transform: translate(-50%, -50%) scale(1.2);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(0) translateY(-50px);
                    opacity: 0;
                }
            }
        `;

        // стили анимации
        const style = document.createElement('style');
        style.textContent = likeAnimationCSS;
        document.head.appendChild(style);

        // двойной клик
        function addLikeAnimation() {
            document.addEventListener('dblclick', (event) => {
                if (event.target.closest('.profile-card')) {
                    const card = event.target.closest('.profile-card');
                    createLikeAnimation(card);
                }
            });
        }

        // уведомления
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: '#4CAF50' : '#2196F3'};
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 1001;
                animation: slideInRight 0.3s ease-out;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        // CSS для анимации уведомлений
        const notificationAnimationCSS = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;

        const notificationStyle = document.createElement('style');
        notificationStyle.textContent = notificationAnimationCSS;
        document.head.appendChild(notificationStyle);

        // модификация функции sendMessage для показа уведомлений
        const originalSendMessage = sendMessage;
        sendMessage = function() {
            const text = messageInput.value.trim();
            if (text && currentChatUser) {
                originalSendMessage();
                showNotification('Сообщение отправлено!', 'success');
            }
        };

        // блок инициализации
        function init() {
            loadFilters();
            filterProfiles();
            createFloatingHearts();
            addLikeAnimation();
            
            // Приветственное уведомление
            setTimeout(() => {
                showNotification('Добро пожаловать в SwipeHeart! Найдите свою вторую половинку!');
            }, 1000);
        }

        // глобальная функция для кнопок
        window.openChat = openChat;

        // запуск 
        document.addEventListener('DOMContentLoaded', init);