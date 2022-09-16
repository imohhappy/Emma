from django.urls import path
from . import views

urlpatterns = [
    # Teacher
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/dashboard/<int:pk>/', views.TeacherDashboard.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher/change-password/<int:teacher_id>/', views.teacher_change_password),
    path('teacher-change-password/<int:teacher_id>/', views.teacher_change_password),
    path('verify-teacher/<int:teacher_id>/', views.verify_teacher_via_otp),
    path('teacher-forgot-password/', views.teacher_forgot_password),
    path('teacher-login', views.teacher_login),
    # Category
    path('category/', views.CategoryList.as_view()),
    # Course
    path('course/', views.CourseList.as_view()),
    path('search-courses/<str:searchstring>', views.CourseList.as_view()),
    # Chapter
    path('chapter/', views.ChapterList.as_view()),
    # EditChapter
    path('chapter/<int:pk>', views.ChapterDetailView.as_view()),
    # Course Detail View
    path('course/<int:pk>/', views.CourseDetailView.as_view()),
    # Specific Course Chapters
    path('course-chapters/<int:course_id>', views.CourseChapterList.as_view()), 
    # Teacher Courses
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()), 
    # Teacher Specific Course/Course Detail
    path('teacher-course-detail/<int:pk>', views.TeacherCourseDetail.as_view()),
    
    # Student
    path('student/', views.StudentList.as_view()),
    path('student/<int:pk>/', views.StudentDetail.as_view()),
    path('student/change-password/<int:student_id>/', views.student_change_password),
    path('student/dashboard/<int:pk>/', views.StudentDashboard.as_view()),
    path('student-login', views.student_login),
    path('student-enroll-course/', views.StudentEnrollCourseList.as_view()),
    path('fetch-enroll-status/<int:student_id>/<int:course_id>', views.fetch_enroll_status),
    path('fetch-all-enrolled-students/<int:teacher_id>', views.EnrolledStudentList.as_view()),
    path('fetch-enrolled-students/<int:course_id>', views.EnrolledStudentList.as_view()),
    path('fetch-enrolled-courses/<int:student_id>', views.EnrolledStudentList.as_view()),
    path('verify-user/<int:student_id>/', views.verify_student_via_otp),
    
    # Pages
    path('faq/', views.FaqList.as_view()),
    path('contact/', views.ContactList.as_view()),
    # path('replycontact/', views.ReplyContactList.as_view()),
    
    # Email
    
    # path('email/', views.email, name='email'),
]
