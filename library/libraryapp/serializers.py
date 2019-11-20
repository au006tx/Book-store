from rest_framework import serializers
from libraryapp.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('book_name', 'book_price', 'isbn_number', 'get_pdf', 'get_image')

class BookImageSerializer(serializers.ModelSerializer):
    image_url = serializers.CharField(source='book_image')
    class Meta:
        model = Book
        fields = ('image_url')