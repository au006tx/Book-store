from django.db import models

# Create your models here.
class Book(models.Model):
    book_name = models.CharField(max_length=100, help_text='Enter the name of the book')
    book_price = models.IntegerField(help_text='Enter the price of book')
    isbn_number = models.CharField(max_length=100)
    book_file = models.FileField()

    def __str__(self):
        return self.book_name

    class Meta:
        verbose_name_plural = "Book"
