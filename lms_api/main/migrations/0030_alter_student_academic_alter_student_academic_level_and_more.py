# Generated by Django 4.0.6 on 2022-08-11 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0029_student_academic_student_academic_level_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='academic',
            field=models.FileField(null=True, upload_to='student_document/'),
        ),
        migrations.AlterField(
            model_name='student',
            name='academic_level',
            field=models.FileField(null=True, upload_to='student_document/'),
        ),
        migrations.AlterField(
            model_name='student',
            name='english_language',
            field=models.FileField(null=True, upload_to='student_document/'),
        ),
    ]
