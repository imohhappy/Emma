# Generated by Django 4.0.6 on 2022-08-15 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0059_rename_country_teacher_countrys'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teacher',
            old_name='countrys',
            new_name='country',
        ),
        migrations.AlterField(
            model_name='student',
            name='country',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
