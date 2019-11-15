from libraryapp.views import *
from django.urls import path

app_name = 'libraryapp'

urlpatterns = [
    path('books/', api_books_list_view, name='books_list'),
]
