import email
from random import randint
from unicodedata import category
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from django.core.mail import send_mail
from rest_framework.pagination import PageNumberPagination
from .serializers import TeacherSerializer, CategorySerializer, ContactSerializer, CourseSerializer, ChapterSerializer, FAQSerializer, StudentSerializer,StudentCourseEnrollSerializer, TeacherDashboardSerializer
from .import models


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'page_size'
    max_page_size = 4
    

class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]
    
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]
    
class TeacherDashboard(generics.RetrieveAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherDashboardSerializer

@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        teacherData=models.Teacher.objects.get(email=email, password=password)
    except models.Teacher.DoesNotExist:
        teacherData=None
    if teacherData:
        if not teacherData.verify_status:
            return JsonResponse({'bool':False, 'msg':'Account is not verified'})
        else:
            return JsonResponse({'bool':True, 'teacher_id':teacherData.id})
    else:
        return JsonResponse({'bool':False, 'msg':'invalid email or password'})
    
    
@csrf_exempt
def verify_teacher_via_otp(request, teacher_id):
    otp_digit=request.POST.get('otp_digit')
    verify=models.Teacher.objects.filter(id=teacher_id, otp_digit=otp_digit).first()
    if verify:
        models.Teacher.objects.filter(id=teacher_id, otp_digit=otp_digit).update(verify_status=True)
        return JsonResponse({'bool':True, 'teacher_id':verify.id})
    else:
        return JsonResponse({'bool':False})    
    
class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CategorySerializer
    
    # Course
class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    pagination_class = StandardResultsSetPagination
    
    def get_queryset(self):
        qs=super().get_queryset()
        if 'result' in self.request.GET:
            limit=int(self.request.GET['result'])
            qs=models.Course.objects.all().order_by('-id')[:limit]
        if 'category' in self.request.GET:
            category=self.request.GET['category']
            qs=models.Course.objects.filter(techs__icontains=category)
        if 'searchstring' in self.kwargs:
            search=self.kwargs['searchstring']
            qs=models.Course.objects.filter(title__icontains=search)
        return qs

class CourseDetailView(generics.RetrieveAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer

    # Specify Teacher Course
class TeacherCourseList(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)
    
    # Specify Teacher Course
class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    
    # Chapter
class ChapterList(generics.ListCreateAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class = ChapterSerializer
    
    # Course Chapter
class CourseChapterList(generics.ListCreateAPIView):
    serializer_class = ChapterSerializer
    
    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=models.Course.objects.get(pk=course_id)
        return models.Chapter.objects.filter(course=course)
    
class ChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class = ChapterSerializer

# Students

class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    # permission_classes=[permissions.IsAuthenticated]
    
class StudentDashboard(generics.RetrieveAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    
class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    # permission_classes=[permissions.IsAuthenticated]
    
    
    # Student Login
@csrf_exempt
def student_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        studentData=models.Student.objects.get(email=email, password=password)
    except models.Student.DoesNotExist:
        studentData=None
    if studentData:
        return JsonResponse({'bool':True, 'student_id':studentData.id})
    else:
        return JsonResponse({'bool':False})
    
class StudentEnrollCourseList(generics.ListCreateAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    
    
def fetch_enroll_status(request, student_id, course_id):
    student=models.Student.objects.filter(id=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    enrollstatus=models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
    if enrollstatus:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
    
    
class EnrolledStudentList(generics.ListAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    
    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id=self.kwargs['course_id']
            course=models.Course.objects.get(pk=course_id)
            return models.StudentCourseEnrollment.objects.filter(course=course)
        elif 'teacher_id' in self.kwargs:
            teacher_id=self.kwargs['teacher_id']
            teacher=models.Teacher.objects.get(pk=teacher_id)
            return models.StudentCourseEnrollment.objects.filter(course__teacher=teacher).distinct()
        elif 'student_id' in self.kwargs:
            student_id=self.kwargs['student_id']
            student=models.Student.objects.get(pk=student_id)
            return models.StudentCourseEnrollment.objects.filter(student=student).distinct()
        
        # Teacher Change Password
@csrf_exempt
def teacher_change_password(request, teacher_id):
    password=request.POST['password']
    try:
        teacherData=models.Teacher.objects.get(id=teacher_id)
    except models.Teacher.DoesNotExist:
        teacherData=None
    if teacherData:
        models.Teacher.objects.filter(id=teacher_id).update(password=password)
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
    
@csrf_exempt
def verify_student_via_otp(request, student_id):
    otp_digit=request.POST.get('otp_digit')
    verify=models.Student.objects.filter(id=student_id, otp_digit=otp_digit).first()
    if verify:
        models.Student.objects.filter(id=student_id, otp_digit=otp_digit).update(verify_status=True)
        return JsonResponse({'bool':True, 'student_id':verify.id})
    else:
        return JsonResponse({'bool':False})
    
@csrf_exempt
def student_change_password(request, student_id):
    password=request.POST['password']
    try:
        studentData=models.Student.objects.get(id=student_id)
    except models.Student.DoesNotExist:
        studentData=None
    if studentData:
        models.Student.objects.filter(id=student_id).update(password=password)
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})

    #Page List 
class FaqList(generics.ListAPIView):
    queryset = models.FAQ.objects.all()
    serializer_class = FAQSerializer
    
class ContactList(generics.ListCreateAPIView):
    queryset = models.Contact.objects.all()
    serializer_class = ContactSerializer
    
    
@csrf_exempt
def teacher_forgot_password(request):
    email=request.POST.get('email')
    verify=models.Teacher.objects.filter(email=email).first()
    if verify:
        link=f'http//localhost:3000/teacher-change-password/{verify.id}/'
        send_mail(
            'verify account',
            'please verify your account',
            'imohinangha@gmail.com',
            {email},
            fail_silently=False,
            html_message=f'<p>your OTP is</p><p>{link}</p>'
        )
        return JsonResponse({'bool':True, 'msg':'please check your email email'})
    else:
        return JsonResponse({'bool':False, 'msg':'invalid email'})
    
    
@csrf_exempt
def teacher_change_password(request, teacher_id):
    password=request.POST.get('password')
    verify=models.Teacher.objects.filter(id=teacher_id).first()
    if verify:
        models.Teacher.objects.filter(id=teacher_id).update(password=password)
        return JsonResponse({'bool':True, 'msg':'password has been changed'})
    else:
        return JsonResponse({'bool':False, 'msg':'oops.......Some Error Occured'})