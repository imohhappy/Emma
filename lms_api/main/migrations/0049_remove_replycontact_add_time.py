# Generated by Django 4.0.6 on 2022-08-13 14:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0048_replycontact'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='replycontact',
            name='add_time',
        ),
    ]
