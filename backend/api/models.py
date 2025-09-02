from django.db import models


class Country(models.Model):
    name = models.CharField(verbose_name='Название страны', max_length=100)
    image = models.ImageField(verbose_name='Флаг страны', upload_to='countries/', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Страна'
        verbose_name_plural = 'Страны'


class Skill(models.Model):
    name = models.CharField(verbose_name='Название умения', max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Умение'
        verbose_name_plural = 'Умения'


class Advantages(models.Model):
    name = models.CharField(verbose_name='Преимущество', max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Преимущество'
        verbose_name_plural = 'Преимущества'


class Document(models.Model):
    name = models.CharField(verbose_name="Название документа", max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'


class TransferAdvantage(models.Model):
    name = models.CharField(verbose_name='Преимущества', max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Приемущество'
        verbose_name_plural = 'Преимущества'


class TransferWay(models.Model):
    name = models.CharField(verbose_name='Название способа', max_length=100)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, verbose_name='Страна переезда', blank=True)
    skills = models.ManyToManyField(Skill, verbose_name='Необходимые навыки', blank=True)
    advantages = models.ManyToManyField(Advantages, verbose_name='Преимущество', blank=True, null=True)
    needed_sum = models.IntegerField(verbose_name='Необходимая сумма, $', default=0)
    documents = models.ManyToManyField(Document, verbose_name='Необходимые документы', blank=True)
    duration_days = models.IntegerField(verbose_name='Срок выполнения (в днях)', default=0)
    description = models.TextField(verbose_name='Описание способа переезда', blank=True, null=True)
    instantly = models.BooleanField(verbose_name='Моментально?', default=False)

    is_legally = models.BooleanField(verbose_name='Легальный переезд?', default=True)
    is_add_services = models.BooleanField(verbose_name='Дополнительная услуга?', default=False, blank=True, null=True)

    otsrochka = models.BooleanField(default=False, verbose_name='Отсрочка', blank=True, null=True)
    obuchnui = models.BooleanField(default=False, verbose_name='Обычный переезд', blank=True, null=True)
    nelegal = models.BooleanField(default=False, verbose_name='Нелегальный переезд', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Способ переезда'
        verbose_name_plural = 'Способы переезда'


class ContactRequest(models.Model):
    telegram = models.CharField('Телеграм', max_length=100)
    transfer_way = models.ForeignKey(TransferWay, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Способ выезда')
    answers_json = models.JSONField(null=True, blank=True, verbose_name='Ответы с формы')
    created_at = models.DateTimeField(auto_now_add=True, editable=True)




class NewsTags(models.Model):
    name = models.CharField(verbose_name='Название тега', max_length=50)
    slug = models.SlugField(verbose_name='URL', unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'


class NewsPoint(models.Model):
    text = models.TextField(verbose_name='Текст пункта')

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Пункт'
        verbose_name_plural = 'Пункты'


class NewsParagraphs(models.Model):
    title = models.CharField(verbose_name='Заголовок параграфа', max_length=255)
    point = models.ManyToManyField(NewsPoint, verbose_name='Пункт параграфа')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Параграф'
        verbose_name_plural = 'Параграфы'


class News(models.Model):
    title = models.CharField(verbose_name='Название новости', max_length=300)
    mini_description = models.TextField(verbose_name='Небольшое описание новости')
    created_at = models.DateTimeField(verbose_name='Дата создания', editable=True)
    img = models.ImageField(verbose_name='Фото для новости', upload_to='news/')

    tags = models.ManyToManyField(NewsTags, verbose_name='Теги для новости')
    paragraphs = models.ManyToManyField(NewsParagraphs, verbose_name='Параграфы для новости')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'





class Review(models.Model):
    author = models.CharField(max_length=255)
    text = models.TextField(blank=True, null=True)
    video = models.FileField(upload_to="reviews/videos/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def video_url(self):
        return self.video.url if self.video else None

    class Meta:
        ordering = ['-pk']


