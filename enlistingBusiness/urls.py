from rest_framework import routers
from .views import EnlistBusinessViewSet

router = routers.DefaultRouter()
router.register('api/enlistbusiness', EnlistBusinessViewSet, 'enlistbusiness')

urlpatterns = router.urls
