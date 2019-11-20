from django.db import models

# Create your models here.
class Book(models.Model):
    book_name = models.CharField(max_length=100, help_text='Enter the name of the book')
    book_price = models.IntegerField(help_text='Enter the price of book')
    isbn_number = models.CharField(max_length=100)
    book_file = models.FileField()
    book_image = models.ImageField(upload_to='media')

    def __str__(self):
        return self.book_name

    class Meta:
        verbose_name_plural = "Book"

    def get_image(self):
        return 'http://127.0.0.1:8000/'+self.book_image.url

    def get_pdf(self):
        return 'http://127.0.0.1:8000/'+self.book_file.url
