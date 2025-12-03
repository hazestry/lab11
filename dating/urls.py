from django.urls import path
from . import views

app_name = 'dating'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('profiles/', views.profile_list_view, name='profile_list'),
    path('profile/<int:pk>/', views.profile_detail_view, name='profile_detail'),
    path('profile/create/', views.create_profile_view, name='create_profile'),
    path('profile/edit/', views.edit_profile_view, name='edit_profile'),
    path('profile/my/', views.my_profile_view, name='my_profile'),
    path('like/<int:user_id>/', views.toggle_like_view, name='toggle_like'),
    path('messages/', views.messages_view, name='messages'),
    path('messages/<int:user_id>/', views.messages_view, name='messages'),
    path('admin/export/', views.export_data_view, name='export_data'),
]