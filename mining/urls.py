from django.urls import path
from mining import views

urlpatterns = [
    path('',views.index,name='home'),
    path('create-account/', views.create_account,name='create-account'),
    path('maps/', views.maps,name='maps'),
    path('about/', views.about,name='about'),
    path('contact/', views.contact,name='contact'),
    path('', views.logout,name='logout'),
]