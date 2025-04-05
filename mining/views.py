import geocoder
from django.shortcuts import render, redirect
from django.contrib import messages
import requests
# Create your views here.

def index(request):
    # messages.info(request, 'Welcome to GoldMine AI')
    return render (request,'index.html')

def create_account(request):
    return render (request, 'create-account.html')

def maps(request):
    return render (request, 'maps.html')

def about(request):
    return render (request, 'about.html')

def contact(request):
    return render (request, 'contact.html')

def logout(request):
    return render (request, 'index.html')