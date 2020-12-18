import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

let routes: Routes;
routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }
  // {
  //   path: 'index',
  //   loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
  // {
  //   path: 'feed',
  //   loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  // },
  // {
  //   path: 'notifications',
  //   loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  // },
  // {
  //   path: 'messages',
  //   loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
