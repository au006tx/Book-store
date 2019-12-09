from django.shortcuts import render
from libraryapp.models import Book
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView

from libraryapp.serializers import BookSerializer, BookImageSerializer, UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET',])
def api_books_list_view(request):
    book = Book.objects.all()
    if request.method == 'GET':
        serializer = BookSerializer(book, many=True)
        return Response(serializer.data)

@api_view(['GET',])
def api_books_image_view(request):
    book = Book.objects.all()
    if request.method == 'GET':
        serializer = BookImageSerializer(book)
        return Response(serializer.data)

class ListUserView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer






