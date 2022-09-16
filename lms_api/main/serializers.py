import email
from urllib import request
from rest_framework import serializers
from . import models 
from django.core.mail import send_mail

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id','full_name', 'profile_img', 'country', 'email', 'password', 'qualification', 'otp_digit', 'mobile_no', 'skills', 'teacher_courses']
    
    def __init__(self, *args, **kwargs):
        super(TeacherSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=1
        
    def create(self, validate_data):
        email=self.validated_data['email']
        otp_digit=self.validated_data['otp_digit']
        instance=super(TeacherSerializer, self).create(validate_data)
        send_mail(
            'verify account',
            'please verify your account',
            'imohinangha@gmail.com',
            {email},
            fail_silently=False,
            html_message=f'<p>your OTP is</p><p>{otp_digit}</p>'
        )
        return instance
        
class TeacherDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['total_teacher_courses','total_teacher_students', 'total_teacher_chapters']
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = ['id','title', 'description']
        
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id',
                  'category', 
                  'teacher', 
                  'title',
                  'university',
                  'type',
                  'deadline',
                  'schooldescription',
                  'intake',
                  'table',
                  'chick',
                  'bird',
                  'fowl',
                  'eagle',
                  'duration',
                  'studymode',
                  'tuitionfees', 
                  'description', 
                  'featured_img', 
                  'techs', 
                  'course_chapters', 
                  'tech_list', 
                  'total_enrolled_students']
        
    def __init__(self, *args, **kwargs):
        super(CourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=2
       
        
   
class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chapter
        fields = ['id','course', 'title', 'description', 'video', 'remarks']
        
    def __init__(self, *args, **kwargs):
        super(ChapterSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=1
        
        
# Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['id','full_name', 'email', 'password', 'others', 'username', 'academic_level', 'country', 'english_language', 'academic', 'interested_categories', 'enrolled_courses', 'profile_img']
        depth=1
        
    def __init__(self, *args, **kwargs):
        super(StudentSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=2
        
        
class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id','course', 'student', 'enrolled_time']
    def __init__(self, *args, **kwargs):
        super(StudentCourseEnrollSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=2
        
class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FAQ
        fields = ['questions','answers']
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = ['full_name','email', 'query','add_time']
    