from libraryapp.views import *
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

app_name = 'libraryapp'

urlpatterns = [
    path('books/', api_books_list_view, name='books_list'),
    path('users/', ListUserView.as_view(), name='user_list'),
]


# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

