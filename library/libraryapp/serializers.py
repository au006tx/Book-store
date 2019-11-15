from rest_framework import serializers
from libraryapp.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('book_name', 'book_price', 'isbn_number')