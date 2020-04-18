from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    #queryset = Lead.objects.filter(id=1)
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer