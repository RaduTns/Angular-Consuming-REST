
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItemService } from '../models/inventory-item.service';
import { AuthService } from '../_services/auth.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  

  constructor(private authService: AuthService, private inventoryItemSerivce:InventoryItemService){
    
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    const hardcodedToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI5bFNvVnlGcmRXdmxBRGFYWko4T3pOSDlMNGlMT2JLMFQtckxXWF9aa2hZIn0.eyJleHAiOjE2NzM5OTQwODAsImlhdCI6MTY3Mzk5Mzc4MCwianRpIjoiMmI2OGUxZWMtYWIwNS00ZWUyLWEwOTYtMmFjYWM5ODI0Y2U0IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9LZXljbG9ha0ludGVncmF0aW9uVG9tY2F0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImI5ODBjMmZmLWJjNTQtNDNmMS04NzcxLWQ3YTUwYzA5ZTg2MiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImludmVudG9yeS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1rZXljbG9ha2ludGVncmF0aW9udG9tY2F0Iiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxMjcuMC4wLjEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudElkIjoiaW52ZW50b3J5LWNsaWVudCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1pbnZlbnRvcnktY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjEyNy4wLjAuMSJ9.clSuGCdn_c3Lvgslok9AAuqs7rerXdBG5rdIymW1IQ0GWGekAR4FrGUxcT6VJsRdJNqWWy4AO3lhZzxhQBVxMI3Xx54SrdSDdM5h77yqrdcAsOlWt7MtIff2qnWBVHY0fgCy9ccp5dXguZoQF_-oSjRW11Alz5VVZFtzc2oPbf7fOwqYX9MeNxzK8z1OH6KfNQQ-YJZhidNLna87OfcRxf0oEjo-W9J8SFjdHjBPqTWZKmkDsUscs3sFCFAWA-JQqn5hMeSIqykD9qaa2RppDEoKm-aTbMvXB4EkXLwLTCGhH2UJkxf-954-ul-x6AylH8iRTJxjISaTqPuLcr-2Qg"
    const token = this.authService.retrieveToken()

    return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
    })
  }
}