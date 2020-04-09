// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpErrorResponse,
// } from '@angular/common/http';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private auth: AuthService, private router: Router) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (this.auth.isAuthenticated()) {
//       req = req.clone({
//         setParams: {
//           auth: this.auth.,
//         },
//       });
//     }
//     return next.handle(req).pipe(
//       catchError((err: HttpErrorResponse) => {
//         if (err.status === 401) {
//           this.auth.logout();
//           this.router.navigate(['/admin', 'login'], {
//             queryParams: {
//               authFaild: true,
//             },
//           });
//         }
//         return throwError(err);
//       })
//     );
//   }
// }
