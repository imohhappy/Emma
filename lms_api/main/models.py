from distutils.command.upload import upload
from django.db import models
from django.core.mail import send_mail

#Teacher Model
class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100, blank=True, null=True)
    qualification = models.CharField(max_length=200)
    country = models.TextField()
    profile_img=models.ImageField(upload_to='teacher_profile_imgs/', null=True)
    mobile_no = models.CharField(max_length=20)
    skills = models.TextField()
    verify_status=models.BooleanField(default=False)
    otp_digit=models.CharField(max_length=50, null=True)
    
    class Meta:
        verbose_name_plural = "1. Teachers"

    def __str__(self):
        return self.full_name
        
        # total teacher courses
    def total_teacher_courses(self):
        total_courses=Course.objects.filter(teacher=self).count()
        return total_courses
    
    # total teacher chapters
    def total_teacher_chapters(self):
        total_chapters=Chapter.objects.filter(course__teacher=self).count()
        return total_chapters
    
    # total teacher students
    def total_teacher_students(self):
        total_students=StudentCourseEnrollment.objects.filter(course__teacher=self).count()
        return total_students
    
    
#Course Category Model
class CourseCategory(models.Model):
    title=models.CharField(max_length=150)
    description = models.TextField()
    
    class Meta:
        verbose_name_plural = "2. Course Categories"
        
    def __str__(self):
        return self.title
    
#Course Model
class Course(models.Model):
    category=models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teacher_courses')
    university = models.CharField(max_length=150)
    type = models.CharField(max_length=150)
    intake = models.CharField(max_length=150)
    duration = models.CharField(max_length=150)
    bird = models.CharField(max_length=200)
    fowl = models.CharField(max_length=200)
    deadline = models.CharField(max_length=200)
    chick = models.CharField(max_length=200)
    eagle = models.CharField(max_length=200)
    table = models.CharField(max_length=200)
    studymode = models.CharField(max_length=150)
    tuitionfees = models.CharField(max_length=150)
    title=models.CharField(max_length=150)
    description = models.TextField()
    schooldescription = models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/', null=True)
    techs= models.TextField(null=True)
    
    
    class Meta:
        verbose_name_plural = "3. Courses"

    def tech_list(self):
        tech_list=self.techs
            # .split(',')
        return tech_list
    
    def total_enrolled_students(self):
        total_enrolled_students=StudentCourseEnrollment.objects.filter(course=self).count()
        return total_enrolled_students
    
    def __str__(self):
        return self.title

#Chapter Model
class Chapter(models.Model):
    course=models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_chapters')
    title=models.CharField(max_length=150)
    description = models.TextField()
    video=models.FileField(upload_to='chapter_videos/', null=True)
    remarks= models.TextField(null=True)
    
    
    class Meta:
        verbose_name_plural = "4. Chapters"
    
#Student Model
class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100, blank=True, null=True)
    username = models.CharField(max_length=200)
    interested_categories = models.TextField()
    country = models.CharField(max_length=100, blank=True, null=True)
    others = models.FileField(upload_to='student_document/', null=True)
    academic_level =  models.FileField(upload_to='student_document/', null=True)
    academic = models.FileField(upload_to='student_document/', null=True)
    english_language = models.FileField(upload_to='student_document/', null=True)
    profile_img=models.ImageField(upload_to='student_profile_imgs/', null=True)
    verify_status=models.BooleanField(default=False)
    otp_digit=models.CharField(max_length=50, null=True)
    
    def __str__(self):
        return self.full_name
    
        # total enrolled courses
    def enrolled_courses(self):
        enrolled_courses=StudentCourseEnrollment.objects.filter(student=self).count()
        return enrolled_courses
    
    class Meta:
        verbose_name_plural = "5. Students"
        
# Student Course Enrollment
class StudentCourseEnrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrolled_courses')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrolled_student')
    enrolled_time=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = '6. Enrolled Courses'
        
    def __str__(self):
        return f"{self.course}-{self.student}"
    
    
# FAQ moodel
class FAQ(models.Model):
    questions = models.CharField(max_length=1000)
    answers = models.TextField()
    
    def __str__(self) -> str:
        return self.questions
    
    class Meta:
        verbose_name_plural = '7. Faq'
        
    # Contact moodel
class Contact(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    query = models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.query
    
    class Meta:
        verbose_name_plural = '8. Contact'
# Create your models here.
