# Generated by Django 4.0.6 on 2022-08-12 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0045_teacher_bird_teacher_chick_teacher_eagle_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teacher',
            name='bird',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='chick',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='eagle',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='fowl',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='mobile_no',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='table',
        ),
        migrations.AddField(
            model_name='course',
            name='bird',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='course',
            name='chick',
            field=models.CharField(default=2, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='course',
            name='eagle',
            field=models.CharField(default=3, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='course',
            name='fowl',
            field=models.CharField(default=3, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='course',
            name='mobile_no',
            field=models.CharField(default=4, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='course',
            name='table',
            field=models.CharField(default=5, max_length=200),
            preserve_default=False,
        ),
    ]
