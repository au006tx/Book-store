from rest_framework import serializers
from libraryapp.models import Book
from django.contrib.auth.models import User


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('book_name', 'book_price', 'isbn_number', 'get_pdf', 'get_image')

class BookImageSerializer(serializers.ModelSerializer):
    image_url = serializers.CharField(source='book_image')
    class Meta:
        model = Book
        fields = ('image_url')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name')